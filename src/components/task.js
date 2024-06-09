import { project } from "./project";


const task = (function() {
    
    class TaskInitialize {
        constructor(title, date, description, priority, status, index) {
            this.title = title;
            this.date = date;
            this.description = description
            this.index = index;
            this.priority = priority
            this.status = status
        }
    }

    const sendTask = (title, date, description, priority, index, taskLocation) => {
        const task = new TaskInitialize(title, date, description, priority, index)
        project.appendTask(taskLocation, task)
    }
    
    return {sendTask}
})()

export {task}

//const changeStatusAndPriority = (property, changeTo, title) => {
//    for (let i = 0; i < project.arrayStorage.length; i++) {
//        project.arrayStorage[i].forEach(Element => {
//            if (typeof Element === "object" && Element.title === title) {
//                Object.defineProperty(Element, property, {value: changeTo})
//            }
//        })
//    }
//}

