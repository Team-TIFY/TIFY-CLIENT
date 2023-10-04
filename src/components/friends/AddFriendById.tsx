import { SearchInput } from '@components/atoms/Input/SearchInput'
import { Text } from '@components/atoms/Text'
import { useInputTextChange } from '@libs/hooks/useInputTextChange'

const AddFriendById = () => {
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
    </>
  )
}

export default AddFriendById
