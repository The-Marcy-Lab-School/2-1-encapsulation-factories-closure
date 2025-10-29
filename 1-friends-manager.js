const friendsManager = {
  friends: ['ada', 'bart'],
  addFriend(newFriend) {
    this.friends.push(newFriend);
  },
  printFriends() {
    this.friends.forEach((friend) => {
      console.log(`I am friends with ${friend}`);
    });
  }
}

friendsManager.addFriend('caleb');
friendsManager.addFriend('deema');
friendsManager.printFriends();