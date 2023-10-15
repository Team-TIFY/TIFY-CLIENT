import { SearchInput } from '@components/atoms/Input/SearchInput'
import { Spacing } from '@components/atoms/Spacing'
import useInputTextChange from '@libs/hooks/useInputTextChange'

const SearchFriends = () => {
  const handleChangeSearchNickName = useInputTextChange()

  return (
    <>
      <Spacing height={16} />
      <SearchInput
        placeholder="친구 TIFY 닉네임 검색"
        onChange={handleChangeSearchNickName}
      />
    </>
  )
}

export default SearchFriends
