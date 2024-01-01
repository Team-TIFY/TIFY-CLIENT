import { Text } from '@components/atoms/Text'
import styled from '@emotion/styled'
import { useQuery, useMutation } from '@tanstack/react-query'
import { WeeklyApi } from '@apis/WeeklyApi'
import { FriendsApi } from '@apis/FriendsApi'
import { useRecoilState } from 'recoil'
import { authState } from '@libs/store/auth'
import { Avatar } from '@components/atoms/Avatar'
import { FlexBox } from '@components/layouts/FlexBox'
import { questionState } from '@libs/store/question'
import { useState } from 'react'
import animationData from '@assets/lotties/poking.json'
import { theme } from '@styles/theme'
import { Player } from '@lottiefiles/react-lottie-player'
import useSnackBar from '@libs/hooks/useSnackBar'
import BottomSheetBar from '@components/atoms/BottomSheet/BottomSheetBar'

const PokeList = () => {
  const [auth, setAuth] = useRecoilState(authState)
  const [question, setQuestion] = useRecoilState(questionState)
  const [knockCount, setKnockCount] = useState<{
    fromUserId: number
    knockedUserId: number
    knockCount: number
  }>({
    fromUserId: 0,
    knockedUserId: 0,
    knockCount: 0,
  })
  const [neighborId, setNeighborId] = useState(0)
  const [lastRequestTime, setLastRequestTime] = useState(0)
  const [isTriggered, setTrigger] = useState(false)
  const { setSnackBar } = useSnackBar()
  const { data: friendsList = [] } = useQuery(['neighborInfo'], () =>
    WeeklyApi.GET_NEIGHBOR_ANSWERS({
      questionId: question.questionId,
      userId: auth.userProfile.id,
    }),
  )

  const handleTrigger = () => {
    setTrigger(true)
    setTimeout(() => {
      setTrigger(false)
    }, 500)
  }

  const getPokeCount = async (neighborId: number) => {
    try {
      const neighborData = await FriendsApi.POKE_COUNT_MYFRIEND({
        questionId: question.questionId,
        userId: neighborId,
      })
      return neighborData
    } catch (error) {
      setSnackBar({
        comment: '에러 발생! 관리자에게 문의하세요.',
        type: 'error',
      })
      throw error
    }
  }
  const pokeMutation = useMutation(FriendsApi.POKE_FRIEND, {
    onMutate: async () => {
      const data = await getPokeCount(neighborId)
      setKnockCount(data)
    },
    onSuccess: async () => {
      setLastRequestTime(Date.now())
      setSnackBar({
        comment: `${
          friendsList.find(
            (friend) =>
              friend.neighborInfo.neighborUserId === knockCount.knockedUserId,
          )?.neighborInfo.neighborName
        }님을 ${knockCount.knockCount}번 쿡 찔렀어요!`,
        type: 'info',
      })
    },
  })

  const handlePokeButton = ({
    questionId,
    userId,
  }: {
    questionId: number
    userId: number
  }) => {
    const currentTime = Date.now()
    if (currentTime - lastRequestTime > 2000) {
      pokeMutation.mutate({
        questionId: questionId,
        userId: userId,
      })
    } else {
      return
    }
  }

  return (
    <PokeListContainer>
      <BottomSheetBar />
      <Text typo="Subhead_14" color="white" style={{ marginBottom: '24px' }}>
        친구를 쿡 찔러보세요!
      </Text>
      <GridContainer>
        {friendsList.map((data, index) => (
          <>
            {data.answerInfo.content === null && (
              <FlexBox
                direction="column"
                align="center"
                key={index}
                gap={8}
                onClick={() => {
                  setNeighborId(data.neighborInfo.neighborUserId)
                  handleTrigger()
                  handlePokeButton({
                    questionId: question.questionId,
                    userId: data.neighborInfo.neighborUserId,
                  })
                  // pokeMutation.mutate({
                  //   questionId: question.questionId,
                  //   userId: data.neighborInfo.neighborUserId,
                  // })
                }}
              >
                {neighborId === data.neighborInfo.neighborUserId &&
                isTriggered ? (
                  <LottieWrapper>
                    <Player
                      autoplay
                      loop
                      src={animationData}
                      style={{ height: '100px', width: '100px' }}
                    ></Player>
                  </LottieWrapper>
                ) : (
                  <div style={{ width: '100%', height: '100%' }}>
                    <Avatar
                      imageUrl={data.neighborInfo.neighborThumbnail}
                      variant="medium"
                    />
                    <Text typo="Caption_12M" color="white">
                      {data.neighborInfo.neighborName}
                    </Text>
                  </div>
                )}
              </FlexBox>
            )}
          </>
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
  justify-items: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
`
const LottieWrapper = styled.div`
  height: 60px;
  width: 60px;
  margin-bottom: 3px;
  background-color: ${theme.palette.dim_800};
  display: flex;
  justify-content: center;
  align-items: center;
`
