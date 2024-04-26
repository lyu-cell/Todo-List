import { project } from "./project";


const task = (function() {
    
    class TaskInitialize {
        constructor(title, description, priority, status) {
            this.title = title;
            this.description = description;
            this.priority = priority;
            this.status = status;
        }
    }

    const sendTask = (title, description, priority, status, taskLocation, index) => {
        const task = new TaskInitialize(title, description, priority, status, priority)
        project.appendTask(taskLocation, task, index)
    }
    
    return {sendTask}
})()

export {task}

