import React, { Component } from "react";
import "./App.css";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";

export default class App extends Component {
  render(): React.ReactNode {
    return (
      <div className="min-h-screen  mr-3 ml-3">
      {/* <Content/> */}
      <Header/>
      </div>
    );
  }
}
