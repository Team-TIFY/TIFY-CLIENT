import { FlexBox } from '@components/layouts/FlexBox'
import NewFriends from '@components/friends/NewFriends'
import AllFriends from '../../components/friends/AllFriends'
import BirthdayFriends from '../../components/friends/BirthdayFriends'

const Friends = () => {
  return (
    <FlexBox direction="column">
      <BirthdayFriends />
      <NewFriends />
      <AllFriends />
    </FlexBox>
  )
}

export default Friends
