const users = [{
  id: 1,
  name: 'Michal',
  schooId: 123
},{
  id: 2,
  name: 'Kasia',
  schooId: 321
}];

const grades = [{
  id: 1,
  schooId: 123,
  grade: 86
},{
  id: 2,
  schooId: 321,
  grade: 100
},{
  id: 3,
  schooId: 123,
  grade: 11
}];

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    const user = users.find((user)=>{
      return user.id === id;
    });
    if(user){
      resolve(user);
    } else {
      reject(`Unable to find user with id of ${id}`);
    }
  });
};

// Andrew has a 83% in the class
const getStatus = (userId) => {
  let user;
  return getUser(userId).then((tempUser) => {
    user = tempUser;
    return getGrades(user.schooId);
  }).then((grades) => {
    let average = 0;

    if (grades.length > 0) {
      average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
    }

    return `${user.name} has a ${average}% in the class.`;
  });
};
// const getStatus = (userId) => {
//   return getUser(userId).then((user) => {
//     return getGrades(user.schooId).then((grades) => {
//       return `${user.name} grades ${grades[0].grade}`;
//     });
//   });
// };

const getGrades = (schooId) => {
  return new Promise((resolve, reject) => {
    resolve(grades.filter((grade) =>{
      return grade.schooId === schooId;
    }));
  });
};

getStatus(1).then((user) => {
  console.log(user);
}).catch((e) =>{
  console.log(e);
});
