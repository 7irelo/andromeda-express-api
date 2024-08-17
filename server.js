const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./route/user');
const chatRoutes = require('./route/chat');
const messageRoutes = require('./route/message');
const commentRoutes = require('./route/comment');
const groupRoutes = require('./route/group');
const groupMessageRoutes = require('./route/groupMessage');
const groupMembershipRoutes = require('./route/groupMembership');
const likeRoutes = require('./route/like');
const pageRoutes = require('./route/page');
const pagePostRoutes = require('./route/pagePost');
const postRoutes = require('./route/post');
const productRoutes = require('./route/product');
const productCommentRoutes = require('./route/productComment');
const productLikeRoutes = require('./route/productLike');
const tagRoutes = require('./route/tag');

const app = express();

app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/chats', chatRoutes);
app.use('/messages', messageRoutes);
app.use('/comments', commentRoutes);
app.use('/groups', groupRoutes);
app.use('/groupMessages', groupMessageRoutes);
app.use('/groupMemberships', groupMembershipRoutes);
app.use('/likes', likeRoutes);
app.use('/pages', pageRoutes);
app.use('/pagePosts', pagePostRoutes);
app.use('/posts', postRoutes);
app.use('/products', productRoutes);
app.use('/productComments', productCommentRoutes);
app.use('/productLikes', productLikeRoutes);
app.use('/tags', tagRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
