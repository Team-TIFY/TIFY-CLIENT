import { useMutation, useQueryClient } from "@tanstack/react-query"
import { UserApi } from "@utils/apis/user/UserApi";
import { useRecoilState } from "recoil";
import { authState } from "@libs/store/auth";
import { Text } from "@components/atoms/Text";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";


export const MyProfile = () => {
    const [auth, setAuth] = useRecoilState(authState);
    console.log(auth.userId)
    const { data, isSuccess } = useQuery(['userProfile', auth.userId], () =>
        UserApi.GET_USER_INFO(auth.userId),
    );
    useEffect(() => {
        if(isSuccess){
            console.log(data);
        }
    })
    

    return (
        <>
            <Text typo={'Body_14'} color={'white'}>마이페이지</Text>
        </>
    )
}