import styled from '@emotion/styled'

import { selectedProps } from '@constants/Profile/selectedProps'
import { Filter } from '@components/atoms/Filter'
import { Spacing } from '@components/atoms/Spacing'
import { UserTagDataListItem } from './UserTagDataListItem'
import { UserTastesPropsType } from '@models/components/Profile/profile'

const UserTastes = ({
  userTagCountSumData,
  selectedTags,
  setSelectedTags,
  userTagData,
  userData,
}: UserTastesPropsType) => {
  return (
    <>
      <Spacing height={32} />
      <FilterWrapper>
        {userTagCountSumData && (
          <Filter
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            selectedProps={selectedProps}
          />
        )}
      </FilterWrapper>
      <Spacing height={20} />
      <UserTagDataListItem
        selectedProps={selectedProps}
        userTagData={userTagData}
        isFriend={!!userData}
      />
    </>
  )
}

export default UserTastes

const FilterWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`
