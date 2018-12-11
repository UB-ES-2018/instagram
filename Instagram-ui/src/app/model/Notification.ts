import { User } from "./User";
import { PostDto } from "./Post";
import { CommentDto } from "./CommentDto";

export class Notification {
    id: number;
    OwnerUser: User;
    actionUser: User;
    post: PostDto;
    idFollow: number;
    comment:CommentDto;
    message: string;
    request: boolean;
    createdAt: number;
    createdString: string;

    public static createDummy(): Notification {
        const notification = new Notification();
        notification.id = -1;
        notification.OwnerUser = null;
        notification.actionUser = null;
        notification.post = null;
        notification.idFollow = null;
        notification.comment = CommentDto.createDummy();
        notification.message = null;
        notification.request = null;
        notification.createdAt = null;
        notification.createdString = null;

        return notification;
    }
}