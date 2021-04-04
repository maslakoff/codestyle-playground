var user = { firstName: 'Igor', lastName: "Maslakov", age: 30, profession: `Software Engineer` };

let company = {name: "SoftTeco", location: ['Minsk', "Kiev", `Warsaw`]};

function foo({longArgument, reallyLongArgument, reallyReallyReallyLong, lastOneISwear}) {
  return longArgument + ' ' + reallyLongArgument + ' ' + reallyReallyReallyLong + ' ' + lastOneISwear;
}
let identity = {
  username: 'maslakoff',
}



const result = foo({longArgument: user.firstName, reallyLongArgument: user.lastName, reallyReallyReallyLong: user.profession, lastOneISwear: company.name,
});

console.log(result);
