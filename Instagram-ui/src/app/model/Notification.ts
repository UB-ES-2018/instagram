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
}