const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./database/conn");
const Register = require("./models/registers");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "/login/front.html");
const templates_path = path.join(__dirname, "../templates/views"); //yaha double dot ek baar back jane ke liye hai file mai like cd src se cd back ke liye
const partials_path = path.join(__dirname, "../templates/views");

app.use(express.static(path.join(__dirname, "../", "public"))); //"../public"

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.set("views", templates_path); 
app.set("view engine", "hbs"); //this line is also imp kuki yeah file bata rahi hai
hbs.registerPartials(
  partials_path
); 
app.get("/", (req, res) => {
  res.render("front"); 
});

// app.get("/register", (req, res) => {
//   res.render("register");
// });

app.get("/enter", (req, res) => {
  res.render("index");
});

// app.get("/create", (req, res) => {
//   res.render("resume");
// });

//create a new user in our database
app.post("/add", async (req, res) => {
  try {
    // console.log(req.body.SignupUsername);
    // res.send(req.body.SignupUsername);
    const password = req.body.SignupPassword;
    const cpsassword = req.body.SignupConfirmPassword;

    if (password === cpsassword) {
      const registerUser = new Register({
        SignupUsername: req.body.SignupUsername,
        SignupEmail: req.body.SignupEmail,
        SignupPassword: password,
        SignupConfirmPassword: cpsassword,
      });

      const registered = await registerUser.save();
      res.status(201).render("index");
    } else {
      res.send("Password is not matching");
    }
  } catch (error) {
    res.status(400).send(error);
  }
  // res.render("index");
});

// login check

app.post("/enter", async (req, res) => {
  try {
    const Username = req.body.Username;
    const Password = req.body.Password;

    const username = await Register.findOne({ SignupUsername: Username });

    if (username.SignupPassword === Password) {
      res.status(201).render("resume");
    } else {
      res.send("Password are not matched");
    }
  } catch (error) {
    res.status(400).send("invalid Email");
  }
});

app.listen(port, () => {
  console.log(`server is running at port no. ${port}`);
});
