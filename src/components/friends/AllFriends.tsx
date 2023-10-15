import { Spacing } from '@components/atoms/Spacing'
import { FlexBox } from '@components/layouts/FlexBox'
import { Padding } from '@components/layouts/Padding'
import { Text } from '@components/atoms/Text'
import Svg from '@components/atoms/Svg'
import ListIcon from '@assets/icons/ListIcon'
import styled from '@emotion/styled'
import FriendsListC from '@components/atoms/FriendsList/FriendsListC'
import MenuIcon from '@assets/icons/MenuIcon'
import useToggle from '@libs/hooks/useToggle'
import FriendsListB from '@components/atoms/FriendsList/FriendsListB'
import { useRecoilValue } from 'recoil'
import { authState } from '@libs/store/auth'
import { useQuery } from '@tanstack/react-query'
import { FriendsApi } from '@utils/apis/friends/FriendsApi'

const AllFriends = () => {
  const [isCubeList, toggleListOption] = useToggle(true) as [
    boolean,
    () => void,
  ]

  const auth = useRecoilValue(authState)

  const { data: friendsList = [] } = useQuery(
    ['friendsList', auth.userProfile.userId],
    FriendsApi.GET_FRIENDS_LIST,
  )

  return (
    <>
      <FlexBox justify="space-between" style={{ padding: '16px' }}>
        <FlexBox>
          <Text
            typo="Caption_12R"
            children="친구"
            color="gray_100"
            style={{ margin: '0 4px 0 0' }}
          />
          <Text typo="Mont_Caption_12M" children={24} color="gray_400" />
        </FlexBox>
        <Svg
          children={isCubeList ? <ListIcon /> : <MenuIcon />}
          style={{ cursor: 'pointer' }}
          onClick={toggleListOption}
        />
      </FlexBox>
      <Padding size={[0, 16]}>
        {isCubeList ? (
          <FriendsListWrapper>
            {friendsList.map((friend) => (
              <FriendsListC
                key={friend.neighborId}
                name={friend.neighborName}
                currentState={friend.onBoardingStatus}
                imageUrl={friend.neighborThumbnail}
              />
            ))}
          </FriendsListWrapper>
        ) : (
          <FriendsListWrapper>
            {friendsList.map((friend) => (
              <FriendsListB
                key={friend.neighborId}
                name={friend.neighborName}
                currentState={friend.onBoardingStatus}
                imageUrl={friend.neighborThumbnail}
                description="newUpdate"
              />
            ))}
          </FriendsListWrapper>
        )}
      </Padding>
      <Spacing height={16} />
    </>
  )
}

export default AllFriends

const FriendsListWrapper = styled(FlexBox)`
  flex-wrap: wrap;
  gap: 16px;
`
