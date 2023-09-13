import { Route, Routes } from 'react-router-dom';
import AppBarTemplate from '@components/layouts/AppBarTemplate';
import { useRecoilValue } from 'recoil';
import { onboardingPageState } from '@libs/store/onboard';
import Onboarding from './Onboarding';

const OnboardingRouter = () => {
  const onboardPage = useRecoilValue(onboardingPageState);
  const appLabel = (onboardPage.agreement ? "" : "약관동의" );

  return (
    <Routes>
      <Route path="/" element={
        <AppBarTemplate variant='backPush' label={appLabel} hasNav={false}>
            <Onboarding/>
        </AppBarTemplate>
    } />  
    </Routes>
  );
}

export default OnboardingRouter;
