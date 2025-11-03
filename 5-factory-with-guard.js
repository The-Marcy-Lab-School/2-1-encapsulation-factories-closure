const createFriendsManager = (username) => {
  return {
    username,
    friends: [],
    addFriend(newFriend) {
      if (typeof newFriend !== 'string') { // new guard clause
        console.log('new friends must be strings');
        return;
      }
      this.friends.push(newFriend);
    },
    printFriends() {
      this.friends.forEach((friend) => {
        console.log(`${this.username} is friends with ${friend}`);
      });
    },
    removeLast() {
      this.friends.pop()
    }
  }
}

const bensFriends = createFriendsManager('ben');

bensFriends.addFriend('daniel'); // this gets added
bensFriends.addFriend(true);     // this does not

// What about this is NOT consistent or predictable?
bensFriends.friends.push('emmaneul');
bensFriends.friends.push(42);

bensFriends.printFriends();