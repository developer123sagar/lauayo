import { Dispatch, SetStateAction } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface AuthFormProps {
    variant: "SIGNIN" | "SIGNUP";
    title: string;
    api: string;
}

export type LoginInput = {
    email: string;
    password: string;
}

export type ErrRes = {
    error?: string;
    message?: string;
}

export interface IAvatarProps {
    src: string;
    name?: string;
    onClick?: () => void;
}

type UserVideo = {
    _id: string;
    caption: string;
    images: [];
    videos: string;
    type: string;
    likes: number;
    liked_by: string[];
    comments: number;
    gifts: number;
    accepted_for_foryou: false;
    views: number;
    subscribers: string[];
    viewed_by: [];
    sponsored: boolean;
    createdAt: Date;
    videoUrl: string;
    user_id_username?: string;
}

export interface ISpecificUserVideo extends UserVideo {
    user_id: string;
}

export interface ProfileUserVideo extends UserVideo {
    user_id: {
        _id: string;
        username: string;
        name: string;
        followers: number;
        following: number;
        officialMark: true;
    }
}
export interface IReelData extends UserVideo {
    user_id: {
        _id: string;
        username: string;
        officialMark: boolean;
        profile_picture: string;
        name: string;
    }
}

export type User = {
    _id: string;
    mobile: string;
    email: string;
    isgooglelinked: boolean;
    isapplelinked: boolean;
    username: string;
    name: string;
    active: boolean;
    verificationToken: string;
    verified: string;
    last_seen: Date;
    suspended: boolean;
    isDeactivate: boolean;
    level: number;
    honey_drops: number;
    honey_bits: number;
    user_ranks: [];
    streak: number;
    streak_expiry: Date;
    gifts_sent: number;
    gifts_received: number;
    followers: number;
    following: number;
    buzzs: number;
    officialMark: boolean;
    is_premium_member: boolean;
    is_vip_member: boolean;
    is_staff: boolean;
    is_admin: boolean;
    foreign_user: boolean;
    blocked_users: [];
    createdAt: Date;
    profile_picture: string;
}

export type Following = {
    _id: string;
    user_id: {
        _id: string;
        name: string;
        profile_picture: string;
    }
    user_id_username: string;
    status: string;
    follower_id: {
        _id: string;
        name: string;
        profile_picture: string
    }
    follower_id_username: string;
    createdAt: Date;
}

export type EmojiType = {
    emoji: any;
};

export type CommentType = {
    _id: string;
    buzz_id: string;
    commenter_id: {
        _id: string;
        mobile: string;
        username: string;
        name: string;
        level: number;
        streak: number;
        gifts_sent: number;
        gifts_received: number;
        followers: number;
        following: number;
        buzzs: number;
        is_premium_member: boolean;
        is_vip_member: boolean;
        is_staff: boolean;
        is_admin: boolean;
        profile_picture: string;
    },
    comment: string;
    createdAt: Date;
}

export type ModalProps = {
    showModal: boolean;
    setIsShowModal: Dispatch<SetStateAction<boolean>>;
}