import chalk from 'chalk';
import { identity } from './module';

const { log } = console;

const user = {
  firstName: 'Igor',
  lastName: 'Maslakov',
  age: 30,
  profession: `Software Engineer`,
};

const company = { name: 'SoftTeco', location: ['Minsk', 'Kiev', `Warsaw`] };

function foo({
  longArgument,
  reallyLongArgument,
  reallyReallyReallyLong,
  lastOneISwear,
}) {
  return `${longArgument} ${reallyLongArgument} ${reallyReallyReallyLong}: ${lastOneISwear}`;
}

const result = foo({
  longArgument: user.firstName,
  reallyLongArgument: `(${identity.username})`,
  reallyReallyReallyLong: user.lastName,
  lastOneISwear: user.profession,
});

log(chalk.blue(result));
log(chalk.green(company));
