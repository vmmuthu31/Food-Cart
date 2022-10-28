import React from "react";
import Header from "../Components/Header";
import Logo from "./Logo";
import Dashboard from "./Dashboard";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Logo />
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default Home;
