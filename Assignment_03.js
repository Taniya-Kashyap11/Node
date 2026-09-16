const http = require("http");
const getData = require("./getingData");
const {
  addUser,
  displayItems,
  displayItem,
  updateItem,
  deleteItem,
  patchItem,
} = require("./Helper_modules");
http
  .createServer((req, res) => {
    if (req.method === "POST" && req.url === "/items") {
      let body = "";
      req.on("data", (chunk) => (body += chunk.toString()));
      req.on("end", () => {
        addUser(JSON.parse(body));
        res.end("Item added successfully");
      });
    } else if (req.method === "GET" && req.url === "/items") {
      displayItems();
      res.end("Items displayed successfully");
    } else if (req.method === "GET" && req.url === "/items/2") {
      const productID = req.url.split("/")[2];
      displayItem(parseInt(productID));
      res.end();
    } else if (req.method === "PUT" && req.url === "/items/2") {
      const productID = req.url.split("/")[2];
      let body = "";
      req.on("data", (chunk) => (body += chunk.toString()));
      req.on("end", () => {
        res.write(body);
        updateItem(parseInt(productID), JSON.parse(body));
        res.end("Updated successfully");
      });
    } else if (req.method === "PATCH" && req.url === "/items/2") {
      const productID = req.url.split("/")[2];
      let body = "";
      req.on("data", (chunk) => (body += chunk.toString()));
      req.on("end", () => {
        res.write(body);
        patchItem(parseInt(productID), body);
        res.end("Updated successfuly using patch request");
      });
    } else if (req.method === "DELETE" && req.url === "/items/2") {
      const productID = req.url.split("/")[2];
      deleteItem(parseInt(productID));
      res.end("Item deleted successfully");
    } else {
      res.write("Invalid request");
      res.end();
    }
  })
  .listen(3000, () => {
    console.log("Server is running on port 3000");
  });
