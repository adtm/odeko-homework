
const DAY_IN_MS = 1000 * 60 * 60 * 24
const MINIMAL_STREAK_LENGTH = 2

const calculateIncreasingStreaks = (countsByDate: Array<{ count: number, day: Date, }>) => {
  let streaks: Date[][] = [];
  let currentStreak = [countsByDate[0].day];

  const length = countsByDate.length
  for (let currIdx = 1; currIdx < length; currIdx++) {
    
    const prevDate = countsByDate[currIdx - 1]
    const currDate = countsByDate[currIdx]
    const firstStreakDate = currentStreak[0]

    const isIncreasing = currDate.count - prevDate.count > 0
    if (!isIncreasing) {
      if (isStreakMinimumLength(prevDate.day, firstStreakDate)) {
        streaks.push([...currentStreak, prevDate.day])
      }
      currentStreak = [currDate.day]
    }
    // to put the last item inside the results if it's increasing
    else if (currIdx == length - 1) {
      if (isStreakMinimumLength(currDate.day, firstStreakDate)) {
        streaks.push([...currentStreak, currDate.day])
      }
    }
  }

  return formatStreaks(streaks);
}

const formatStreaks = (streaks: Date[][]) => {
  return streaks.map(([start, end]) => `${formatDate(start)}/${formatDate(end)}`)
}

const formatDate = (date: Date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

const isStreakMinimumLength = (biggerDate: Date, smallerDate: Date) => {
  const streakLength = dayDiffBetweenDates(biggerDate, smallerDate)
  return streakLength > MINIMAL_STREAK_LENGTH;
}

const dayDiffBetweenDates = (biggerDate: Date, smallerDate: Date) => {
  const diffTimeInMs = biggerDate.getTime() - smallerDate.getTime();
  return Math.ceil(diffTimeInMs / (DAY_IN_MS));
}

export {
  calculateIncreasingStreaks
}
