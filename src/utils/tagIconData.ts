import BagIcon from '@assets/icons/BagIcon'
import BowlIcon from '@assets/icons/BowlIcon'
import CookIcon from '@assets/icons/CookIcon'
import CookieManIcon from '@assets/icons/CookieManIcon'
import CupIcon from '@assets/icons/CupIcon'
import DiamondIcon from '@assets/icons/DiamondIcon'
import DrinkIcon from '@assets/icons/DrinkIcon'
import DropIcon from '@assets/icons/DropIcon'
import FlareIcon from '@assets/icons/FlareIcon'
import HangerIcon from '@assets/icons/HangerIcon'
import HatPinkIcon from '@assets/icons/HatPinkIcon'
import HatPurpleIcon from '@assets/icons/HatPurpleIcon'
import HouseIcon from '@assets/icons/HouseIcon'
import MittenIcon from '@assets/icons/MittenIcon'
import PaintIcon from '@assets/icons/PaintIcon'
import PerfumeIcon from '@assets/icons/PerfumeIcon'
import RackIcon from '@assets/icons/RackIcon'
import RippleIcon from '@assets/icons/RippleIcon'
import ScarfIcon from '@assets/icons/ScarfIcon'
import ShoesIcon from '@assets/icons/ShoesIcon'
import SizeIcon from '@assets/icons/SizeIcon'
import SportIcon from '@assets/icons/SportIcon'
import SprayIcon from '@assets/icons/SprayIcon'
import SwatchIcon from '@assets/icons/SwatchIcon'
import TshirtIcon from '@assets/icons/TshirtIcon'
import WalletIcon from '@assets/icons/WalletIcon'
import WindIcon from '@assets/icons/WindIcon'

export const tagIconData: Record<any, Record<number, () => JSX.Element>> = {
  MAKEUP: { 2: SwatchIcon, 3: DropIcon, 4: PaintIcon },
  FRAGRANCE: {
    1: WindIcon,
    4: CookieManIcon,
    5: SprayIcon,
    6: PerfumeIcon,
    7: RippleIcon,
  },
  CLOTHES: {
    1: WindIcon,
    4: CookieManIcon,
    5: SprayIcon,
    6: PerfumeIcon,
    7: RippleIcon,
  },
  FASHION_PRODUCT: {
    1: HangerIcon,
    2: TshirtIcon,
    6: PaintIcon,
    8: HatPurpleIcon,
    9: HatPinkIcon,
    10: WalletIcon,
    12: ScarfIcon,
    14: MittenIcon,
  },
  DIGITAL_PRODUCT: {
    1: HangerIcon,
    2: TshirtIcon,
    6: PaintIcon,
    8: HatPurpleIcon,
    9: HatPinkIcon,
    10: WalletIcon,
    12: ScarfIcon,
    14: MittenIcon,
  },
  BAG: { 1: BagIcon, 2: SizeIcon, 4: RackIcon },
  ACCESSORY: { 5: DiamondIcon, 6: FlareIcon },
  COOKING: { 1: HouseIcon, 3: CookIcon, 5: BowlIcon, 7: CupIcon, 9: DrinkIcon },

  EXERCISE: { 2: SportIcon, 4: TshirtIcon, 5: ShoesIcon },
}
