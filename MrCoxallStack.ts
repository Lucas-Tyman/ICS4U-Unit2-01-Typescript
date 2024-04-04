/** 
 * This class defines a string stack
 *
 * By: Lucas Tyman
 *  Version 1.0
 *  Since: 2023-03-20
 */

export class MrCoxallStack {
  private stackList: number[]

  // Creates the stack
  public constructor() {
    this.stackList = []
  }

  // Push method  add elements to the stack
  public push(
  }

  // Pushes the values to the stack
  public push(string: stringPushed) {
    this.stackAsList.push(stringPushed)
  }

  // Returns the stack
  public showStack() {
    let stackItems = this.stackAsList[0]

    for (let counter = 1; counter < this.stackAsList[counter]
  }

    return stackItems
  }
}
