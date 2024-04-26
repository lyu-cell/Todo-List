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

                if (typeof index === 'number') {
                    console.log("breaks in first")
                    arrayStorage[i].splice(index, 0, task)
                    break
                } 
                else {
                    console.log("breaks in second")
                    arrayStorage[i].push(task)
                    break
                }
            }

        }
    }

    return {initializeProject, showLatestArray, appendTask}
})()

export {project}