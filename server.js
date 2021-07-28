// console.log("hello");
// console.log("henlo");
//SMP BACKEND
// let times = 4;

// if (times > 3) {
//   var he = "hui";
//   console.log(he);
// }
// console.log(he);
// var he = "henlo";
// console.log(times);
// console.log(he);
// function smp() {
//   var hom = ["hell", "sgs"];

//   //sgs
//   let smpnew = "hello.kathan.gmail.com";
//   console.log(smpnew.split("."));
// }
// smp();
// //console.log(hom);

// // // split used for string
// // // splice for arrays
// // // slice for both

// const car = {
//   paint: "red",
//   company: "bmw",
//   country: "india",
//   carno: 32242,
// };
// car.paint = "blue";
// console.log(car.paint);

// //diff between let const var
// //global function spec

// // ../home/img

// // var http = require("http");
// // http
// //   .createServer(function (req, res) {
// //     console.log(req);
// //     res.write("Hello World!smdbvsjhbvsf");
// //     res.end();
// //   })
// //   .listen(3000);

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/smp/:id", (req, res) => {
  res.send({
    message: "Hello World! one",
  });
});

app.get("/smp/:id/:rollno", (req, res) => {
  res.send({
    message: "Hello World!",
    number: 40234,
    name: req.params.id,
    rollno: req.params.rollno,
  });
});

app.post("/smp", (req, res, next) => {
  //req.body.name
  //req.body
  console.log(req.body.name);
  let name = req.body.name;
  if (name === "kathan") {
    res.status(500).send({ message: "ERROR" });
  }
  res.send({ message: "works" });
});
//Middleware functions can perform the following tasks:

// Execute any code.
// Make changes to the request and the response objects.
// End the request-response cycle.
// Call the next middleware in the stack.

app.use("/api", require("./routes/api"));
// app.use("/auth", require("./api"));

// api/name
// api/name/rollno

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port} helloo`);
});
