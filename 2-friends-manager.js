/* 
Object Oriented Programming encapsulates data with functionality
*/
const friendsManager = {
  friends: [],
  addFriend(newFriend) {
    this.friends.push(newFriend);
    // `this` refers to the "owner" of the method. 
  }
}

friendsManager.addFriend('ahmad');
friendsManager.addFriend('brandon');
friendsManager.addFriend('carmen');
// Here, friendsManager is the owner of addFriend. 
// so, this.friends === friendsManager.friends


// What about this is NOT consistent or predictable?
friendsManager.addFriend('daniel');
friendsManager.addFriend(true);
friendsManager.friends.push('emmaneul');
friendsManager.friends.push(42);
