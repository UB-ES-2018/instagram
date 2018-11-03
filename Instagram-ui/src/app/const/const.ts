import { environment } from '../../environments/environment';

export const CONST = {

    URL_USERS_ADD: environment.api + 'users/add',
    URL_USERS_GET_ALL: environment.api + 'users/all',
    URL_USER_LOGIN: environment.api + 'users/login/#da#',
    URL_USER_GET_BY_ID: environment.api + 'users/getById/',
    URL_FOLLOWER_REQUEST: environment.api + 'followers/request',
    URL_FOLLOWERS: environment.api + 'followers/getFollowers/',
    URL_FOLLOWEDS: environment.api + 'followers/getFolloweds/',
    URL_POST: environment.api + 'post/getPost/',
    URL_USER_GET_BY_USERNAME: environment.api + 'users/getByusername/',
    URL_UPDATE_NAME: environment.api + 'users/{username}/update/name'


};
