import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    // this = {}
    this.state = {
      pictureUrl: '',
      name: '',
      friends: []
    };
  }

  updatePicture(value) {
    this.setState(() => {
      return {
        pictureUrl: value,
      }
    })
  }

  updateName(value) {
    this.setState(() => {
      return {
        name: value,
      }
    })
  }

  addFriend() {
    const newFriend = {
      pictureUrl: this.state.pictureUrl,
      name: this.state.name,
    };

    const newFriendsList = this.state.friends.slice();
    newFriendsList.push(newFriend);
    this.setState(() => {
      return {
        friends: newFriendsList,
        pictureUrl: '',
        name: '',
      }
    });
  }

  render() {
    return (
      <div>
        Picture:
        <input
          onChange={event => this.updatePicture(event.target.value)}
          value={this.state.pictureUrl}
        />

        Name:
        <input
          onChange={event => this.updateName(event.target.value)}
          value={this.state.name}
        />

        <button onClick={() => this.addFriend() }>Add friend</button>

        <div>{
          this.state.friends.map(friend => <div>
            <img className="thumbnail" src={friend.pictureUrl} />
            {friend.name}
          </div>)
        }</div>

        <div>Current state: {JSON.stringify(this.state)}</div>
      </div>
    );
  }
}

export default App;
