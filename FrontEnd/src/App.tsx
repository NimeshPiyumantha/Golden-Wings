import React, { Component } from "react";
import "./App.css";
import Content from "./components/Content/Content";

export default class App extends Component {
  render(): React.ReactNode {
    return (
      <div className="min-h-screen">
      <Content/>
      </div>
    );
  }
}
