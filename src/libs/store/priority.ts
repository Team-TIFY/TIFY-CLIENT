import { TasteType } from '@utils/apis/favor/TasteType'

export const favorPriority: FavorPriorityType[] = [
  {
    taste: 'BMLIP',
    priority: 1,
  },
  {
    taste: 'BMEYE',
    priority: 2,
  },
  {
    taste: 'BFPER',
    priority: 1,
  },
  {
    taste: 'BFPLA',
    priority: 3,
  },
  {
    taste: 'FCTOP',
    priority: 1,
  },
  {
    taste: 'FEFAS',
    priority: 1,
  },
  {
    taste: 'FEDIG',
    priority: 2,
  },
  {
    taste: 'FEBAG',
    priority: 1,
  },
  {
    taste: 'FAACC',
    priority: 1,
  },
  {
    taste: 'HCDIS',
    priority: 1,
  },
]

type FavorPriorityType = {
  taste: TasteType
  priority: number
}
