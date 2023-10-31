import { theme } from '@styles/theme'
import { RefObject } from 'react'

export type DimmerPropsType = {
  dimmerRef: RefObject<HTMLDivElement>
  onClick: () => void
}

const Dimmer = ({ dimmerRef, onClick }: DimmerPropsType) => {
  return (
    <div
      ref={dimmerRef}
      onClick={onClick}
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: '101',
        backgroundColor: `${theme.palette.dim_800}`,
      }}
    ></div>
  )
}

export default Dimmer
