const makeProject = (function() {
    const arrayStorage = [["Project Name: Default"]]

    const newProject = (projectName) => {
        const project = [`Project Name: ${projectName}`]
        arrayStorage.push(project)
    }

    const showLatest = () => {
        console.log(arrayStorage[arrayStorage.length - 1])
        console.log(arrayStorage)
    }

    return {newProject, showLatest}
})()

export {makeProject}