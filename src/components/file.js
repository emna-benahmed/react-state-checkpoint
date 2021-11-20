import React, { Component,useState } from "react";
import fileinfo from "./fileinfo";
class file extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: fileinfo.fullName,
      bio: fileinfo.bio,
      profession: fileinfo.profession,
      count :0
    };
  }
  styles = {
    fontStyle: "italic",
    color: "rgb(249, 178, 8)",
    backgroundColor: "teal",
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({count : this.state.count + 1})
    }, 1000)
  }
  timer = () => {
    
    const Hours = `0${Math.floor(this.state.count / (60 * 60))}`.slice(-2);
    const Minutes = `0${Math.floor((this.state.count / 60) % 60)}`.slice(-2);
    const Seconds = `0${this.state.count % 60}`.slice(-2);
    return `${Hours}:${Minutes}:${Seconds}`
  }
  render() {
    return <div className="data">
  
      <h1 style={this.styles}> {this.state.fullName}</h1>
      <p/>
       <p > {this.state.bio}</p>
       <h3> {this.state.profession}</h3>
    </div>
  }
}

export default file;