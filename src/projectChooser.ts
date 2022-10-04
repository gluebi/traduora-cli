import { projects } from './setup.js'
import inquirer from 'inquirer'

const chooseProject = async (): Promise<string | undefined> => {
    const parsedProjects: Array<{ id: string; name: string }> = JSON.parse(projects as string)

    const result = await inquirer.prompt([
        {
            type: 'list',
            name: 'name',
            message: 'Please select a project',
            choices: parsedProjects.map((project) => project.name),
        },
    ])

    return parsedProjects.find((project) => project.name === result.name)?.id
}

export default chooseProject
