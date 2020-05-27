// Required dependencies
const express = require("express");
const path = require("path");

// Set up Express App
const app = express();
const PORT = process.env.PORT || 3306;
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));


// Route Files
// =============================================================
require(path.join(__dirname, './app/routing/apiRoutes.js'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes.js'))(app);


// Begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});