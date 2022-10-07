#!/usr/bin/env node

import addTerm from './addTerm.js'
import getStats from './getStats.js'
import chooseProject from './projectChooser.js'
import addLocale from './addLocale.js'
import uploadJSONFile from './uploadJSONFile.js'
import importJSONFile from './importJSONFile.js'
import logIn from './login.js';

const taskSwitch = async (): Promise<void> => {
  const [...args] = process.argv
  console.log('Starting traduora-cli...')
  const project = await chooseProject()
  if (!project) {
    console.log('Invalid project ID!')
    return
  }
  await logIn(project.clientId, project.clientSecret)
  switch (args[2]) {
    case 'addTerm':
      await addTerm(project.id)
      break
    case 'getStats':
      await getStats(project.id)
      break
    case 'addLocale':
      await addLocale(project.id)
      break
    case 'uploadJSONFile':
      await uploadJSONFile(project.id)
      break
    case 'importJSONFile':
      await importJSONFile(project.id)
      break
    default:
      console.log(args[0], 'is not a valid command!')
  }
}

void taskSwitch()
export default {}
