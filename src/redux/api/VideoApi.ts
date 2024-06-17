/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "@/redux/store";
import { COMMENT_VIDEOS, GET_OTHER_USER_VIDEO, GET_SINGLE_USER_VIDEO, GET_VIDEOS, UPLOAD_VIDEO } from "@/constants/API";

export const VideoApi = createApi({
    reducerPath: "VideoApi",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token;

            if (token) {
                headers.set("Authorization", `${token}`);
            }
            return headers;
        }
    }),
    tagTypes: ["like_video", "comment"],
    endpoints: (builder) => ({
        getVideo: builder.query({
            query: () => GET_VIDEOS,
            transformResponse: (res: any) => res.reelData.reverse(),
            transformErrorResponse: (res) => res.data,
            providesTags: ["like_video"]
        }),
        getSpecificUserVideo: builder.query({
            query: () => GET_SINGLE_USER_VIDEO,
            transformResponse: (res: any) => res.userData
        }),
        getOtherUserVideo: builder.query({
            query: (userId) => `${GET_OTHER_USER_VIDEO}/${userId}`,
            transformResponse: (res: any) => res.userData
        }),
        likeVideo: builder.mutation({
            query: ({ form, api }) => ({
                url: api,
                method: "POST",
                body: form,
            }),
            transformErrorResponse: (res) => res.data,
            invalidatesTags: ["like_video"]
        }),
        uploadVideo: builder.mutation({
            query: (form) => ({
                url: UPLOAD_VIDEO,
                method: "POST",
                body: form
            }),
            invalidatesTags: ["like_video"]
        }),
        getComment: builder.query({
            query: (videoId) => `${COMMENT_VIDEOS}/${videoId}`,
            transformResponse: (res: any) => res.data,
            providesTags: ["comment"]
        }),
        commentVideo: builder.mutation({
            query: (form) => ({
                url: COMMENT_VIDEOS,
                method: "POST",
                body: form
            }),
            invalidatesTags: ["comment"]
        }),
    }),
});

export const { useGetVideoQuery, useLikeVideoMutation, useUploadVideoMutation, useGetSpecificUserVideoQuery, useGetOtherUserVideoQuery, useCommentVideoMutation, useGetCommentQuery } = VideoApi;