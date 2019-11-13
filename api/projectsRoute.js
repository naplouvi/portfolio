const express = require("express");
const Project = require("../schemas/Project");

const tokenVerification = require('../middlewares/tokenVerification')

commentRouter.post("/", tokenVerification, async (req, res) => {
    if (req.decoded.userid && req.body.movieID && req.body.content) {
        if (req.body.content.trim().length > 0 && req.body.content.trim().length < 280) {

            var movie = await Movie.findOne({ movieID: req.body.movieID });
            if (movie) {
                var comment = new Comment({
                    author: req.decoded.userid,
                    movie: movie._id,
                    content: req.body.content.trim()
                });
                comment.save(err => {
                    if (err)
                        throw err;
                })
                res.status(200).send("ok");
            } else {
                res.json({ message: "Wrong username or movie" });
            }
        } else {
            res.json({message: "Message too long"})
        }
    } else {
        res.json({ message: "Invalid user" })
    }
});

module.exports = commentRouter;