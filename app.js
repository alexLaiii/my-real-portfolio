const express = require("express");
const handlebars = require("express-handlebars").create();

const app = express();
const path = require('path');


// Set up Handlebars
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

// Serve static files from the 'public' directory
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: (res, path) => {
      if (path.endsWith('.css')) {
          res.setHeader('Content-Type', 'text/css');
      }
  },
}));


// Define routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/projects", (req, res) => {
  res.render("projects");
});

app.get("/education", (req, res) => {
  res.render("education");
});

app.get("/experience", (req, res) => {
  res.render("experience");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
