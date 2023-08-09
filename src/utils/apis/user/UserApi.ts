import { FilteredUserTag, TagValueKey, UserInfo, UserInfoToken, UserTag } from "@libs/types/UserTypes";
import { axiosApi } from "../axios";
import { useRecoilState } from "recoil";
import { authState } from "../../../libs/store/auth";

export const UserApi = {
  GET_USER_INFO_TOKEN: async (): Promise<UserInfoToken> => {
    const response = await axiosApi.get('/users');
    return response.data.data;
  },

  GET_USER_INFO: async (userId: number): Promise<UserInfo> => {
    const response = await axiosApi.get(`/users/${userId}`);
    return response.data.data;
  },

  GET_USER_TAG: async (userId: number): Promise<UserTag[]> => {
    const response = await axiosApi.get(`/users/${userId}/tags`);
    return response.data.data;
  },

  GET_FILTERED_USER_TAG: async (userId: number, largeCategory: TagValueKey): Promise<FilteredUserTag[]> => {
    const response = await axiosApi.get(`/users/${userId}/category?largeCategory=${largeCategory}`);
    return response.data.data;
  }
};