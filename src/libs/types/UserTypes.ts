export interface UserInfo {
    userName: string;
    email: string;
    thumbnail : string;
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
    createdAt: Date;
    gender: string;
}