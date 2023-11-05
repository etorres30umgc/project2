const resources = require("../models/resources");

exports.showIndex = (req, res) => {
  res.render("index", {
    title: "index",
  });
};

exports.showResources = (req, res) => {
  // TODO: Implement render for showResources
  res.render("resources", { title: "Resources", resources: resources });
};

exports.showBio = (req, res) => {
  // TODO: Implement render for showBio with properties for:
  // title
  // intro
  // expertise
  // goals
  // skills
  const title = "Edison Torres";
  const intro = "Welcome to my page!";
  const expertise = "Web Development";
  const goals = "To create functional applications and websites.";
  const skills = "HTML, CSS, JS, NODE, EXPRESS";

  res.render("bio", {
    title: title,
    intro: intro,
    expertise: expertise,
    goals: goals,
    skills: skills
  });
};

