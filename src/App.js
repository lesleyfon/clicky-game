import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import friends from "./friends.json";
import "./App.css";

// npm package thst shuffles arrays
let shuffleArr = require('shuffle-array');
// "./" means from current directory
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    curScore: 0,
    highScore: 0
  };

  clicked = (id) => {

    let friends = this.state.friends;
    let curScore = this.state.curScore;
    let trgtFriend = {};
    friends.forEach((element) => {
      if (element.id === id){
        trgtFriend = element;
      }
      // console.log(element.id)
    });
    // if else statement to check if its tru or false

    if (trgtFriend.clicked === false){
      // setting the array clicked to true 
      trgtFriend.clicked = true;
      // incrementing the score
      curScore++;
      // shuffle the whole array
      shuffleArr(friends);
      // set the state on line 11 to the new score gotten
      this.setState({curScore, friends})
    }
    else{
      // else we end the game by running the end game function
      this.endGame()
    }
  }

  endGame = () => {

    // setting the scorea back to Zero
    let highScore = this.state.highScore;
    let curScore = this.state.curScore;
    let friends = this.state.friends;

    if (curScore > highScore){
      // if curscore is greater than high score set high score to curscore
        highScore = curScore;
    }
    // set the curScore to 0
    curScore = 0;
    // loop through each element and set the clicked to false.
    friends.forEach((element) => {
      element.clicked = false;

    });
    // shuffle the friends array agains
    shuffleArr(friends);
    // then we set the state for each back to 0
    this.setState({friends, curScore, highScore});
  }

//   removeFriend = id => {
//     // Filter this.state.friends for friends with an id not equal to the id being removed
//     const friends = this.state.friends.filter(friend => friend.id !== id);
//     // Set this.state.friends equal to the new friends array
//     this.setState({ friends });
//   };

//   // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    let highScore = this.state.highScore;
    let curScore = this.state.curScore;
    return (
      <div>
        <Navbar 
          current = {curScore}
          high = {highScore}
        />
        <Wrapper>
          {this.state.friends.map(friend => (
            <FriendCard 
            id={friend.id}
            key={friend.id}
            image={friend.image}
            clicked = {this.clicked}
            />
          ))}
        </Wrapper>
        />
      </div>

    );
  }
}

export default App;
