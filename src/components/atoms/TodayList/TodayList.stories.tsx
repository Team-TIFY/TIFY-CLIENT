import { Meta, StoryObj } from '@storybook/react'
import TodayList from '.'

const meta = {
  title: 'Atom/TodayList',
  component: TodayList,
  tags: ['autodocs'],
} satisfies Meta<typeof TodayList>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultTodayList: Story = {
  args: {
    isLastMonth: false,
    todayAnswerList: [
      {
        answerTime: '2023-12-27T05:16:40.000+00:00',
        question:
          '친구가 요리를 해줬는데 맛이 없다. 표정을 숨기지 못한다. vs 맛있다고 한다.',
        answer: '표정을 숨기지 못한다.',
      },
      {
        answerTime: '2023-12-13T05:16:40.000+00:00',
        question: '베스킨라빈스에서 가장 좋아하는 맛 3가지?',
        answer: '엄마는 외계인, 바람과 함께 사라지다, 사랑에 빠진 딸기',
      },
    ],
  },
}
