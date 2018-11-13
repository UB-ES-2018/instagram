export class Follow{
    follower : number;
    followed : number;
    accepted : boolean;

    public static createDummy(): Follow {
        const follow = new Follow();
        follow.follower = -1;
        follow.followed = -1;
        follow.accepted = false;

        return follow;
    }
}

