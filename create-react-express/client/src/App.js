import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (<div>
      <Navbar></Navbar>
      <Header></Header>
      <Footer></Footer>
    </div>
    )
  }
}

export default App;
