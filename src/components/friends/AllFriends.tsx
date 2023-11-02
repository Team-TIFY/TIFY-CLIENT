import { useCallback } from 'react'
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
import { FriendsApi } from '@utils/apis/friends/FriendsApi'
import useRecoilToggle from '@libs/hooks/useRecoilToggle'

const AllFriends = () => {
  const [isCubeList, toggleListOption] =
    useRecoilToggle<ProfileState>(profileState)

  const auth = useRecoilValue(authState)

  const { data: friendsList = [] } = useQuery(
    ['friendsList', auth.userProfile.id],
    FriendsApi.GET_FRIENDS_LIST,
  )

  const getMenuIcon = useCallback(() => {
    if (isCubeList.value) {
      return <ListIcon />
    } else {
      return <FriendsMenuIcon />
    }
  }, [isCubeList.value])

  const renderCubeFriendsList = () => {
    return isCubeList.value ? (
      <FriendsListCItem friendsList={friendsList} />
    ) : (
      <FriendsListBItem friendsList={friendsList} />
    )
  }

  return (
    <>
      <FlexBox
        justify="space-between"
        style={{ padding: '16px', width: '360px' }}
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
      <Padding size={[0, 16]}>{renderCubeFriendsList()}</Padding>
      <Spacing height={16} />
    </>
  )
}

export default AllFriends
