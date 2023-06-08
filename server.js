const mongoose = require("mongoose");



const app = require('./app');

// console.log(process.env);

// const { DB_HOST } = require("./config");

// ми додали ключ DB_HOST зі значенням === mongodb+srv://ivan8822:iv07092006sl@cluster0.5m4an.mongodb.net/my-movies?retryWrites=true&w=majority
// в render environment
const { DB_HOST } = process.env;


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


