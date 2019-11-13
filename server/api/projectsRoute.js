const express = require("express");
const Project = require("../schemas/Project");

const projectRouter = express.Router({
    mergeParams: true
});

projectRouter.post("/", async (req, res) => {
    project = new Project({
        title: "First Project"
    });
    project.save()
        .then(res =>
            console.log(res))
        .catch(err => {
            console.log(err);
        })
        res.send("ok");
});

module.exports = projectRouter;