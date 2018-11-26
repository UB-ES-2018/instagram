export class User {
    id: number;
    username: string;
    password: string;
    email: string;
    name: string;
    bio: string;
    website: string;
    phoneNumber: number;
    gender: string;
    photo: string;

    public static createDummy(): User {
        const user = new User();
        user.id = -1;
        user.name = '';
        user.password = '';
        user.email = '';
        user.username = '';
        user.bio = '';
        user.website = '';
        user.phoneNumber = 0;
        user.gender = '';
        user.photo = '';
        
        return user;
    }
}