import { TasteType } from '@utils/apis/favor/TasteType'
type FavorQuestionDataType = {
  [key in TasteType]: {
    [key: number]: string[]
  }
}

export const favorQuestionData: FavorQuestionDataType = {
  BMLIP: {
    1: ['립스틱', '틴트', '틴트밤', '글로스'],
    2: [
      '봄라이트',
      '봄브라이트',
      '봄트루',
      '여름라이트',
      '여름뮤트',
      '여름트루',
      '가을뮤트',
      '가을딥',
      '가을트루',
      '겨울브라이트',
      '겨울딥',
      '겨울트루',
    ],
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
