/* 
A factory function makes and returns an object
*/

const makeFriendsManager = () => {
  // This variable is in the "outer" function's scope. 
  // friends is referenced by addFriend and printFriends but is not in the friendsManager itself.
  const friends = [];

  const friendsManager = {
    addFriend(newFriend) {
      if (typeof newFriend !== 'string') return;
      friends.push(newFriend);
    },
    printFriends() {
      console.log(friends);
    },

  }
  return friendsManager;
}

// When we invoke makeFriendsManager, we get the friendsManager object back
const bensFriendsManager = makeFriendsManager();

// Even after we leave the scope where friends is available, addFriend and printFriends can reference friends for us!
bensFriendsManager.addFriend('zo')
bensFriendsManager.addFriend('motun')
bensFriendsManager.printFriends() // ['zo', 'motun']

// We have no way of accessing friends. Not on the object or from the variable friends.
console.log(bensFriendsManager.friends) // undefined
console.log(friends); // reference error!