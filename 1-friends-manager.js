// Object Oriented Programming encapsulates data with functionality
const friendsManager = {
  username: 'ben',
  friends: ['ada', 'bart'],
  addFriend(newFriend) {
    this.friends.push(newFriend);
  },
  printFriends() {
    this.friends.forEach((friend) => {
      console.log(`${this.username} is friends with ${friend}`);
    });
  }
}

friendsManager.printFriends();
// ben is friends with ada
// ben is friends with bart

friendsManager.addFriend('cleo');
friendsManager.printFriends();
// ben is friends with ada
// ben is friends with bart
// ben is friends with cleo