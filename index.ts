/**
 * This program uses a class to list the stack
 *
 * By: Lucas Tyman
 * Verison 1.0
 * Since: 2024-03-20
 * */

import { MrCoxallStack } from './MrCoxallStack'
import { createPrompt } from 'bun-promptx'

// Uses MrCoxallStack
const fruitStack = new MrCoxallStack()
fruitStack.push("apple")
fruitStack.push("banana")
fruitStack.push("cherry")

const colourStack = new MrCoxallStack()
colourStack.push("red")
colourStack.push("green")
colourStack.push("blue")

const catStack = new MrCoxallStack()
catStack.push("Calico")
catStack.push("Siamese")
catStack.push("Ginger")

// Show the fruit stack
const fruitStackItems = fruitStack.showStack()
console.log("Fruit items:", fruitStackItems)

// Shows the colour stack
const colourStackItems = colourStack.showStack()
console.log("Colour items:", colourStackItems)

// Shows the cat stack
const catStackItems = catStack.showStack()
console.log("Cat items:", catStackItems)

console.log('\nDone.')
