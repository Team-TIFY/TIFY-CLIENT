import { TasteType } from '@utils/apis/favor/TasteType'
type FavorQuestionDataType = {
  [key in TasteType]: {
    [key: number]: string[]
  }
}

export const favorQuestionData: FavorQuestionDataType = {
  BMLIP: {
    1: ['립스틱', '틴트', '틴트밤', '글로스'],
    2: ['봄라이트', '봄브라이트'],
    3: ['글로시', '워터리', '블러', '벨벳', '매트'],
  },
  BMEYE: {},
  BFMOI: {},
  BFPER: {},
  BFPLA: {},
  FCTOP: {},
  FEFAS: {},
  FEDIG: {},
  FEBAG: {},
}
