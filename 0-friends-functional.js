const addFriendToList = (friends, newFriend) => {
  const friendsCopy = [...friends]
  friendsCopy.push(newFriend);
  return friendsCopy;
};

const printFriends = (username, friends) => {
  friends.forEach((friend) => {
    console.log(`${username} is friends with ${friend}`)
  });
};

const friends = ['ada', 'bart'];
const newFriends = addFriendToList(friends, 'cleo');

printFriends('ben', friends);
// ben is friends with ada
// ben is friends with bart

printFriends('ben', newFriends);
// ben is friends with ada
// ben is friends with bart
// ben is friends with cleo