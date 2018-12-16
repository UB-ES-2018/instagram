import { environment } from '../../environments/environment';

export const CONST = {

    URL_USERS_ADD:  '/users/add',
    URL_USERS_GET_ALL:  '/users/all',
    URL_USER_LOGIN:  '/users/login/#da#',
    URL_USER_GET_BY_ID:  '/users/getById/',
    URL_USER_GET_BY_USERNAME:  '/users/getByusername/',
    URL_PUT_USER_PASSWORD:  '/users/update/password',
    URL_PUT_UPDATE_ALL:  '/users/update/all',
    URL_PUT_UPDATE_PERFIL_PHOTO:  '/users/update/photo/{idUser}',

    URL_PUT_UPDATE_PRIVACITY:  '/users/update/privacity/{idUser}',
    

    URL_USER_SEARCH:  '/users/search/',

    URL_FOLLOW_CHECK:  '/followers/check/',
    URL_FOLLOWER_REQUEST:  '/followers/request',
    URL_FOLLOWERS:  '/followers/getFollowers/',
    URL_FOLLOWEDS:  '/followers/getFolloweds/',
    URL_DELETE_FOLLOW:  '/followers/delete',

    URL_POST:  '/post/getPost/',
    URL_UPLOAD_IMAGE:  '/post/add/',
    URL_GET_POST_BY_IDPOST_AND_IDUSER_LOGGED:  '/post/load/{idPost}',
    URL_GET_POSTS_BY_IDUSER:  '/post/getPostIDUser/{idUser}',
    URL_GET_USERS_BY_TEXT:  '/users/search/',
    URL_GET_FEED_POSTS_BY_IDUSER:  '/feed/request/{idUser}',

    URL_COMMENT_ADD:  '/comments/add/',
    URL_COMMENT_GET_BY_ID:  '/comments/getById/',
    URL_COMMENT_GET_BY_ID_POST:  '/comments/getByPost/',
    URL_COMMENT_GET_BY_ID_USER:  '/comments/getByUser/',
    URL_PUT_COMMENT_CONTENT:  '/comments/update/content/',
    URL_DELETE_COMMENT:  '/comments/delete/{id}',

    URL_LIKE_ADD:  '/likes/add/',
    URL_LIKE_ALL:  '/likes/all/',
    URL_LIKE_GET_BY_ID:  '/likes/getById/',
    URL_LIKE_GET_BY_ID_POST:  '/likes/getByIdPost/',
    URL_LIKE_GET_LIKERS:  '/likes/getLikers/',
    URL_DELETE_LIKE:  '/likes/delete',

    URL_COMMENT_LIKE_ADD:  '/commentLikes/add',
    URL_COMMENT_LIKE_ALL:  '/commentLikes/all/',
    URL_COMMENT_LIKE_GET_BY_ID:  '/commentLikes/getById/',
    URL_COMMENT_LIKE_GET_BY_ID_COMMENT:  '/commentLikes/getByIdComment/',
    URL_COMMENT_LIKE_GET_COMMENT_LIKERS:  '/commentLikes/getCommentLikers/',
    URL_DELETE_COMMENT_LIKE:  '/commentLikes/delete/{idComment}/{idUser}',

    URL_HASH_TAG_ADD:  '/hashTags/add/',
    URL_HASH_TAG_ALL:  '/hashTags/all/',

    URL_POST_TAG_ADD:  '/postTags/add/',
    URL_POST_TAG_ALL:  '/postTags/all/',


    URL_UPDATE_NAME:  '/users/{username}/update/name',
    URL_UPDATE_BIO:  '/users/{username}/update/bio',
    URL_UPDATE_PHONE:  '/users/{username}/update/phoneNumber',
    URL_UPDATE_GENDER:  '/users/{username}/update/gender',
    URL_UPDATE_PASS:  '/users/{username}/update/password',
    URL_UPDATE_WEB:  '/users/{username}/update/web',
    URL_UPDATE_USERNAME:  '/users/{username}/update/userName',
    URL_UPDATE_EMAIL:  '/users/{username}/update/email',

    URL_POST_ADD_COMMENT:  '/comments/add',

    URL_GET_NOTIFICATION_ALL:  '/notification/all/{idUser}',
    URL_GET_NOTIFICATION_REQUEST:  '/notification/request/{idUser}',
    URL_GET_NOTIFICATION_ACCEPT:  '/notification/accept/{id}',
    URL_GET_NOTIFICATION_HIDE:  '/notification/hide/{id}'



};
