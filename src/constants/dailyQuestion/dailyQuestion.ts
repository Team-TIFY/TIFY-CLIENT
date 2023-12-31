import { DailyQuestionCategoryType } from '@models/apis/QuestionType'

export const DailyQuestionCategory: Record<DailyQuestionCategoryType, string> =
  {
    FOOD: '/images/food.png',
    MUSIC: '/images/music1.png',
    RELATIONSHIP: '/images/relation.png',
    TRIP: '/images/passport.png',
    BEVERAGE: '/images/drink.png',
    CULTURE_LIFE: '/images/drum.png',
    ME: '/images/aboutme.png',
  }

export const DailyQuestionVideoCategory: Record<
  DailyQuestionCategoryType,
  string
> = {
  FOOD: '/videos/food.mp4',
  MUSIC: '/videos/music.mp4',
  RELATIONSHIP: '/videos/relation.mp4',
  TRIP: '/videos/passport.mp4',
  BEVERAGE: '/videos/drink.mp4',
  CULTURE_LIFE: '/videos/drum.mp4',
  ME: '/videos/my.mp4',
}
