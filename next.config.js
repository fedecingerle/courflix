module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/browser",
        permanent: true
      }
    ];
  },
  env: {
    BASE_URL: "http://localhost:3000",
    MONGODB_URI:
      "mongodb+srv://fedecingerle:fedec@cluster0.3slkh.mongodb.net/courflix?retryWrites=true&w=majority"
  }
};
