const Post = require('../../models/Posts');

module.exports = {
    Query: {
        async getPosts(){
            try{
                const posts = await Post.find();
                return posts;                
            } catch (err) {
                throw new Error(err);
            }

        },
        async getPost(_, {postID} ){
            try{
               const post = await Post.findById(postID);
               if(post){
                return post;
               } else{
                throw new Error('Post not found');
               }
            } catch(err){]
            throw New Error(err);
            }
        }
    }
};