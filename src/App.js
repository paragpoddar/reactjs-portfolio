import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import profile from "./assets/profile.png";

class App extends Component {
  state = { displayBio: false };
  constructor() {
    super();
    // this.state = { displayBio: false }; // or can declare it under class
    // this.readMore = () => {
    //   console.log("readMore this: ", this);
    //   this.setState({ displayBio: true });
    // };
    // this.readMore = this.readMore.bind(this);
    // this.showLess = this.showLess.bind(this);
    this.toggleDisplayBioYo = this.toggleDisplayBio.bind(this); // or can write the function in arrow function syntax
  }

  // readMore() {
  //   this.setState({ displayBio: true });
  // }

  // showLess() {
  //   this.setState({ displayBio: false });
  // }

  // toggleDisplayBio() {
  //   this.setState({ displayBio: !this.state.displayBio });
  // }
  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <img src={profile} className='profile'/>
        <h1>Hello!</h1>
        <p>My name is Parag. I am a software engineer.</p>
        <p>I am always looking forward to working on meaningful projects.</p>
        {this.state.displayBio ? (
          <div>
            <p>I live in India and code every day.</p>
            <p>
              I do code in JS at most of the time.
            </p>
            <p>Besides coding, I also love football and music!</p>
            <button onClick={this.toggleDisplayBioYo}>Show less</button>
          </div>
        ) : (
          <button onClick={this.toggleDisplayBioYo}>Read more</button>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
