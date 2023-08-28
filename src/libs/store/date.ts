import { atom } from "recoil";
import { TodayKeyType } from "@components/atoms/DayWeek/WeekGroup";

export interface WeeklyDate{
    today: TodayKeyType;
    selectedDate: TodayKeyType;
    dateString: string;
}

const initialState: WeeklyDate = {
    today: 0,
    selectedDate: 0,
    dateString: ''
}

export const dateState = atom<WeeklyDate>({
    key: 'weeklyDate',
    default: initialState,
})