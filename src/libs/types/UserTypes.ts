export interface UserInfo {
    userName: string;
    email: string;
    thumbnail: string;
    birth: string;
    job: string;
    gender: string;
}

export interface UserInfoToken {
    userId: number;
    userName: string;
    imageUrl: string;
    birth: string;
    job: string;
    createdAt: string,
    gender: string;
    onBoardingStatus: string
}

export interface UserTag {
    userTagId: number;
    largeCategory: string;
    favors: [
      {
        userFavorId: number,
        smallCategory: string
      }
    ]
}

export interface FilteredUserTag {
  userFavorId: number;
  smallCategory: string;
}

export interface SelectedTag {
  name: TagNameKey,
  value: TagValueKey
}

export type SelectedProps = {
  id: number,
  active: boolean,
  name: TagNameKey,
  value: TagValueKey,
}[];

export type TagNameKey = "메이크업" | "프레그런스" | "의류" | "잡화" | "액세사리" | "요리" | "운동" | "여행" | "문화생활";

export type TagValueKey = "MAKEUP" | "PERFUME" | "CLOTHES" | "FASHIONSTUFF" | "ACCESSORY" | "COOKING" | "SPORTS" | "TRIP" | "CULTURALLIFE";
