module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/browser",
        permanent: true
      }
    ];
  }
};
