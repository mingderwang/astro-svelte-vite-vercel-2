// src/routes.mjs
import express from 'express';
import passport from './auth.mjs';

const router = express.Router();

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true,
}));

router.get('/profile', isAuthenticated, (req, res) => {
  res.render('profile', { user: req.user });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

export default router;
