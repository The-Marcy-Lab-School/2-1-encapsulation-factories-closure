const createFriendsManager = (username) => {
  return {
    username,
    friends: [],
    addFriend(newFriend) {
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
const adasFriends = createFriendsManager('ada');

bensFriends.addFriend('ada');
bensFriends.addFriend('bart');

adasFriends.addFriend('ben');
adasFriends.addFriend('cleo');

bensFriends.printFriends();
// ben is friends with ada
// ben is friends with bart

adasFriends.printFriends();
// ada is friends with ben
// ada is friends with cleo

