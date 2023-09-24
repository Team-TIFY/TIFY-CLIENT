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

const AllFriends = () => {
  const [isCubeList, toggleListOption] = useToggle(true) as [
    boolean,
    () => void,
  ]

  return (
    <>
      <FlexBox justify={'space-between'} style={{ padding: '16px' }}>
        <FlexBox>
          <Text
            typo="Caption_12R"
            children="친구"
            color={'gray_100'}
            style={{ margin: '0 4px 0 0' }}
          />
          <Text typo={'Mont_Caption_12M'} children={24} color="gray_400" />
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
            <FriendsListC
              name={'봉세환'}
              currentState={'요리 배우는 중 👩‍🍳'}
              imageUrl=""
            />
            <FriendsListC
              name={'박소정'}
              currentState={'비행기 바라보며 여행 꿈꾸는 중 ✈️'}
              imageUrl=""
            />
            <FriendsListC
              name={'김수빈'}
              currentState={'카페인 수혈로 살아나는 중 ☕🍰'}
              imageUrl=""
            />
            <FriendsListC
              name={'김유진'}
              currentState={'별자리 찾는 중 🌠'}
              imageUrl=""
            />
            <FriendsListC
              name={'김초연'}
              currentState={'복싱 연습 중 🥊'}
              imageUrl=""
            />
            <FriendsListC
              name={'홍서현'}
              currentState={'요리 배우는 중 👩‍🍳'}
              imageUrl=""
            />
          </FriendsListWrapper>
        ) : (
          <FriendsListWrapper>
            <FriendsListB
              name={'봉세환'}
              currentState={'요리 배우는 중 👩‍🍳'}
              imageUrl=""
              description="newUpdate"
            />
            <FriendsListB
              name={'박소정'}
              currentState={'비행기 바라보며 여행 꿈꾸는 중 ✈️'}
              imageUrl=""
              description="none"
            />
            <FriendsListB
              name={'김수빈'}
              currentState={'카페인 수혈로 살아나는 중 ☕🍰'}
              imageUrl=""
              description="none"
            />
            <FriendsListB
              name={'김유진'}
              currentState={'별자리 찾는 중 🌠'}
              imageUrl=""
              description="newUpdate"
            />
            <FriendsListB
              name={'김초연'}
              currentState={'복싱 연습 중 🥊'}
              imageUrl=""
              description="none"
            />
            <FriendsListB
              name={'홍서현'}
              currentState={'요리 배우는 중 👩‍🍳'}
              imageUrl=""
              description="none"
            />
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
