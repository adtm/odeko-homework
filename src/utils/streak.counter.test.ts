import { calculateIncreasingStreaks } from "./streak.counter"

describe("streak.counter", () => {

  test("return increasing streak", () => {
    const result = calculateIncreasingStreaks([
      { count: 1, day: new Date("2010-01-01") },
      { count: 1, day: new Date("2011-01-01") },
      { count: 2, day: new Date("2011-01-04") },
      { count: 3, day: new Date("2011-01-08") }
    ])

    expect(result).toEqual(["2011-1-1/2011-1-8"])
  })

  test("return multiple increasing streaks", () => {
    const result = calculateIncreasingStreaks([
      { count: 3, day: new Date("2011-01-01") },
      { count: 1, day: new Date("2011-01-02") },
      { count: 1, day: new Date("2011-01-03") },
      { count: 2, day: new Date("2011-01-06") },
      { count: 1, day: new Date("2011-02-01") },
      { count: 2, day: new Date("2011-03-01") },
      { count: 2, day: new Date("2011-04-01") },
      { count: 3, day: new Date("2011-05-01") },
      { count: 4, day: new Date("2011-06-03") },
      { count: 1, day: new Date("2011-08-01") },
      { count: 3, day: new Date("2012-08-05") }
    ])

    expect(result).toEqual([
      "2011-1-3/2011-1-6",
      "2011-2-1/2011-3-1",
      "2011-4-1/2011-6-3",
      "2011-8-1/2012-8-5",
    ])
  })

  test("don't count streak where streak 2 < days", () => {
    const result = calculateIncreasingStreaks([
      { count: 1, day: new Date("2011-01-01") },
      { count: 10, day: new Date("2011-01-02") },
    ])

    expect(result).toEqual([])
  })

  test("don't count streak if value is not increasing", () => {
    const result = calculateIncreasingStreaks([
      { count: 1, day: new Date("2011-01-01") },
      { count: 1, day: new Date("2011-01-02") },
      { count: 0, day: new Date("2011-01-04") },
    ])

    expect(result).toEqual([])
  })

})
