class initializeTask {
    constructor (title, priority, status) {
        this.title = title;
        this.priority = priority;
        this.status = status;
    }

}

const createTask = {
    
    defaultProject: [],
    invokeInitializer: function(title, priority, status) {
        const task = new initializeTask(title, priority, status)
        createTask.defaultProject.push(task)
        createTask.showLatestItem()
    },

    showLatestItem: () => console.log(createTask.defaultProject[createTask.defaultProject.length -1])

}

export {createTask}