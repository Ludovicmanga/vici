import passport from 'passport';
import LocalStrategy from 'passport-local';
import bcrypt from 'bcrypt';
import prisma from '../../prisma/prismaClient';

const customFields = {
    usernameField: 'email',
    passwordField: 'password'
}

passport.use(
    new LocalStrategy(
        customFields,
        async (email, password, done) => {
            try {
                const user = await prisma.user.findUnique({ where: {
                    email,
                } });
                if (user) {
                const auth = await bcrypt.compare(password, user.password);
                if (auth) {
                    return done(null, user);
                }
                return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, false, { message: 'Incorrect email.' });
            } catch (e) {
                return done(e);
            }
        }
    )
);

passport.serializeUser((user, done) => {
    return done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id,
            }
        });
        if (!user) {
          return done(null, false);
        } else {
          return done(null, user);
        }
      } catch (e) {
        return done(e, null);
      }
})
