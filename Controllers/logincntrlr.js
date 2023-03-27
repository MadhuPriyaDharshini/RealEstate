const bcrypt = require("bcryptjs");

const User = require("../models/UserDetails");

const alert = require("alert");

const jwt = require("jsonwebtoken");

require("dotenv").config();

const JWT_SECRET = process.env.JWT_TOKEN;

createUser = async function (req, res) {
  console.log("Inside CreateUser");
  const { UserName, Email, Password } = req.body;

  const encryptedPassword = await bcrypt.hash(Password, 10);

  const NewUser = {
    UserName,
    Email,
    Password : encryptedPassword,
  };

  try {
    const oldUser = await User.findOne({ Email });
    if (oldUser) {
      return res.json({ error: "User exists" });
    }
    await User.create(NewUser);
    const UserName = NewUser.UserName;
    jwt.sign(
      { UserName },
      JWT_SECRET,
      { expiresIn: "7 days" },
      (err, token) => {
        if (err) throw err;
        res.json({ status: "ok", AccessToken: token });
        alert("Token Created");
      }
    );
  } catch (error) {
    res.send({ status: "error" , message : error});
    console.log(error);
  }
};

validateUser = async function (req, res) {
  console.log("Inside ValidateUser");
  const { Email, Password } = req.body;
  
  const user = await User.findOne({ Email });
  console.log(user);
  const username = user.UserName;
  if (!user) {
    alert("User not found please sign up");
    return res.json({error : "User not found please sign up"});
  }
  const isMatch = await bcrypt.compare(Password, user.Password);
  console.log(isMatch);
  if (!isMatch) {
    return res.status(400).json({ msg: " Password incorrect" });
  }

  jwt.sign(
    {username},
    JWT_SECRET,
    { expiresIn: "30 days" },
    (err, token) => {
      if (err) throw err;
      res.json({status : "ok" , AccessToken : token });
    }
  );
};

module.exports = {createUser,validateUser};

