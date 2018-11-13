import { environment } from '../../environments/environment';

export const CONST = {

    URL_USERS_ADD: environment.api + 'users/add',
    URL_USERS_GET_ALL: environment.api + 'users/all',
    URL_USER_LOGIN: environment.api + 'users/login/#da#',
    URL_USER_GET_BY_ID: environment.api + 'users/getById/',
    URL_USER_GET_BY_USERNAME: environment.api + 'users/getByusername/',
    URL_PUT_USER_PASSWORD: environment.api + 'users/update/password',

    URL_FOLLOW_CHECK: environment.api + 'followers/check/',
    URL_FOLLOWER_REQUEST: environment.api + 'followers/request',
    URL_FOLLOWERS: environment.api + 'followers/getFollowers/',
    URL_FOLLOWEDS: environment.api + 'followers/getFolloweds/',

    URL_POST: environment.api + 'post/getPost/',

 
    URL_UPDATE_NAME: environment.api + 'users/{username}/update/name',
    URL_UPDATE_BIO: environment.api + 'users/{username}/update/bio',
    URL_UPDATE_PHONE: environment.api + 'users/{username}/update/phoneNumber',
    URL_UPDATE_GENDER: environment.api + 'users/{username}/update/gender',
    URL_UPDATE_PASS: environment.api + 'users/{username}/update/password',
    URL_UPDATE_WEB: environment.api + 'users/{username}/update/web',
    URL_UPDATE_USERNAME: environment.api + 'users/{username}/update/userName',
    URL_UPDATE_EMAIL: environment.api + 'users/{username}/update/email',




};
