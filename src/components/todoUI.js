import { project } from "./project";
import { task } from "./task";

const generateElement = (function() {
    const createElements = (function() {
        const projectBtn = document.createElement("button")
        const logo = document.createElement("div")
        const projectContainer = document.createElement("div")
        const dialog = document.createElement("dialog")
        const projectForm = document.createElement("form")
        const taskForm = document.createElement("form")
        const name = document.createElement("label")
        const nameInput = document.createElement("input")
        const submitBtn = document.createElement("button")
        const defaultContainer = document.createElement("div")
        const defaultPro = document.createElement("div")
        const taskDisplay = document.createElement("div")
        const title = document.createElement("div")        
        const taskContainer = document.createElement("div")
        const mainFormContainer = document.createElement("div")
        const formHeader = document.createElement("div")
        const formWrapper = document.createElement("div")
        const formDisplay = document.createElement("div")
        const taskFormText = document.createElement("div")
        const projectFormText = document.createElement("div")
        const projectFormContainer = document.createElement("div")


        
        return {projectBtn, logo, projectContainer, dialog, projectForm, name, nameInput, submitBtn, 
                defaultContainer, defaultPro, taskDisplay, title, taskContainer, mainFormContainer, formHeader,
                formWrapper, formDisplay, taskFormText, projectFormText, projectFormContainer, taskForm}
    })()

    const assignClass = (function() {
        createElements.projectBtn.classList.add("createBtn")
        createElements.logo.classList.add("logo");
        createElements.projectContainer.classList.add("projectContainer")
        createElements.submitBtn.classList.add("submitBtn")
        createElements.defaultContainer.classList.add("defaultContianer")
        createElements.taskDisplay.classList.add("taskDisplay")
        createElements.title.classList.add("title")
        createElements.defaultPro.classList.add("defaultProject")
        createElements.projectForm.classList.add("projectForm")
        createElements.taskForm.classList.add("taskForm")
        createElements.mainFormContainer.classList.add("mainFormContainer")
        createElements.formHeader.classList.add("formHeader")
        createElements.formWrapper.classList.add("formWrapper")
        createElements.formDisplay.classList.add("formDisplay")
        createElements.taskFormText.classList.add("taskFormText")
        createElements.projectFormText.classList.add("projectFormText")
        createElements.projectFormContainer.classList.add("projectFormContainer")
    })()

    const addText = (function() {
        createElements.formHeader.textContent = "Create a New..."
        createElements.taskFormText.textContent = "Task"
        createElements.projectFormText.textContent = "Project"
    })()
    
    const getElement = (function() {
        const header = document.querySelector("header")
        const sideBar = document.querySelector(".sidebar")
        const content = document.querySelector("#content")
        const createBtn = document.querySelector(".createBtn")
        
        return {header, sideBar, content, createBtn}
    })()
    

    const MainHeader = (function() {
        const createLogo = (function() {
            createElements.logo.textContent = "Lyu Todo List"
            getElement.header.appendChild(createElements.logo)
        })()
    })()

    const createProjectBtn = (function() {
        createElements.projectBtn.textContent = "+"
        getElement.sideBar.appendChild(createElements.projectBtn)
    })()

    const sideBar = (function() {
        const Storage = (function() {
            getElement.sideBar.appendChild(createElements.projectContainer)
        })()

        const formMaker = (function() {
            createElements.submitBtn.textContent = "Submit"
            createElements.nameInput.setAttribute("id", "name")
            createElements.name.setAttribute("for", "name")
            createElements.name.textContent = "Name: "
            getElement.content.appendChild(createElements.dialog)
            createElements.dialog.appendChild(createElements.mainFormContainer)
            createElements.mainFormContainer.appendChild(createElements.formHeader)
            createElements.mainFormContainer.appendChild(createElements.formWrapper)
            createElements.mainFormContainer.appendChild(createElements.formDisplay)
            createElements.formWrapper.appendChild(createElements.taskFormText)
            createElements.formWrapper.appendChild(createElements.projectFormText)

            function addProjectForm() {
                createElements.formDisplay.appendChild(createElements.projectForm)
                createElements.projectForm.appendChild(createElements.name)
                createElements.projectForm.appendChild(createElements.nameInput)
                createElements.projectForm.appendChild(createElements.submitBtn)
            }

            function AddProjectToContainer(name, dataValue) {
                const pro = document.createElement("div")
                pro.textContent = `${name}`
                pro.setAttribute("data-key", `${dataValue}`)       
                createElements.projectContainer.appendChild(pro)
            }

            addProjectForm()

            
            function addTaskForm() {
                createElements.formDisplay.appendChild(createElements.taskForm)

            }

            document.querySelector(".createBtn").addEventListener("click", () => {
                createElements.dialog.showModal()
            })
            return {AddProjectToContainer}
            
        })()


        const takeInfoFromInputs = (function() {
            createElements.submitBtn.addEventListener("click", (e) => {
                e.preventDefault()
                sendInfoToLocal(createElements.nameInput.value)
                createElements.dialog.close()
            })
        })()

        function sendInfoToLocal(info) {
            project.initializeProject(info)
            project.updateLocalStorage()
            let arrayOfLocalStorage = JSON.parse(localStorage.arrayStorage)
            
            sideBar.AddProjectToContainer(info, arrayOfLocalStorage.length - 1)
        } 

        const addDefaultProject = (function() {
            let array = JSON.parse(localStorage.arrayStorage)
            let defaultProject = array[0][0]
            getElement.sideBar.appendChild(createElements.defaultContainer)
            createElements.defaultContainer.appendChild(createElements.defaultPro)
            createElements.defaultPro.textContent = `${defaultProject}`
            return {defaultProject}
        })()

        const displayProject = (function() {
            createElements.taskContainer.appendChild(createElements.title)
            createElements.taskContainer.appendChild(createElements.taskDisplay)
            createElements.title.textContent = `${addDefaultProject.defaultProject}`
            createElements.taskContainer.classList.add("taskContainer")
            getElement.content.appendChild(createElements.taskContainer)
        })()

        const taskUi = function (){
            const taskInfoContainer = document.createElement("div")
            const checkBox = document.createElement("input")
            const taskTitle = document.createElement("div")
            const detailsBtn = document.createElement("button")
            const date = document.createElement("div")
            const editBtn = document.createElement("button")
            const deleteBtn = document.createElement("div")
            const boxTitleWrapper = document.createElement("div")
            const detailsToDeleteWrapper = document.createElement("div")

            // classes
            taskInfoContainer.classList.add("taskInfoContainer")
            taskTitle.classList.add("taskTitle")
            detailsBtn.classList.add("detailsBtn")
            date.classList.add("date")
            editBtn.classList.add("editBtn")
            deleteBtn.classList.add("deleteBtn")
            boxTitleWrapper.classList.add("boxTitleWrapper")
            detailsToDeleteWrapper.classList.add("detailsToDeleteWrapper")


            //attributes
            checkBox.setAttribute("type", "checkbox") 
            
            taskTitle.textContent = "drink one cup of coffee"
            detailsBtn.textContent = "Details"
            date.textContent = "May 29th"
            editBtn.textContent = "Edit"
            deleteBtn.textContent = "Delete"

            createElements.taskDisplay.appendChild(taskInfoContainer)
            taskInfoContainer.appendChild(boxTitleWrapper)
            taskInfoContainer.appendChild(detailsToDeleteWrapper)
            boxTitleWrapper.appendChild(checkBox)
            boxTitleWrapper.appendChild(taskTitle)
            detailsToDeleteWrapper.appendChild(detailsBtn)
            detailsToDeleteWrapper.appendChild(date)
            detailsToDeleteWrapper.appendChild(editBtn)
            detailsToDeleteWrapper.appendChild(deleteBtn)
        }
        taskUi()
    })()
})()


export {generateElement}
