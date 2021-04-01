const user = {
  firstName: 'Igor',
  lastName: 'Maslakov',
  age: 30,
  profession: 'Software Engineer',
};

const company = {
  name: 'SoftTeco',
};

function foo({
  longArgument,
  reallyLongArg,
  reallyReallyReallyLong,
  lastOneISwear,
}) {
  return longArgument + reallyLongArg + reallyReallyReallyLong + lastOneISwear;
}
