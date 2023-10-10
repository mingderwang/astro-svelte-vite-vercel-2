// src/index.mjs
import express from 'express';
import expressSession from 'express-session';
import passport from './auth.mjs';
import routes from './routes.mjs';
import { createServer } from 'astro';

const app = express();
const port = process.env.PORT || 3000;

// Set up session middleware
app.use(expressSession({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));

// Initialize Passport.js and restore authentication state from session
app.use(passport.initialize());
app.use(passport.session());

// Set up routes
app.use('/', routes);

// Create an Astro server
createServer({
  // Your Astro configuration goes here
  // For example, you can configure your layouts and components
  // as needed for your application.
}).listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
