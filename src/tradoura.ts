#!/usr/bin/env node

import addTerm from './addTerm';
import getStats from './getStats';
import 'dotenv/config'

const taskSwitch = (): void => {
  const [...args] = process.argv0
  switch (args[0]) {
    case 'addTerm':
      void addTerm()
      break
    case 'getStats':
      void getStats()
      break
    default:
      console.log('Invalid command given!')
  }
}

taskSwitch()
