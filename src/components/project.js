const project = (function() {
    let arrayStorage = []
    

    
    const initializeProject = (projectName) => {
        arrayStorage.push([`#${projectName}`])
        updateLocalStorage()       
    }

    const showLatestArray = () => {
        console.log(arrayStorage)
    }


    const appendTask = (project, task) => {
        console.log("task")
        for (let i = 0; i < arrayStorage.length; i++) {
            if (arrayStorage[i].includes(project) === true) {        
                arrayStorage[0].push(task)
            }
        }
        
        updateLocalStorage()
    }

    const initializeStorage = (() => {
        
        const appendDefault = (() => {
            if (localStorage.arrayStorage === "" && arrayStorage.length === 0) {
                arrayStorage.push(["#Home"])
            }
        })()

    const initializeFromLocalStorage = (() => {
            if (localStorage.arrayStorage !== "" && arrayStorage.length === 0) {
                arrayStorage = JSON.parse(localStorage.arrayStorage)
            }
        })()
    })()
    
    const updateLocalStorage = () => {
        const update = (() => {
            if (arrayStorage.length !== 0) {
                localStorage.arrayStorage = JSON.stringify(arrayStorage)
            }
        })()
    }
    updateLocalStorage()
    return {initializeProject, showLatestArray, appendTask, arrayStorage}
})()

export {project}