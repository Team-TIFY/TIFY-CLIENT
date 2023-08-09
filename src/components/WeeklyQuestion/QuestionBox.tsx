import { FlexBox } from "@components/layouts/FlexBox"
import { Text } from "@components/atoms/Text"

export const QuestionBox = () => {
    <FlexBox direction={'column'}>
    <Text as={'div'} typo={'Caption_12R'} color="gray_200">
        데일리 질문
    </Text>
    <Text typo={'SCD_Headline_24'} color="white">점심먹고 난 뒤, 가장 많이 마시는 음료수는?</Text>
</FlexBox>
}