import { theme } from '@styles/theme'
import { RoundButtonShapeType } from '@models/components/atoms/Button'

export const ROUND_BUTTON_COLOR_TYPE = {
  default: {
    xlargeRound: `${theme.palette.gray_800}`,
    mediumRound: `${theme.palette.purple_500}`,
    smallRound: `${theme.palette.background}`,
    circle: `${theme.palette.gray_800}`,
    kakao: `${theme.palette.kakao}`,
  },
  disabled: {
    xlargeRound: `${theme.palette.gray_800}`,
    mediumRound: `${theme.palette.gray_700}`,
    smallRound: `${theme.palette.background}`,
    circle: `${theme.palette.gray_700}`,
    kakao: `${theme.palette.kakao}`,
  },
  hover: {
    xlargeRound: `${theme.palette.gray_800}`,
    mediumRound: `${theme.palette.purple_600}`,
    smallRound: `${theme.palette.gray_800}`,
    circle: `${theme.palette.gray_700}`,
    kakao: `${theme.palette.kakao}`,
  },
}

export const ROUND_TEXT_COLOR_TYPE = {
  default: {
    xlargeRound: `${theme.palette.gray_100}`,
    mediumRound: `${theme.palette.white}`,
    smallRound: `${theme.palette.gray_100}`,
    circle: `${theme.palette.gray_100}`,
    kakao: `${theme.palette.gray_900}`,
  },
  disabled: {
    xlargeRound: `${theme.palette.gray_100}`,
    mediumRound: `${theme.palette.gray_500}`,
    smallRound: `${theme.palette.gray_100}`,
    circle: `${theme.palette.gray_500}`,
    kakao: `${theme.palette.gray_900}`,
  },
  hover: {
    xlargeRound: `${theme.palette.gray_100}`,
    mediumRound: `${theme.palette.white}`,
    smallRound: `${theme.palette.gray_100}`,
    circle: `${theme.palette.gray_200}`,
    kakao: `${theme.palette.gray_900}`,
  },
}

export const ROUND_BUTTON_SHAPE_TYPE: RoundButtonShapeType = {
  xlargeRound: {
    radius: 80,
    typo: 'Body_16',
    width: 312,
    height: 65,
    padding: [12, 24],
  },
  mediumRound: {
    radius: 24,
    typo: 'Subhead_16',
    width: 94,
    height: 48,
    padding: [12, 32],
  },
  smallRound: {
    radius: 18,
    typo: 'Subhead_14',
    width: 156,
    height: 36,
    padding: [8, 20],
  },
  circle: {
    radius: 50,
    typo: 'Subhead_16',
    width: 24,
    height: 24,
    padding: [0, 0],
  },
  kakao: {
    radius: 12,
    typo: 'Subhead_14',
    width: 156,
    height: 36,
    padding: [8, 20],
  },
}
