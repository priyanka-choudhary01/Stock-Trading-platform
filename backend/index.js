require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");
const User = require("./schemas/userSchema");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { HoldingModel } = require("./model/holdingModel");
const PositionModel = require("./model/PositionsModel");
const { OrderModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 8080;
const uri = process.env.MONGO_URL;

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.get('/addHoldings', async(req,res)=>{
//     let tempHoldings = [
// {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
// ];
// tempHoldings.forEach((item) =>{
//     let newHolding = new HoldingModel({
//         name:item.name,
//         qty: item.qty,
//         avg: item.avg,
//         price:item.price,
//         net:item.net,
//         day:item.day,
//     });
//     newHolding.save();
// });
// res.send("done");

// })

// app.get("/addPositions" , async(req,res) =>{
//     let tempPositions = [
//         {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];
//   tempPositions.forEach((item)=>{
//     let newPostion = new PositionModel({
//     product: item.product,
//     name: item.name,
//     qty:item.qty,
//     avg: item.avg,
//     price:item.price,
//     net: item.net,
//     day: item.day,
//     isLoss: item.isLoss,
//     });
//     newPostion.save();
//   })
//   res.send("done!");
// })

// app.get("/demouser", async(req,res)=>{
//     let fakeuser = new UserModel({
//     email:"demouser@gmail.com",
//     phone:"78767",
//     username:"demo user",
//     DOB:Date.now(),
//     });
//     let registeredUser = await UserModel.register(fakeuser,"helloworld");
//     res.send(registeredUser);
// })

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingModel.find({});
  res.json(allHoldings);
});
app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionModel.find({});
  res.json(allPositions);
});
app.get("/allOrders", async (req, res) => {
  let allOrders = await OrderModel.find({});
  res.json(allOrders);
});
app.post("/newOrder", async (req, res) => {
  console.log(req.body);
  let newOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  res.send("order saved!");
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res.status(400).json({ message: "All fields are required" });

    const user = await User.findOne({ username });

    if (!user) return res.status(404).json({ message: "User does not exist" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid Credentials" });

    const token = crypto.randomBytes(32).toString("hex");
    await User.updateOne({ _id: user._id }, { token });

    return res.json({ token: token });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

app.post("/signup", async (req, res) => {
  console.log("REQ BODY", req.body);
  try {
    const { username, email, password, phone, DOB, panNumber } = req.body;
    if (!email || !username || !password || !DOB || !panNumber)
      return res.status(400).json({ message: "All fields are required" });

    const existingUser = await User.findOne({
      $or: [{ email }, { username }, { panNumber }],
    });

    if (existingUser) {
      return res.status(409).json({
        message: "Email, username, or PAN number already exists",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newuser = new User({
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      DOB: req.body.DOB,
      panNumber: req.body.panNumber,
      password: hashPassword,
      address: {
        city: req.body.address.city,
        state: req.body.address.state,
        pincode: req.body.address.pincode,
      },

      bankDetails: {
        accountNumber: req.body.bankDetails.accountNumber,
        ifscCode: req.body.bankDetails.ifscCode,
      },
    });
    newuser.save();
    return res.json({ message: "User created" });
  } catch (err) {
    console.error(err);
    return res.json({ success: false, message: err.message });
  }
});
app.listen(PORT, () => {
  console.log("App started!");
  mongoose.connect(uri);
  console.log("DB connected!");
});
