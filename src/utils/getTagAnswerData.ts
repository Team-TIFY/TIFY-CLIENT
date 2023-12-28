import { FilteredUserTag } from './apis/user/UserType'
import { processTagAnswerData } from './processTagAnswerData'

export const getTagAnswerData = (userTagData: FilteredUserTag[]) => {
  return userTagData.map((tag) => {
    const answerData: {
      smallCategory: any
      detailCategory: any
      number: number
      answer: string
      allDetailCategoryAnswered: boolean
    }[] = []

    if (tag.smallCategory === 'MAKEUP') {
      tag.answerContentList.map((answer) => {
        if (answer.detailCategory === 'LIP') {
          processTagAnswerData(
            tag.smallCategory,
            answer.detailCategory,
            answer.number,
            [2, 3, 4, 5],
            true,
            answer.answerContent,
            tag.allDetailCategoryAnswered,
            answerData,
          )
        }
      })
    } else if (tag.smallCategory === 'FRAGRANCE') {
      if (
        tag.answerContentList.some(
          (answer) => answer.detailCategory === 'PLACE',
        )
      ) {
        tag.answerContentList.map((answer) => {
          if (answer.detailCategory === 'PERFUME') {
            processTagAnswerData(
              tag.smallCategory,
              answer.detailCategory,
              answer.number,
              [1, 4],
              false,
              answer.answerContent,
              tag.allDetailCategoryAnswered,
              answerData,
            )
          } else if (answer.detailCategory === 'MOISTURE') {
            processTagAnswerData(
              tag.smallCategory,
              answer.detailCategory,
              answer.number,
              [1],
              false,
              answer.answerContent,
              tag.allDetailCategoryAnswered,
              answerData,
            )
          } else if (answer.detailCategory === 'PLACE') {
            processTagAnswerData(
              tag.smallCategory,
              answer.detailCategory,
              answer.number,
              [2],
              true,
              answer.answerContent,
              tag.allDetailCategoryAnswered,
              answerData,
            )
            processTagAnswerData(
              tag.smallCategory,
              answer.detailCategory,
              answer.number,
              [3],
              false,
              answer.answerContent,
              tag.allDetailCategoryAnswered,
              answerData,
            )
          }
        })
      } else {
        tag.answerContentList.map((answer) => {
          if (answer.detailCategory === 'PERFUME') {
            processTagAnswerData(
              tag.smallCategory,
              answer.detailCategory,
              answer.number,
              [1, 4],
              true,
              answer.answerContent,
              tag.allDetailCategoryAnswered,
              answerData,
            )
          } else if (answer.detailCategory === 'MOISTURE') {
            processTagAnswerData(
              tag.smallCategory,
              answer.detailCategory,
              answer.number,
              [1],
              true,
              answer.answerContent,
              tag.allDetailCategoryAnswered,
              answerData,
            )
          } else if (answer.detailCategory === 'PLACE') {
            processTagAnswerData(
              tag.smallCategory,
              answer.detailCategory,
              answer.number,
              [2, 3],
              true,
              answer.answerContent,
              tag.allDetailCategoryAnswered,
              answerData,
            )
          }
        })
      }
    } else if (tag.smallCategory === 'CLOTHES') {
      tag.answerContentList.map((answer) => {
        processTagAnswerData(
          tag.smallCategory,
          answer.detailCategory,
          answer.number,
          [1, 2, 6],
          true,
          answer.answerContent,
          tag.allDetailCategoryAnswered,
          answerData,
        )
      })
    } else if (tag.smallCategory === 'FASHION_PRODUCT') {
      tag.answerContentList.map((answer) => {
        processTagAnswerData(
          tag.smallCategory,
          answer.detailCategory,
          answer.number,
          [2, 3, 4, 6, 8],
          false,
          answer.answerContent,
          tag.allDetailCategoryAnswered,
          answerData,
        )
      })
    } else if (tag.smallCategory === 'DIGITAL_PRODUCT') {
      tag.answerContentList.map((answer) => {
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
          tag.allDetailCategoryAnswered,
          answerData,
        )
        processTagAnswerData(
          tag.smallCategory,
          answer.detailCategory,
          answer.number,
          [7],
          true,
          answer.answerContent,
          tag.allDetailCategoryAnswered,
          answerData,
        )
      })

      const order = [1, 2, 5, 3, 4, 7]

      answerData.sort((a, b) => {
        return order.indexOf(a.number) - order.indexOf(b.number)
      })
    } else if (tag.smallCategory === 'BAG') {
      tag.answerContentList.map((answer) => {
        processTagAnswerData(
          tag.smallCategory,
          answer.detailCategory,
          answer.number,
          [1, 2, 4],
          true,
          answer.answerContent,
          tag.allDetailCategoryAnswered,
          answerData,
        )
      })

      const order = [1, 4, 2]

      answerData.sort((a, b) => {
        return order.indexOf(a.number) - order.indexOf(b.number)
      })
    } else if (tag.smallCategory === 'ACCESSORY') {
      tag.answerContentList.map((answer) => {
        if (answer.detailCategory === 'ACCESSORY') {
          processTagAnswerData(
            tag.smallCategory,
            answer.detailCategory,
            answer.number,
            [5, 6],
            true,
            answer.answerContent,
            tag.allDetailCategoryAnswered,
            answerData,
          )
        }
      })
    } else if (tag.smallCategory === 'COOKING') {
      tag.answerContentList.map((answer) => {
        if (answer.detailCategory === 'DISH') {
          processTagAnswerData(
            tag.smallCategory,
            answer.detailCategory,
            answer.number,
            [1, 3, 5],
            true,
            answer.answerContent,
            tag.allDetailCategoryAnswered,
            answerData,
          )
        } else if (answer.detailCategory === 'CUP') {
          processTagAnswerData(
            tag.smallCategory,
            answer.detailCategory,
            answer.number,
            [2, 4],
            true,
            answer.answerContent,
            tag.allDetailCategoryAnswered,
            answerData,
          )
        }
      })
    } else if (tag.smallCategory === 'EXERCISE') {
      tag.answerContentList.map((answer) => {
        if (answer.detailCategory === 'EXERCISE') {
          processTagAnswerData(
            tag.smallCategory,
            answer.detailCategory,
            answer.number,
            [2, 4, 5, 6],
            true,
            answer.answerContent,
            tag.allDetailCategoryAnswered,
            answerData,
          )
        }
      })
    }

    return answerData
  })
}
