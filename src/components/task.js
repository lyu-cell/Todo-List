import { project } from "./project";


const task = (function() {
    
    class TaskInitialize {
        constructor(title, date) {
            this.title = title;
            this.date = date;
        }
    }

    const sendTask = (title, date, taskLocation) => {
        const task = new TaskInitialize(title, date)
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

