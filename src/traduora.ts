#!/usr/bin/env node

import addTerm from './addTerm.js';
import getStats from './getStats.js';
import 'dotenv/config'

const taskSwitch = (): void => {
  const [...args] = process.argv
  console.log('Starting traduora-cli...')
  switch (args[2]) {
    case 'addTerm':
      console.log('Add new term:')
      void addTerm()
      break
    case 'getStats':
      console.log('Get stats:')
      void getStats()
      break
    default:
      console.log(args[0], 'is not a valid command!')
  }
}

taskSwitch()
export default {}
