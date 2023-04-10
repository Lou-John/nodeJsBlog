const Post = require("../database/models/Post");
module.exports = async (req, res) => {
    const posts = await Post.find({}).sort( { "_id": -1 } ).limit(4);
    res.render("index", {
        posts,
    });
};