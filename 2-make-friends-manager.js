// First, we make a function that returns our friendsManager. 
// This is an "outer" function
const makeFriendsManager = () => {
  // This variable is in the "outer" function's scope. 
  // friends is referenced by addFriend and printFriends but is not in the friendsManager itself.
  const friends = [];

  const friendsManager = {
    addFriend(newFriend) {
      if (typeof newFriend !== 'string') {
        console.log('new friends must be strings');
        return;
      }
      friends.push(newFriend);
    },
    printFriends() {
      this.friends.forEach((friend) => {
        console.log(`I am friends with ${friend}`);
      });
    },
    // add a getter method to get a copy of the friends array
  }
  return friendsManager;
}

const bensFriendsManager = makeFriendsManager();
bensFriendsManager.addFriend('zo')
bensFriendsManager.addFriend('motun')
bensFriendsManager.printFriends() // ['zo', 'motun']

// Try to access the friends array from the bensFriendsManager object

// Try to access the friends array from the global scope