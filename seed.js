const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Profile = require("./models/Profile");

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

Profile.create({
  name: "Shubham Rautela",
  email: "shubham@email.com",
  education: "B.Tech",
  skills: ["JavaScript", "Node.js", "React", "MongoDB"],
  projects: [
    {
      title: "Weather App",
      description: "Real-time weather app using API",
      links: ["https://github.com/Shubhamrautela838"]
    }
  ],
  work: ["Backend Intern"],
  links: {
    github: "https://github.com/Shubhamrautela838",
    linkedin: "https://linkedin.com/in/shubhamrautela",
    portfolio: "https://yourportfolio.com"
  }
}).then(() => {
  console.log("Data Seeded");
  process.exit();
});

