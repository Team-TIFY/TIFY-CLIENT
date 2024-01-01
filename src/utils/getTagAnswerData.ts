import { FilteredUserTag } from '@models/apis/UserType'
import {
  DetailCategoryValueType,
  SubCategoryValueType,
} from '@models/common/favor'
import { processTagAnswerData } from './processTagAnswerData'

export const getTagAnswerData = (userTagData: FilteredUserTag[]) => {
  return userTagData.map(processTag)
}

const processTag = (tag: FilteredUserTag) => {
  const answerData: {
    smallCategory: SubCategoryValueType
    detailCategory: DetailCategoryValueType
    number: number
    answer: string
    notAnsweredDetailCategories: DetailCategoryValueType[]
  }[] = []

  const processDigitalProductAnswers = () => {
    tag.answerContentList.forEach((answer) => {
      const answerContent =
        answer.number === 5
          ? answer.answerContent
              .substring(0, answer.answerContent.indexOf('('))
              .trim()
          : answer.answerContent

      processTagAnswerData(
        tag.smallCategory,
        answer.detailCategory,
        answer.number,
        [1, 2, 5, 3, 4],
        true,
        answerContent,
        tag.notAnsweredDetailCategories,
        answerData,
      )

      processTagAnswerData(
        tag.smallCategory,
        answer.detailCategory,
        answer.number,
        [7],
        true,
        answer.answerContent,
        tag.notAnsweredDetailCategories,
        answerData,
      )
    })

    answerData.sort(
      (a, b) =>
        [1, 2, 5, 3, 4, 7].indexOf(a.number) -
        [1, 2, 5, 3, 4, 7].indexOf(b.number),
    )
  }

  const processBagAnswers = () => {
    processAnswer('BAG', [1, 2, 4], true)

    answerData.sort(
      (a, b) => [1, 4, 2].indexOf(a.number) - [1, 4, 2].indexOf(b.number),
    )
  }

  const processAnswer = (
    detailCategory: DetailCategoryValueType,
    numberList: number[],
    showAll: boolean,
  ) => {
    tag.answerContentList
      .filter((answer) => answer.detailCategory === detailCategory)
      .forEach((answer) => {
        processTagAnswerData(
          tag.smallCategory,
          answer.detailCategory,
          answer.number,
          numberList,
          showAll,
          answer.answerContent,
          tag.notAnsweredDetailCategories,
          answerData,
        )
      })
  }

  if (tag.smallCategory === 'MAKEUP') {
    processAnswer('LIP', [2, 3, 4, 5], true)
  } else if (tag.smallCategory === 'FRAGRANCE') {
    if (
      tag.answerContentList.some((answer) => answer.detailCategory === 'PLACE')
    ) {
      processAnswer('PERFUME', [1, 4], false)
      processAnswer('MOISTURE', [1], false)
      processAnswer('PLACE', [2], true)
      processAnswer('PLACE', [3], false)
    } else {
      processAnswer('PERFUME', [1, 4], true)
      processAnswer('MOISTURE', [1], true)
      processAnswer('PLACE', [2, 3], true)
    }
  } else if (tag.smallCategory === 'CLOTHES') {
    processAnswer('TOP', [1, 2, 6], true)
  } else if (tag.smallCategory === 'FASHION_PRODUCT') {
    processAnswer('FAS_PRODUCT', [2, 3, 4, 6, 8], false)
  } else if (tag.smallCategory === 'DIGITAL_PRODUCT') {
    processDigitalProductAnswers()
  } else if (tag.smallCategory === 'BAG') {
    processBagAnswers()
  } else if (tag.smallCategory === 'ACCESSORY') {
    processAnswer('ACCESSORY', [5, 6], true)
  } else if (tag.smallCategory === 'COOKING') {
    processAnswer('DISH', [1, 3, 5], true)
    processAnswer('CUP', [2, 4], true)
  } else if (tag.smallCategory === 'EXERCISE') {
    processAnswer('EXERCISE', [2, 4, 5, 6], true)
  }

  return answerData
}
