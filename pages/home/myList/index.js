import React from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
// import AddContext from "../../../context/Add";
// const { items } = useContext(AddContext);

function MyList() {
  return (
    <React.Fragment>
      <Navbar />
      <h1 style={{ fontSize: "10rem", color: "white", textAlign: "center" }}>
        COMMING SOON
      </h1>
      <Footer />
    </React.Fragment>
  );
}

export default MyList;
