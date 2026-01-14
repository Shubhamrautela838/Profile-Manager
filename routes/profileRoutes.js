const express = require("express");
const Profile = require("../models/Profile");

const router = express.Router();

/* CREATE profile */
router.post("/", async (req, res) => {
  const profile = await Profile.create(req.body);
  res.json(profile);
});

/* READ profile */
router.get("/", async (req, res) => {
  const profile = await Profile.findOne();
  res.json(profile);
});

/* UPDATE profile */
router.put("/:id", async (req, res) => {
  const updated = await Profile.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

/* SEARCH */
router.get("/search", async (req, res) => {
  const q = req.query.q;
  const result = await Profile.find({
    skills: { $regex: q, $options: "i" }
  });
  res.json(result);
});

/* FILTER PROJECTS BY SKILL */
router.get("/projects", async (req, res) => {
  const skill = req.query.skill;
  const profile = await Profile.findOne();
  const filtered = profile.projects.filter(p =>
    profile.skills.includes(skill)
  );
  res.json(filtered);
});

module.exports = router;

