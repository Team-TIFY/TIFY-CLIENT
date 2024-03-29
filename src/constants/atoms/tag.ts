import { theme } from '@styles/theme'
import {
  ColorIndexVariantType,
  TagVariantType,
  ColorVariantType,
} from '@models/components/atoms/Tag'
import { TagIconDataType } from '@models/components/Profile/profile'
import BagIcon from '@assets/icons/BagIcon'
import BowlIcon from '@assets/icons/BowlIcon'
import CookIcon from '@assets/icons/CookIcon'
import CookieManIcon from '@assets/icons/CookieManIcon'
import CupIcon from '@assets/icons/CupIcon'
import DiamondIcon from '@assets/icons/DiamondIcon'
import DrinkIcon from '@assets/icons/DrinkIcon'
import DropIcon from '@assets/icons/DropIcon'
import EarphoneIcon from '@assets/icons/EarphoneIcon'
import FlareIcon from '@assets/icons/FlareIcon'
import HangerIcon from '@assets/icons/HangerIcon'
import HatPurpleIcon from '@assets/icons/HatPurpleIcon'
import HatPinkIcon from '@assets/icons/HatPinkIcon'
import HouseIcon from '@assets/icons/HouseIcon'
import LaptopIcon from '@assets/icons/LaptopIcon'
import MittenIcon from '@assets/icons/MittenIcon'
import PaintIcon from '@assets/icons/PaintIcon'
import PaletteIcon from '@assets/icons/PaletteIcon'
import PerfumeIcon from '@assets/icons/PerfumeIcon'
import PhoneIcon from '@assets/icons/PhoneIcon'
import RackIcon from '@assets/icons/RackIcon'
import RippleIcon from '@assets/icons/RippleIcon'
import ScarfIcon from '@assets/icons/ScarfIcon'
import ShoesIcon from '@assets/icons/ShoesIcon'
import SizeIcon from '@assets/icons/SizeIcon'
import SportIcon from '@assets/icons/SportIcon'
import SprayIcon from '@assets/icons/SprayIcon'
import SwatchIcon from '@assets/icons/SwatchIcon'
import TabletIcon from '@assets/icons/TabletIcon'
import TshirtIcon from '@assets/icons/TshirtIcon'
import WalletIcon from '@assets/icons/WalletIcon'
import WandIcon from '@assets/icons/WandIcon'
import WatchIcon from '@assets/icons/WatchIcon'
import WindIcon from '@assets/icons/WindIcon'

export const TAG_BG_COLOR_TYPE = {
  main: {
    purple: `${theme.palette.purple_100}`,
    pink: `${theme.palette.pink_100}`,
    aqua: `${theme.palette.aqua_100}`,
  },
  dark: {
    purple: `${theme.palette.purple_500}`,
    pink: `${theme.palette.pink_300}`,
    aqua: `${theme.palette.aqua_500}`,
  },
}

export const TAG_TEXT_COLOR_TYPE = {
  main: `${theme.palette.gray_800}`,
  dark: `${theme.palette.white}`,
}

export const TAG_PADDING_TYPE = {
  main: '6px 8px',
  dark: '6px 10px',
}

export const TAG_COLOR_TYPE: Record<
  ColorIndexVariantType,
  { variant: TagVariantType; color: ColorVariantType; iconColor: string }
> = {
  0: {
    variant: 'main',
    color: 'purple',
    iconColor: 'purple_500',
  },
  1: {
    variant: 'main',
    color: 'pink',
    iconColor: 'pink_500',
  },
  2: {
    variant: 'main',
    color: 'aqua',
    iconColor: 'aqua_300',
  },
  3: {
    variant: 'dark',
    color: 'purple',
    iconColor: '',
  },
  4: {
    variant: 'dark',
    color: 'pink',
    iconColor: '',
  },
  5: {
    variant: 'dark',
    color: 'aqua',
    iconColor: '',
  },
}

export const TAG_ICON_DATA: TagIconDataType = {
  MAKEUP: {
    LIP: {
      2: SwatchIcon,
      3: DropIcon,
      4: PaintIcon,
    },
  },
  FRAGRANCE: {
    PERFUME: {
      1: WindIcon,
      4: CookieManIcon,
    },
    MOISTURE: {
      1: SprayIcon,
    },
    PLACE: {
      2: PerfumeIcon,
      3: RippleIcon,
    },
  },
  CLOTHES: {
    TOP: {
      1: HangerIcon,
      2: TshirtIcon,
      6: PaletteIcon,
    },
  },
  FASHION_PRODUCT: {
    FAS_PRODUCT: {
      2: HatPurpleIcon,
      3: HatPinkIcon,
      4: WalletIcon,
      6: ScarfIcon,
      8: MittenIcon,
    },
  },
  DIGITAL_PRODUCT: {
    DIG_PRODUCT: {
      1: PhoneIcon,
      2: EarphoneIcon,
      3: LaptopIcon,
      4: TabletIcon,
      5: WatchIcon,
      7: WandIcon,
    },
  },
  BAG: { BAG: { 1: BagIcon, 2: SizeIcon, 4: RackIcon } },
  ACCESSORY: { ACCESSORY: { 5: DiamondIcon, 6: FlareIcon } },
  COOKING: {
    DISH: { 1: HouseIcon, 3: CookIcon, 5: BowlIcon },
    CUP: {
      2: CupIcon,
      4: DrinkIcon,
    },
  },
  EXERCISE: { EXERCISE: { 2: SportIcon, 4: TshirtIcon, 5: ShoesIcon } },
}
