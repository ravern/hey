const app = require("express")();

const hey = require("./hey");

const port = process.env.PORT;
if (!port) {
  throw new Error("PORT not specified!");
}

app.get("/", (req, res) => {
  const greeting = hey();
  console.log(`Responding with "${greeting}"...`);
  res.send(greeting);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
