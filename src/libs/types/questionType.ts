export interface DailyQuestionInfo {
    questionId: number;
    content: string;
    category: categoryType;
    loadingData: string
}

type categoryType = [ 'PERFUME', 'MAKEUP', 'CLOTHES', 'FASHIONSTUFF', 'ACCESSORY', 'COOKING', 'SPORTS', 'TRIP','CULTURALLIFE', 'MUSIC' ]