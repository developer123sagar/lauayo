/* eslint-disable @typescript-eslint/no-explicit-any */
import { Following, IReelData, ISpecificUserVideo, User } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialSelectedItem = localStorage.getItem("selectedItem");

interface AuthReducer {
  token: string;
  loginUser: User | null;
  selectedItem: any | null;
  ContentPolicy: any | null;
  userProfileData: IReelData | null;
  userVideoData: ISpecificUserVideo[] | null;
  selectedReel: IReelData | null;
  followingUsers: Following | null;
}

const initialState: AuthReducer = {
  token: "",
  loginUser: null,
  selectedItem: initialSelectedItem ? JSON.parse(initialSelectedItem) : null,
  userProfileData: null,
  userVideoData: null,
  followingUsers: null,
  selectedReel: null,
  ContentPolicy: null,
}

export const AuthReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
      localStorage.setItem("token", action.payload)
    },
    logOut: (state) => {
      state.token = "",
        localStorage.removeItem("token")
    },
    setLoginUser: (state, action) => {
      state.ContentPolicy = action.payload
    },
    setUser: (state, action) => {
      state.loginUser = action.payload
    },
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
      localStorage.setItem("selectedItem", JSON.stringify(state.selectedItem));
    },
    setUserProfileData: (state, action) => {
      state.userProfileData = action.payload;
    },
    setUserVideo: (state, action) => {
      state.userVideoData = action.payload
    },
    setSelectedReel: (state, action) => {
      state.selectedReel = action.payload;
    },
    setFollowingUser: (state, action) => {
      state.followingUsers = action.payload
    }
  }
})

export const { setToken, logOut, setLoginUser, setSelectedItem, setUserProfileData, setUserVideo, setSelectedReel, setFollowingUser, setUser } = AuthReducer.actions



