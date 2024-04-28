const project = (function() {
    const arrayStorage = [["Project Name: Default"]]

    const initializeProject = (projectName) => {
        const project = [`Project Name: ${projectName}`]
        arrayStorage.push(project)
    }

    const showLatestArray = () => {
        console.log(arrayStorage[arrayStorage.length - 1])
        console.log(arrayStorage)
    }


    const appendTask = (project, task, index) => {
        for (let i = 0; i < arrayStorage.length; i++) {
            if (arrayStorage[i].includes(project) === true) {        
                arrayStorage[0].push(task)
            }
        }
    }

    return {initializeProject, showLatestArray, appendTask, arrayStorage}
})()

export {project}