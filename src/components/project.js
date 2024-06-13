const project = (function() {
    if(localStorage.arrayStorage === undefined) [
        localStorage.arrayStorage = ""
    ]
    const sendItems = (function() {
        const arrayStorage = JSON.parse(localStorage.arrayStorage)

        const storeProject = (project) => {
            arrayStorage.push(project)
            localStorage.arrayStorage = JSON.stringify(arrayStorage)
        }

        const storeTask = (projectIndex, task) => {
            arrayStorage[projectIndex].push(task)
            localStorage.arrayStorage = JSON.stringify(arrayStorage)
        }
        
        const arrayStorageStats = () => {
            return arrayStorage.length
        }
        return {storeProject, storeTask, arrayStorageStats}
    })
    
    const initializeProject = (projectName) => {
        sendItems().storeProject([`#${projectName}`])
    }

    const appendTask = (project, task) => {
        if (sendItems().arrayStorageStats() !== 0) {
            sendItems().storeTask(project, task)
        }
    }

    const initializeStorage = (() => {
        const appendDefault = (() => {
            if (localStorage.arrayStorage === "" && sendItems().arrayStorageStats() === 0) {
                sendItems().storeProject(["#Home"])
            }
        })()
    })()
    
    return {initializeProject, appendTask}
})()

export {project}


///