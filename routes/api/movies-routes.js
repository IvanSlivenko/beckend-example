const express = require("express");

const moviesController = require('../../controllers/movies-controller');

const schemas = require("../../schemas/movies");
const { validateBody } = require("../../decorators");


const router = express.Router();

// маршрут  get "/"
router.get("/", moviesController.getAllMovies);

// Шукаємо
router.get("/:id", moviesController.deleteMovieById);

// Додаємо 
router.post("/",validateBody(schemas.movieAddSchema), moviesController.addMovie);

// Змінюємо
router.put(
  "/:id", validateBody(schemas.movieAddSchema), moviesController.updateMovieById
);
 
// Видаляємо
router.delete("/:id", moviesController.deleteMovieById);

module.exports = router;





