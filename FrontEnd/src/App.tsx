import React, { Component } from "react";
import "./App.css";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";

export default class App extends Component {
  render(): React.ReactNode {
    return (
      <div className="bg-accent-white-100 min-h-screen">
      {/* <Content/> */}
      <Header/>
      </div>
    );
  }
}
