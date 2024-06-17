// api routes
const AUTH_ROUTE = "users";
const ADMIN_ROUTE = "superAdmin";
const VIDEO_ROUTE = "misc";
const FOLLOW = "follow";

export const POST_USER_LOGIN = `${AUTH_ROUTE}/login`;
export const LOGIN_USER_INFO = `${AUTH_ROUTE}/config`;
export const POST_USER_REGISTER = `${AUTH_ROUTE}/register`;
export const DELETE_USER_ACCOUNT = `${AUTH_ROUTE}/remove`
export const UPDATE_PROFILE = `${AUTH_ROUTE}/profile`

// for videos for home main page
export const GET_VIDEOS = `${VIDEO_ROUTE}/image`
export const GET_SINGLE_USER_VIDEO = `${VIDEO_ROUTE}/specific_users_video`
export const GET_OTHER_USER_VIDEO = `${VIDEO_ROUTE}/others_users_video`
export const POST_SUPERADMIN = `${ADMIN_ROUTE}/login`;
export const UPLOAD_VIDEO = `${VIDEO_ROUTE}/get-presignedurl`
export const EDITUSERDATA = `admin/editUser`
export const GET_USER = "/admin/getUsers";
export const EDIT_USER = `/admin/editUser`;
export const GET_PRIVACYPOLICY = `/policy`;
export const POST_PRIVACYPOLICY = `/policy/createAndUpdate`;
export const Post_ContentPolicy = `/contentPolicy/createAndUpdate`
export const GET_TERMS = `/terms`;
export const GET_CONTENT = `/contentPolicy`;
export const POST_TERMS = `/terms/createAndUpdate`
export const LIKE_VIDEOS = "buzz/like";
export const UNLIKE_VIDEOS = "buzz/unlike";
export const COMMENT_VIDEOS = `buzz/comments`

// for follow
export const FOLLOW_USER = `${FOLLOW}`
export const GET_FOLLOWERS = `${FOLLOW}/followers`
export const GET_FOLLOWING = `${FOLLOW}/following`
export const BUY_OFFICAIL_MARK = `khaltipayment`