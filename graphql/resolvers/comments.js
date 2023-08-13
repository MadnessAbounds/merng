const { UserInputError } = require('apollo-server');
const Post = require('../../models/Posts');
const checkAuth = require('../../util/check-auth');

module.exports = {
    mutation: {
        createComment: async (_, {postId, body}, context)=> {
            const user = checkAuth(contect);
            if(body.trim()===''){
                throw new UserInputError('Empty comment',{
                    errors: {
                        body: 'Comment body must not be empty'
                    }
                })
            }
            const post= await post.findById(postId);
            if(post){
                post.comments.unshift({
                    body,
                    username
                    createdAt: new Date().toISOString()
                })
                await post.save();
                return post;
            } else throw new UserInputError('Post not found');
        }
    }
}