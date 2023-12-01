import { Step1 } from '@assets/icons/SignupStep/1'
import { Step2 } from '@assets/icons/SignupStep/2'
import { Step3 } from '@assets/icons/SignupStep/3'
import { Step4 } from '@assets/icons/SignupStep/4'

const useStepNumberIcon = () => {
  const setStepNumberIcon = (count: number) => {
    if (count === 1) return <Step1 />
    else if (count === 2) return <Step2 />
    else if (count === 3) return <Step3 />
    else if (count === 4) return <Step4 />
  }
  return [setStepNumberIcon]
}

export default useStepNumberIcon
