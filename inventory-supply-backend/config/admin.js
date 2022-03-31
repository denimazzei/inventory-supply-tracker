module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c13adc1f2350e877cba0bcdb1caa5212'),
  },
});
