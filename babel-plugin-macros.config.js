const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  styledComponents: {
    pure: true,
    meaninglessFileNames: ['index', 'style'],
    displayName: !isProduction,
  },
};
