import { FlexBox } from '@components/layouts/FlexBox'
import AllFriends from '../../components/friends/AllFriends'
import BirthdayFriends from '../../components/friends/BirthdayFriends'

const Friends = () => {
  return (
    <FlexBox direction="column">
      <BirthdayFriends />
      <AllFriends />
    </FlexBox>
  )
}

export default Friends
