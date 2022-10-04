#!/usr/bin/env node

import addTerm from './addTerm.js';
import getStats from './getStats.js';
import 'dotenv/config'
import chooseProject from './projectChooser.js';
import addLocale from './addLocale.js';

const taskSwitch = (): void => {
const taskSwitch = async (): Promise<void> => {
  const [...args] = process.argv
  console.log('Starting traduora-cli...')
  const projectId = await chooseProject()
  if (!projectId) {
    console.log('Invalid project ID!')
    return
  }
  switch (args[2]) {
    case 'addTerm':
      await addTerm(projectId)
      break
    case 'getStats':
      await getStats(projectId)
      break
    case 'addLocale':
      await addLocale(projectId)
      break
    default:
      console.log(args[0], 'is not a valid command!')
  }
}

void taskSwitch()
export default {}
