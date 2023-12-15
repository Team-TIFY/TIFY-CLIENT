import { Text } from '@components/atoms/Text'
import styled from '@emotion/styled'
import { useQuery, useMutation } from '@tanstack/react-query'
import { FriendsApi } from '@utils/apis/friends/FriendsApi'
import { useRecoilState } from 'recoil'
import { authState } from '@libs/store/auth'
import { Avatar } from '@components/atoms/Avatar'
import { FlexBox } from '@components/layouts/FlexBox'
import { questionState } from '@libs/store/question'
import { useState } from 'react'
import useSnackBar from '@libs/hooks/useSnackBar'
import { PokeCountType } from '@utils/apis/friends/FriendsType'

const PokeList = () => {
  const [auth, setAuth] = useRecoilState(authState)
  const [question, setQuestion] = useRecoilState(questionState)
  const [neighborId, setNeighborId] = useState(0)
  const { setSnackBar } = useSnackBar()
  const { data: friendsList = [] } = useQuery(
    ['friendsList', auth.userProfile.id],
    FriendsApi.GET_FRIENDS_LIST,
  )

  const getPokeCount = async (neighborId: number) => {
    try {
      const neighborData = await FriendsApi.POKE_COUNT_MYFRIEND({
        questionId: question.questionId,
        userId: neighborId,
      })
      return neighborData
    } catch (error) {
      console.error('실패!')
      throw error
    }
  }
  const pokeMutation = useMutation(FriendsApi.POKE_FRIEND, {
    onSuccess: async () => {
      const data = await getPokeCount(neighborId)
      setSnackBar({
        comment: `${friendsList.find(
          (friend) => friend.neighborUserId === data.knockedUserId,
        )?.neighborName}님을 ${data.knockCount}번 쿡 찔렀어요!`,
      })
    },
  })

  return (
    <PokeListContainer>
      <Text typo="Subhead_14" color="white">
        친구를 쿡 찔러보세요!
      </Text>
      <GridContainer>
        {friendsList.map((data, index) => (
          <FlexBox
            direction="column"
            key={index}
            gap={8}
            onClick={() => {
              setNeighborId(data.neighborUserId)
              pokeMutation.mutate({
                questionId: question.questionId,
                userId: data.neighborUserId,
              })
            }}
          >
            <Avatar imageUrl={data.neighborThumbnail} variant="medium" />
            <Text typo="Caption_12M" color="white">
              {data.neighborName}
            </Text>
          </FlexBox>
        ))}
      </GridContainer>
    </PokeListContainer>
  )
}
export default PokeList

const PokeListContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 0px 26px;
`
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px 28px;
`
