import { MouseEventHandler, RefObject } from 'react'
import { theme } from '@styles/theme'

export type DimmerPropsType = {
  dimmerRef: RefObject<HTMLDivElement>
  onClick: MouseEventHandler<HTMLDivElement>
  blur?: boolean
}

const Dimmer = ({ dimmerRef, onClick, blur = false }: DimmerPropsType) => {
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
        backgroundColor: `${theme.palette.dim_500}`,
        backdropFilter: blur ? 'blur(3px)' : 'none',
      }}
    ></div>
  )
}

export default Dimmer
