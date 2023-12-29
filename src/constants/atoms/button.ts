import { theme } from '@styles/theme'
import {
  RoundButtonShapeType,
  SquareButtonShapeType,
} from '@models/components/atoms/Button'

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

export const SQUARE_BUTTON_COLOR_TYPE = {
  default: {
    xlargeSquare: `${theme.palette.gray_800}`,
    largeSquare: `${theme.palette.gray_800}`,
    mediumSquare: `${theme.palette.background}`,
    medium2Square: `${theme.palette.gray_800}`,
    medium3Square: `${theme.palette.gray_800}`,
    smallSquare: `${theme.palette.gray_500}`,
    xsmallSquareP: `${theme.palette.purple_400}`,
    xsmallSquareS: `${theme.palette.gray_800}`,
  },
  selected: {
    xlargeSquare: `${theme.palette.gray_800}`,
    largeSquare: `${theme.palette.white}`,
    mediumSquare: `${theme.palette.background}`,
    medium2Square: `${theme.palette.white}`,
    medium3Square: `${theme.palette.white}`,
    smallSquare: `${theme.palette.gray_500}`,
    xsmallSquareP: `${theme.palette.purple_400}`,
    xsmallSquareS: `${theme.palette.gray_800}`,
  },
  selectedMultiple: {
    xlargeSquare: `${theme.palette.gray_800}`,
    largeSquare: `${theme.palette.white}`,
    mediumSquare: `${theme.palette.background}`,
    medium2Square: `${theme.palette.white}`,
    medium3Square: `${theme.palette.gray_800}`,
    smallSquare: `${theme.palette.gray_500}`,
    xsmallSquareP: `${theme.palette.purple_400}`,
    xsmallSquareS: `${theme.palette.gray_800}`,
  },
  hover: {
    mediumSquare: `${theme.palette.gray_900}`,
    smallSquare: `${theme.palette.gray_800}`,
  },
}

export const SQUARE_TEXT_COLOR_TYPE = {
  default: {
    xlargeSquare: `${theme.palette.gray_100}`,
    largeSquare: `${theme.palette.gray_100}`,
    mediumSquare: `${theme.palette.gray_200}`,
    medium2Square: `${theme.palette.gray_100}`,
    medium3Square: `${theme.palette.gray_100}`,
    smallSquare: `${theme.palette.gray_100}`,
    xsmallSquareP: `${theme.palette.gray_900}`,
    xsmallSquareS: `${theme.palette.gray_200}`,
  },
  selected: {
    xlargeSquare: `${theme.palette.gray_100}`,
    largeSquare: `${theme.palette.gray_800}`,
    mediumSquare: `${theme.palette.gray_800}`,
    medium2Square: `${theme.palette.gray_800}`,
    medium3Square: `${theme.palette.gray_800}`,
    smallSquare: `${theme.palette.gray_100}`,
    xsmallSquareP: `${theme.palette.gray_900}`,
    xsmallSquareS: `${theme.palette.gray_200}`,
  },
  selectedMultiple: {
    xlargeSquare: `${theme.palette.gray_100}`,
    largeSquare: `${theme.palette.gray_800}`,
    mediumSquare: `${theme.palette.gray_200}`,
    medium2Square: `${theme.palette.gray_800}`,
    medium3Square: `${theme.palette.gray_100}`,
    smallSquare: `${theme.palette.gray_100}`,
    xsmallSquareP: `${theme.palette.gray_900}`,
    xsmallSquareS: `${theme.palette.gray_200}`,
  },
  hover: {
    mediumSquare: `${theme.palette.gray_100}`,
    smallSquare: `${theme.palette.gray_100}`,
  },
}

export const SQUARE_BUTTON_SHAPE_TYPE: SquareButtonShapeType = {
  xlargeSquare: {
    radius: 16,
    typo: 'Body_16',
    width: 328,
    height: 48,
  },
  largeSquare: {
    radius: 6,
    typo: 'Subhead_16',
    width: 296,
    height: 48,
  },
  mediumSquare: {
    radius: 12,
    typo: 'Body_14',
    width: 158,
    height: 40,
  },
  medium2Square: {
    radius: 6,
    typo: 'Subhead_16',
    width: 140,
    height: 40,
  },
  medium3Square: {
    radius: 18,
    typo: 'Body_14',
    width: 148,
    height: 52,
  },
  smallSquare: {
    radius: 12,
    typo: 'Subhead_14',
    width: 141,
    height: 44,
  },
  xsmallSquareP: {
    radius: 12,
    typo: 'Caption_12M',
    width: 64,
    height: 32,
  },
  xsmallSquareS: {
    radius: 12,
    typo: 'Caption_12M',
    width: 64,
    height: 32,
  },
}
