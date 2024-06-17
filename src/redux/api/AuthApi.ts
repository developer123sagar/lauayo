/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "@/redux/store";
import { FOLLOW_USER, UPDATE_PROFILE, GET_FOLLOWERS, GET_FOLLOWING, LOGIN_USER_INFO, BUY_OFFICAIL_MARK } from "@/constants/API";

export const AuthApi = createApi({
    reducerPath: "AuthApi",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_BASE_URL,
        prepareHeaders: (headers, { getState, endpoint }) => {
            const token = (getState() as RootState).auth.token;

            const setHeaderEndpoints = ["authFormSubmit", "updateApi", "getApi", "deleteApi", "followUser", "getFollowingUsers", "unfollowUser", "getLoginUserInfo", "getFollowersUsers", "EditProfile", "buyOfficialMarks"];
            if (token && setHeaderEndpoints.includes(endpoint)) {
                headers.set("Authorization", `${token}`);
            }
            return headers;
        }
    }),
    tagTypes: ["following", "loginUserInfo", "updateProfile"],
    endpoints: (builder) => ({
        getApi: builder.query({
            query: ({ api }) => ({
                url: api,
                method: "GET",
            }),
            transformResponse: (res: any) => res.data || res.reelData,
            transformErrorResponse: (res) => res.data,
        }),
        getLoginUserInfo: builder.query({
            query: () => LOGIN_USER_INFO,
            transformResponse: (res: any) => res.data,
            transformErrorResponse: (res) => res.data,
            providesTags: ["following", "loginUserInfo", "updateProfile"]
        }),
        authFormSubmit: builder.mutation({
            query: ({ form, api }) => ({
                url: api,
                method: "POST",
                body: form,
            }),
            transformErrorResponse: (res) => res.data,
        }),
        updateApi: builder.mutation({
            query: ({ form, api }) => ({
                url: api,
                method: "PATCH",
                body: form,
            }),
            transformErrorResponse: (res) => res.data,
        }),
        deleteApi: builder.mutation({
            query: ({ api, body }) => ({
                url: api,
                method: "DELETE",
                body: body
            }),
            transformErrorResponse: (res) => res.data,
            transformResponse: (res: any) => res.data,
        }),
        followUser: builder.mutation({
            query: (userId) => ({
                url: FOLLOW_USER,
                method: "POST",
                body: { user_id: userId }
            }),
            invalidatesTags: ["following"]
        }),
        getFollowingUsers: builder.query({
            query: () => GET_FOLLOWING,
            transformResponse: (res: any) => res.data,
            providesTags: ["following"]
        }),
        getFollowersUsers: builder.query({
            query: () => GET_FOLLOWERS,
            transformResponse: (res: any) => res.data,
        }),
        unfollowUser: builder.mutation({
            query: (userId) => ({
                url: `follow/${userId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["following", "loginUserInfo"]
        }),
        EditProfile: builder.mutation({
            query: (form) => ({
                url: UPDATE_PROFILE,
                method: "PATCH",
                body: form
            }),
            invalidatesTags: ["updateProfile"]
        }),
        buyOfficialMarks: builder.mutation({
            query: (form) => ({
                url: BUY_OFFICAIL_MARK,
                method: "POST",
                body: form
            })
        })
    }),
});

export const { useAuthFormSubmitMutation, useGetApiQuery, useUpdateApiMutation, useDeleteApiMutation, useFollowUserMutation, useGetFollowingUsersQuery, useGetFollowersUsersQuery, useUnfollowUserMutation, useGetLoginUserInfoQuery, useEditProfileMutation, useBuyOfficialMarksMutation } = AuthApi;
