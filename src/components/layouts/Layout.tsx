import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom'
import { theme } from '@styles/theme'
import { useRecoilValue } from 'recoil'
import { snackBarState } from '@libs/store/snackBar'
import SnackBar from '@components/atoms/SnackBar'
import useSnackBar from '@libs/hooks/useSnackBar'

const Layout = () => {
  const snackBarStateData = useRecoilValue(snackBarState)
  const { SnackBar } = useSnackBar()
  return (
    <MainContainer>
      <Outlet />
      <SnackBar />
      {/* {snackBarStateData.isSnackBarOn && (
        <SnackBar
          variant={snackBarStateData.variant}
          message={snackBarStateData.message}
        />
      )} */}
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
