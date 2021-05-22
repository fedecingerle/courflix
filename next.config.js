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
    //local "http://localhost:3000"
    BASE_URL: "https://courflix-fedecingerle.vercel.app",
    MONGODB_URI:
      "mongodb+srv://fedecingerle:fedec@cluster0.3slkh.mongodb.net/courflix?retryWrites=true&w=majority"
  }
};
