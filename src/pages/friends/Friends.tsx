import { FlexBox } from '@components/layouts/FlexBox'
import NewFriends from '@components/friends/NewFriends'
import AllFriends from '../../components/friends/AllFriends'
import BirthdayFriends from '../../components/friends/BirthdayFriends'
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
