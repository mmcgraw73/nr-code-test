export const worker = class {
  constructor(str) {
    this.str = str
  }

  threeWords() {
    return this.str.splice(0, 3)
  }
}