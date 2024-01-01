import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { useQuery } from '@tanstack/react-query'
import styled from '@emotion/styled'

import { authState } from '@libs/store/auth'
import { profileState } from '@libs/store/profile'
import useRecoilToggle from '@libs/hooks/useRecoilToggle'
import { FriendsApi } from '@apis/FriendsApi'
import { ProfileStateType } from '@models/stores/profile'
import { FriendsType } from '@models/apis/FriendsType'
import { friendsQueryKeys } from '@constants/queryKeys/friendsQueryKeys'
import ListIcon from '@assets/icons/ListIcon'
import ShareIcon from '@assets/icons/ShareIcon'
import FriendsMenuIcon from '@assets/icons/FriendsMenuIcon'
import { FlexBox } from '@components/layouts/FlexBox'
import { Padding } from '@components/layouts/Padding'
import { Spacing } from '@components/atoms/Spacing'
import { Text } from '@components/atoms/Text'
import { RoundButton } from '@components/atoms/RoundButton'
import Svg from '@components/atoms/Svg'
import FriendsListCItem from './FriendsListCItem'
import FriendsListBItem from './FriendsListBItem'

const AllFriends = () => {
  const navigate = useNavigate()
  const [isCubeList, toggleListOption] =
    useRecoilToggle<ProfileStateType>(profileState)

  const auth = useRecoilValue(authState)

  const [sortedFriendsList, setSortedFriendsList] = useState<FriendsType[]>([])

  const { data: friendsListData = [] } = useQuery(
    [friendsQueryKeys.FRIENDS_LIST, auth.userProfile.id],
    FriendsApi.GET_FRIENDS_LIST,
  )

  useEffect(() => {
    const sortedFriendsListData = [...friendsListData].sort((a, b) =>
      a.neighborName.localeCompare(b.neighborName),
    )
    setSortedFriendsList(sortedFriendsListData)
  }, [friendsListData])

  const getMenuIcon = useCallback(() => {
    if (isCubeList.value) {
      return <ListIcon />
    } else {
      return <FriendsMenuIcon />
    }
  }, [isCubeList.value])

  const renderCubeFriendsList = () =>
    isCubeList.value ? (
      <FriendsListCItem
        friendsList={sortedFriendsList}
        alignLeft={sortedFriendsList.length % 2 === 1}
      />
    ) : (
      <FriendsListBItem friendsList={sortedFriendsList} />
    )

  const handleClickAddFriend = () => {
    navigate('/friends/addFriend')
  }

  return (
    <>
      <FlexBox
        justify="space-between"
        style={{ padding: '16px', width: '100%' }}
      >
        <FlexBox>
          <Text
            typo="Caption_12R"
            children="친구"
            color="gray_100"
            style={{ margin: '0 4px 0 0' }}
          />
          <Text
            typo="Mont_Caption_12M"
            children={sortedFriendsList.length}
            color="gray_400"
          />
        </FlexBox>
        <Svg
          children={getMenuIcon()}
          style={{ cursor: 'pointer' }}
          onClick={toggleListOption}
        />
      </FlexBox>
      {sortedFriendsList.length ? (
        <StyledCubeFriendsListWrapper isCubeList={isCubeList}>
          <Padding size={[0, 16]}>{renderCubeFriendsList()}</Padding>
          <Spacing height={16} />
        </StyledCubeFriendsListWrapper>
      ) : (
        <>
          <Spacing height={32} />
          <Text
            typo="Subhead_14"
            color="gray_200"
            children="아직 친구가 없어요."
          />
          <Text
            typo="Subhead_14"
            color="gray_200"
            children="ID 공유를 통해 친구를 추가해보세요."
          />
          <RoundButton
            variant="xlargeRound"
            children="ID 공유하고 친구 추가하기"
            xlargeRightChildren={<Svg children={<ShareIcon />} />}
            onClick={handleClickAddFriend}
            style={{ position: 'fixed', bottom: '113px' }}
          />
        </>
      )}
    </>
  )
}

export default AllFriends

const StyledCubeFriendsListWrapper = styled.div<{
  isCubeList: ProfileStateType
}>`
  width: ${({ isCubeList }) => (isCubeList.value ? '360px' : '100%')};
`
