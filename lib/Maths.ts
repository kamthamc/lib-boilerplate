
export default class Maths {
  sum (...args: number[]) {
    return args.reduce((previousValue, value) => previousValue + value, 0);
  }
  multiply(...args: number[]) {
    return args.reduce((previousValue, value) => previousValue * value, 0);
  }
}