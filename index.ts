import express from "express";
const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello test world!");
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at ${host}:${port}`);
});
