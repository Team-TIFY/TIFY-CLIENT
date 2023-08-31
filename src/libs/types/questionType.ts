export interface DailyQuestionInfo {
    questionId: number;
    content: string;
    category: categoryType;
    loadingData: string
}

export interface CountDailyQuestion {
    answerCount: number;
}

export interface DailyAnswerInfo {
    id: number;
    questionId: number;
    userId: number;
    content: string;
}

export interface DailyAnswerContentInfo {
    answerInfo: DailyAnswerInfo;
    isMine: boolean;
}

export interface DailyAnswerList {
    content: DailyAnswerContentInfo[];
    page: number;
    size: number;
    hasNext: boolean;
}

type categoryType = 'PERFUME'| 'MAKEUP'| 'CLOTHES'| 'FASHIONSTUFF' | 'ACCESSORY'| 'COOKING'| 'SPORTS'| 'TRIP'|'CULTURALLIFE'| 'MUSIC' 