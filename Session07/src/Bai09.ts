class User {
    public id: number;
    public posts: Post[] = [];
    public followers: User[] = [];

    constructor(id: number) {
        this.id = id;
    }

    // Tạo bài đăng mới
    createPost(content: string): void {
        const newPost = new Post(this.posts.length + 1, this.id, content);
        this.posts.push(newPost);
        console.log(`Người dùng ${this.id} đã tạo bài đăng: "${content}"`);
    }

    // Bình luận vào bài đăng
    comment(postId: number, commentContent: string): void {
        for (const post of this.posts) {
            if (post.id === postId) {
                const newComment = new Comment(post.comments.length + 1, this.id, commentContent);
                post.addComment(newComment);
                console.log(`Người dùng ${this.id} đã bình luận vào bài đăng ${postId}`);
                return;
            }
        }
        console.log(`Không tìm thấy bài đăng ${postId} của người dùng ${this.id}`);
    }

    // Theo dõi người dùng khác
    follow(user: User): void {
        if (!this.followers.includes(user) && user.id !== this.id) {
            this.followers.push(user);
            console.log(`Người dùng ${this.id} đã theo dõi người dùng ${user.id}`);
        }
    }

    // Thích bài đăng
    likePost(postId: number): void {
        for (const post of this.posts) {
            if (post.id === postId) {
                post.addLike(this.id);
                console.log(`Người dùng ${this.id} đã thích bài đăng ${postId}`);
                return;
            }
        }
        console.log(`Không tìm thấy bài đăng ${postId} của người dùng ${this.id}`);
    }

    // Xem feed (bài đăng của người theo dõi)
    viewFeed(): void {
        console.log(`=== Feed của người dùng ${this.id} ===`);
        for (const followedUser of this.followers) {
            for (const post of followedUser.posts) {
                console.log(`Bài đăng ${post.id} của người dùng ${followedUser.id}: "${post.content}"`);
            }
        }
    }
}

class Post {
    public id: number;
    public userId: number;
    public content: string;
    public likes: number[] = [];
    public comments: Comment[] = [];

    constructor(id: number, userId: number, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
    }

    addLike(userId: number): void {
        if (!this.likes.includes(userId)) {
            this.likes.push(userId);
        }
    }

    addComment(comment: Comment): void {
        this.comments.push(comment);
    }
}

class Comment {
    public id: number;
    public userId: number;
    public content: string;
    public replies: Comment[] = [];

    constructor(id: number, userId: number, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
    }

    addReply(reply: Comment): void {
        this.replies.push(reply);
    }
}

// Test thử
const user1 = new User(1);
const user2 = new User(2);

// user1 tạo bài đăng
user1.createPost("Hôm nay trời đẹp quá!");
user1.createPost("TypeScript thật thú vị!");

// user2 theo dõi user1
user2.follow(user1);

// user2 xem feed
user2.viewFeed();

// user2 bình luận vào bài đăng đầu tiên của user1
user1.comment(1, "Mình cũng thấy vậy!");

// user2 thích bài đăng đầu tiên của user1
user1.likePost(1);

// In ra thông tin bài đăng đầu tiên của user1
console.log(user1.posts[0]);
