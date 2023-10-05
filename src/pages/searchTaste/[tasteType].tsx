import { useLocation } from 'react-router-dom'
import { useFunnel } from '@libs/hooks/useFunnel'
const SearchTaste = () => {
  const [Funnel, setStep] = useFunnel(['첫번째', '두번째'] as const)
  const location = useLocation()
  return <></>
}

export default SearchTaste
