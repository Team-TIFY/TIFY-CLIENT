import { useCallback, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useRecoilValue } from 'recoil'
import { FlexBox } from '@components/layouts/FlexBox'
import { Padding } from '@components/layouts/Padding'
import { Spacing } from '@components/atoms/Spacing'
import { Text } from '@components/atoms/Text'
import Svg from '@components/atoms/Svg'
import FriendsListCItem from './FriendsListCItem'
import FriendsListBItem from './FriendsListBItem'
import ListIcon from '@assets/icons/ListIcon'
import FriendsMenuIcon from '@assets/icons/FriendsMenuIcon'
import { authState } from '@libs/store/auth'
import { ProfileState, profileState } from '@libs/store/profile'
import { FriendsApi } from '@apis/friends/FriendsApi'
import useRecoilToggle from '@libs/hooks/useRecoilToggle'
import { RoundButton } from '@components/atoms/RoundButton'
import ShareIcon from '@assets/icons/ShareIcon'
import { useNavigate } from 'react-router-dom'

const AllFriends = () => {
  const navigate = useNavigate()
  const [isCubeList, toggleListOption] =
    useRecoilToggle<ProfileState>(profileState)

  const auth = useRecoilValue(authState)

  const { data: friendsList = [] } = useQuery(
    ['friendsList', auth.userProfile.id],
    FriendsApi.GET_FRIENDS_LIST,
  )

  useEffect(() => {
    friendsList.sort((a, b) => a.neighborName.localeCompare(b.neighborName))
  }, [friendsList])

  const getMenuIcon = useCallback(() => {
    if (isCubeList.value) {
      return <ListIcon />
    } else {
      return <FriendsMenuIcon />
    }
  }, [isCubeList.value])

  const renderCubeFriendsList = () => {
    return isCubeList.value ? (
      <FriendsListCItem
        friendsList={friendsList}
        alignLeft={isCubeList.value && friendsList.length % 2 ? true : false}
      />
    ) : (
      <FriendsListBItem friendsList={friendsList} />
    )
  }

  const handleClickNavigateButton = () => {
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
            children={friendsList.length}
            color="gray_400"
          />
        </FlexBox>
        <Svg
          children={getMenuIcon()}
          style={{ cursor: 'pointer' }}
          onClick={toggleListOption}
        />
      </FlexBox>
      {friendsList.length ? (
        <div style={{ width: isCubeList.value ? '360px' : '100%' }}>
          <Padding size={[0, 16]}>{renderCubeFriendsList()}</Padding>
          <Spacing height={16} />
        </div>
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
            onClick={handleClickNavigateButton}
            style={{ position: 'fixed', bottom: '113px' }}
          />
        </>
      )}
    </>
  )
}

export default AllFriends
