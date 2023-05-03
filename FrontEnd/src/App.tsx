import React, { Component } from "react";
import "./App.css";
import Content from "./components/Content/Content";

export default class App extends Component {
  render(): React.ReactNode {
    return (
      <div className="bg-accent-white-100 min-h-screen">
      <Content/>
      </div>
    );
  }
}
