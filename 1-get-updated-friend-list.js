/* 
Functional Programming separates functions from the data they operate on
*/
const getUpdatedFriendList = (friends, newFriend) => {
  const newList = [...friends, newFriend]; // keep it pure, make a new list
  return newList;
}

const friends = ['ahmad', 'brandon', 'carmen'];

const newFriends = getUpdatedFriendList(friends, 'deema');
console.log(friends);
console.log(newFriends);
