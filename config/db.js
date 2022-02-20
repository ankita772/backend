const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.ih4w7.mongodb.net/nodeLearning?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("server connected with mongoose");
  })
  .catch((err) => {
    console.log("error ", err);
  });
