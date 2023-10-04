import LinkIcon from '@assets/icons/LinkIcon'
import ShareIcon from '@assets/icons/ShareIcon'
import FriendsListD from '@components/atoms/FriendsList/FriendsListD'
import { SearchInput } from '@components/atoms/Input/SearchInput'
import { Spacing } from '@components/atoms/Spacing'
import SquareButton from '@components/atoms/SquareButton'
import Svg from '@components/atoms/Svg'
import { Text } from '@components/atoms/Text'
import { FlexBox } from '@components/layouts/FlexBox'
import { useInputTextChange } from '@libs/hooks/useInputTextChange'

const AddFriend = () => {
  const handleChangeSearchId = useInputTextChange()

  return (
    <>
      <Text
        typo="Caption_12R"
        children="ID로 추가"
        color="gray_100"
        style={{ padding: '16px 16px 8px 16px' }}
      />
      <SearchInput
        placeholder="친구 TIFY ID 검색"
        onChange={handleChangeSearchId}
      />
      <Spacing height={32} />
      <Text
        typo="Caption_12R"
        children="친구 요청"
        color="gray_100"
        style={{ padding: '16px 16px 8px 16px' }}
      />
      <FlexBox direction="column">
        <FriendsListD nickName="sehee_han990821" friendsNumber={6} />
        <FriendsListD nickName="sdfsdfsa21" friendsNumber={6} />
      </FlexBox>
      <Spacing height={64} />
      <Text
        typo="Caption_12R"
        children="내 ID 공유하기"
        color="gray_100"
        style={{ padding: '16px' }}
      />
      <FlexBox gap={12}>
        <SquareButton variant="mediumSquare">
          <Svg
            children={<LinkIcon />}
            width={20}
            height={20}
            style={{ margin: '0 4px 0 0' }}
          />
          링크 복사하기
        </SquareButton>
        <SquareButton variant="mediumSquare">
          <Svg
            children={<ShareIcon />}
            width={20}
            height={20}
            style={{ margin: '0 4px 0 0' }}
          />
          공유하기
        </SquareButton>
      </FlexBox>
    </>
  )
}

export default AddFriend
