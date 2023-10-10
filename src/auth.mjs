// src/auth.mjs
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

const users = [
  { id: 1, username: 'user', password: 'password' },
  // Add more users as needed
];

passport.use(new LocalStrategy((username, password, done) => {
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return done(null, false, { message: 'Incorrect username or password' });
  }

  return done(null, user);
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = users.find(u => u.id === id);
  done(null, user);
});

export default passport;
    