const postCraft = require('../../models/postcraftModels');
const users = require('../../models/usersModels');
const verifyToken = require('../../middleware/authentication');

async function getAllPosts(request, h) {
    const userData = await verifyToken(request);
    if (!userData) {
        return h.response({
            status: 'fail',
            message: 'Invalid or missing token please re-login'
        }).code(401);
    }

    try {
        const posts = await postCraft.findAll({
            include: {
                model: users,
                attributes: ['username']
            }
        });

        const result = posts.map(data => {
            return {
                postId: data.postId,
                userId: data.userId,
                username: data.usersTable.username,
                title: data.title,
                URL_Image: data.URL_Image,
                description: data.description
            }
        });

        return h.response({
            status: 'success',
            message: 'Successfully retrieved all post data!',
            data: result
        }).code(200);
    } catch (error) {
        return h.response({
            status: 'fail',
            message: error.message
        }).code(500);
    }
}

module.exports = getAllPosts;
