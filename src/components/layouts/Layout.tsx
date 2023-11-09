import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom'
import { theme } from '@styles/theme'
import { useRecoilValue } from 'recoil'
import { snackBarState } from '@libs/store/snackBar'
import SnackBar from '@components/atoms/SnackBar'

const Layout = () => {
  const snackBarStateData = useRecoilValue(snackBarState)

  return (
    <MainContainer>
      <Outlet />
      {snackBarStateData.isSnackBarOn && (
        <SnackBar
          variant={snackBarStateData.variant}
          message={snackBarStateData.message}
        />
      )}
    </MainContainer>
  )
}
export default Layout

const MainContainer = styled.main`
  position: relative;
  max-width: 480px;
  min-height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
  background-color: ${theme.palette.background};
`
