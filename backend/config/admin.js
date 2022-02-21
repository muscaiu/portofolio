module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7a233d126dab7a4e26bb1132874fa2b6'),
  },
});
