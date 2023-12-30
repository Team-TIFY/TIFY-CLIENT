import { FlexBox } from '@components/layouts/FlexBox'
import NewFriends from '@components/friends/FriendsList/NewFriends'
import AllFriends from '../../components/friends/FriendsList/AllFriends'
import BirthdayFriends from '../../components/friends/FriendsList/BirthdayFriends'
import { Spacing } from '@components/atoms/Spacing'

const Friends = () => {
  return (
    <FlexBox direction="column">
      <BirthdayFriends />
      <NewFriends />
      <AllFriends />
      <Spacing height={56} />
    </FlexBox>
  )
}

export default Friends
