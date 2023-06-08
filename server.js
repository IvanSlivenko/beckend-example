const mongoose = require("mongoose");
const {DB_HOST} = require("./config");


const app = require('./app')


  // зв'язуємось з базою данних !!!
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    // закриваємо всі запущені процеси
    process.exit(1);
  });


