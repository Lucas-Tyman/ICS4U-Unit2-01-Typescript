/** 
 * This class defines a string stack
 *
 * By: Lucas Tyman
 *  Version 1.0
 *  Since: 2023-03-20
 */

export class MrCoxallStack {
  private stackList: string[]

  // Creates the stack
  public constructor() {
    this.stackList = []
  }

  // Pushes the values to the stack
  public push(string: stringPushed) {
    this.stackList.push(stringPushed)
  }

  // Returns the stack
  public showStack() {
    let stackItems = this.stackList[0]

    for (let counter = 1; counter < this.stackList.length; counter++) {
      stackItems = stackItems + ", " + this.stackList[counter]
  }

    return stackItems
  }
}
