import { identity, identityGG} from "./module";
import chalk from "chalk";
const log = console.log;

var user = { firstName: 'Igor', lastName: "Maslakov", age: 30, profession: `Software Engineer` };

let company = {name: "SoftTeco", location: ['Minsk', "Kiev", `Warsaw`]};

function foo({longArgument, reallyLongArgument, reallyReallyReallyLong, lastOneISwear}) {
  return longArgument + ' ' + reallyLongArgument + ' ' + reallyReallyReallyLong + ': ' + lastOneISwear;
}



const result = foo({longArgument: user.firstName, reallyLongArgument: "(" + identity.username + ")", reallyReallyReallyLong:  user.lastName, lastOneISwear: user.profession,
});

console.log(result);

log(chalk.blue(result))
