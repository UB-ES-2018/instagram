import { environment } from '../../environments/environment';

export const CONST = {

    URL_USERS_ADD: environment.api + 'users/add',
    URL_USERS_GET_ALL: environment.api + 'users/all',
    URL_USER_LOGIN: environment.api + 'users/login/#da#',
    URL_USER_GET_BY_ID: environment.api + 'users/getById/',
    URL_USER_GET_BY_USERNAME: environment.api + 'users/getByusername/',
    URL_PUT_USER_PASSWORD: environment.api + 'users/update/password',
    URL_PUT_UPDATE_ALL: environment.api + 'users/update/all',
    URL_PUT_UPDATE_PERFIL_PHOTO: environment.api + 'users/update/photo/{idUser}',

    URL_FOLLOW_CHECK: environment.api + 'followers/check/',
    URL_FOLLOWER_REQUEST: environment.api + 'followers/request',
    URL_FOLLOWERS: environment.api + 'followers/getFollowers/',
    URL_FOLLOWEDS: environment.api + 'followers/getFolloweds/',
    URL_DELETE_FOLLOW: environment.api + 'followers/delete',

    URL_POST: environment.api + 'post/getPost/',
    URL_UPLOAD_IMAGE: environment.api + 'post/add/',
    URL_GET_POST_BY_IDPOST_AND_IDUSER_LOGGED: environment.api + 'post/load/{idPost}',
    URL_GET_POSTS_BY_IDUSER: environment.api + 'post/getPostIDUser/{idUser}',

    URL_COMMENT_ADD: environment.api + 'comments/add/',
    URL_COMMENT_GET_BY_ID: environment.api + 'comments/getById/',
    URL_COMMENT_GET_BY_ID_POST: environment.api + 'comments/getByPost/',
    URL_COMMENT_GET_BY_ID_USER: environment.api + 'comments/getByUser/',
    URL_PUT_COMMENT_CONTENT: environment.api + 'comments/update/content/',
    URL_DELETE_COMMENT: environment.api + 'comments/delete/{id}',

    URL_LIKE_ADD: environment.api + 'likes/add/',
    URL_LIKE_ALL: environment.api + 'likes/all/',
    URL_LIKE_GET_BY_ID: environment.api + 'likes/getById/',
    URL_LIKE_GET_BY_ID_POST: environment.api + 'likes/getByIdPost/',
    URL_LIKE_GET_LIKERS: environment.api + 'likes/getLikers/',
    URL_DELETE_LIKE: environment.api + 'likes/delete',

    URL_COMMENT_LIKE_ADD: environment.api + 'commentLikes/add',
    URL_COMMENT_LIKE_ALL: environment.api + 'commentLikes/all/',
    URL_COMMENT_LIKE_GET_BY_ID: environment.api + 'commentLikes/getById/',
    URL_COMMENT_LIKE_GET_BY_ID_COMMENT: environment.api + 'commentLikes/getByIdComment/',
    URL_COMMENT_LIKE_GET_COMMENT_LIKERS: environment.api + 'commentLikes/getCommentLikers/',
    URL_DELETE_COMMENT_LIKE: environment.api + 'commentLikes/delete/{idComment}/{idUser}',

    URL_HASH_TAG_ADD: environment.api + 'hashTags/add/',
    URL_HASH_TAG_ALL: environment.api + 'hashTags/all/',
    
    URL_POST_TAG_ADD: environment.api + 'postTags/add/',
    URL_POST_TAG_ALL: environment.api + 'postTags/all/',
    
    
    URL_UPDATE_NAME: environment.api + 'users/{username}/update/name',
    URL_UPDATE_BIO: environment.api + 'users/{username}/update/bio',
    URL_UPDATE_PHONE: environment.api + 'users/{username}/update/phoneNumber',
    URL_UPDATE_GENDER: environment.api + 'users/{username}/update/gender',
    URL_UPDATE_PASS: environment.api + 'users/{username}/update/password',
    URL_UPDATE_WEB: environment.api + 'users/{username}/update/web',
    URL_UPDATE_USERNAME: environment.api + 'users/{username}/update/userName',
    URL_UPDATE_EMAIL: environment.api + 'users/{username}/update/email',

    URL_POST_ADD_COMMENT: environment.api + 'comments/add',




};
