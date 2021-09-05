import users from "./users.js"
// Задание 1
//  Получить массив имен всех пользователей (поле name).
console.log('======');
console.log('Task 1');
console.log('======');

const getUserNames = (users) => {
  return users.map((user) => user.name);
};

console.log(getUserNames(users)); // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// Задание 2
//  Получить массив объектов пользователей по цвету глаз (поле eyeColor).
console.log('======');
console.log('Task 2');
console.log('======');

const getUsersWithEyeColor = (users, color) => {
  return users.filter((users) => users.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// Задание 3
//  Получить массив имен пользователей по полу (поле gender).
console.log('======');
console.log('Task 3');
console.log('======');

const getUsersWithGender = (users, gender) => {
  return users.filter((users) => users.gender === gender).map((user) => user.name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// Задание 4
// Получить массив только неактивных пользователей (поле isActive).
console.log('======');
console.log('Task 4');
console.log('======');

const getInactiveUsers = (users) => {
  return users.filter((users) => users.isActive === false);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// Задание 5
// Получить пользоваля (не массив) по email (поле email, он уникальный).
console.log('======');
console.log('Task 5');
console.log('======');

const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// Задание 6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
console.log('======');
console.log('Task 6');
console.log('======');
const getUsersWithAge = (users, min, max) => {
  return users.filter((users) => users.age > min && users.age < max);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40)); // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// Задание 7
// Получить общую сумму баланса (поле balance) всех пользователей.
console.log('======');
console.log('Task 7');
console.log('======');
const calculateTotalBalance = (users) => {
  let totalBalance = 0;
  users.forEach((user) => {
    totalBalance += user.balance;
  });
  return totalBalance;
};

console.log(calculateTotalBalance(users)); // 20916

// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.
console.log('======');
console.log('Task 8');
console.log('======');
const getUsersWithFriend = (users, friendName) => {
  return users.filter((user) => user.friends.includes(friendName)).map((user) => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// Задание 9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
console.log('======');
console.log('Task 9');
console.log('======');
const getNamesSortedByFriendsCount = (users) => {
  // твой код
  const sortByNumberOfFriends = (a, b) => a.friends.length - b.friends.length;

  console.log(users.sort(sortByNumberOfFriends));
};

console.log(getNamesSortedByFriendsCount(users)); // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// Задание 10
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
console.log('======');
console.log('Task 10');
console.log('======');
const getSortedUniqueSkills = (users) => {
  let skills = new Array();
  users.forEach((user) => {
    skills = skills.concat(user.skills);
  });
  let uniqueSkills = [...new Set(skills)];
  return uniqueSkills;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
