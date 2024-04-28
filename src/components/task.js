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

    const sendTask = (title, description, priority, status, taskLocation) => {
        const task = new TaskInitialize(title, description, priority, status, priority)
        project.appendTask(taskLocation, task)
    }

    const changeStatusAndPriority = (property, changeTo, title) => {
        for (let i = 0; i < project.arrayStorage.length; i++) {
            project.arrayStorage[i].forEach(Element => {
                if (typeof Element === "object" && Element.title === title) {
                    Object.defineProperty(Element, property, {value: changeTo})
                }
            })
        }
    }
    
    return {sendTask, changeStatusAndPriority}
})()

export {task}

