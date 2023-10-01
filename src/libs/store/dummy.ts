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
    4: ['누드', '코랄', '오렌지', '핑크', '로즈', '레드', '플럼', '브릭'],
    5: [
      '쥬시 래스팅 틴트',
      '글래스팅 워터 틴트',
      '제로 벨벳 틴트',
      '듀이풀 워터 틴트',
      '제로 매트 립스틱',
      '글래스팅 멜팅 밤',
      '블러 퍼지 틴트',
      '시럽 레이어링 틴트',
      '소프트 매트 립스틱',
      '벨벳 립 틴트',
      '무드레시피 매트 립 컬러',
    ],
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
