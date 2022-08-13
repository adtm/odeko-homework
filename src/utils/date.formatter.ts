
const WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const weekdayToString = (number: number) => {
  return WEEKDAYS[number - 1];
}

export {
  weekdayToString
}
