// First, we make a function that returns our friendsManager. 
// This is an "outer" function
const makeFriendsManager = (username) => {
  // This variable is in the "outer" function's scope. 
  // friends is referenced by addFriend and printFriends but is not in the friendsManager itself.
  const friends = [];

  const friendsManager = {
    username,
    addFriend(newFriend) {
      if (typeof newFriend !== 'string') {
        console.log('new friends must be strings');
        return;
      }
      friends.push(newFriend);
    },
    printFriends() {
      this.friends.forEach((friend) => {
        console.log(`${this.username} is friends with ${friend}`);
      });
    },
    // add a getter method to get a copy of the friends array
  }
  return friendsManager;
}

const bensFriends = makeFriendsManager();
bensFriends.addFriend('zo')
bensFriends.addFriend('motun')
bensFriends.printFriends() // ['zo', 'motun']

// Try to access the friends array from the bensFriends object

// Try to access the friends array from the global scope