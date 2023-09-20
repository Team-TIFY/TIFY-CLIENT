import { useLocation } from 'react-router-dom'
import { useFunnel } from '@libs/hooks/useFunnel'
import 첫번째스텝 from '@components/funnel/첫번째스텝'
const SearchTaste = () => {
  const [Funnel, setStep] = useFunnel(['첫번째', '두번째'] as const)
  const location = useLocation()
  return (
    <>
      <Funnel>
        <Funnel.Step name="첫번째">
          <첫번째스텝 />
        </Funnel.Step>
      </Funnel>
    </>
  )
}

export default SearchTaste
