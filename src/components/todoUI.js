import { project } from "./project";
import { task } from "./task";

const generateElement = (function() {
    const createElements = (function() {
        const projectBtn = document.createElement("button")
        const logo = document.createElement("div")
        const projectContainer = document.createElement("div")
        const dialog = document.createElement("dialog")
        const form = document.createElement("form")
        const name = document.createElement("label")
        const nameInput = document.createElement("input")
        const submitBtn = document.createElement("button")
        const defaultContainer = document.createElement("div")
        const defaultPro = document.createElement("div")
        const taskDisplay = document.createElement("div")
        const title = document.createElement("div")        
        const taskContainer = document.createElement("div")
                
        
        return {projectBtn, logo, projectContainer, dialog, form, name, nameInput, submitBtn, 
                defaultContainer, defaultPro, taskDisplay, title, taskContainer}
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
    })()
    
    const getElement = (function() {
        const header = document.querySelector("header")
        const sideBar = document.querySelector(".sidebar")
        const content = document.querySelector("#content")
        
        return {header, sideBar, content}
    })()
    

    const createProjectBtn = (function() {
        createElements.projectBtn.textContent = "+"
        getElement.sideBar.appendChild(createElements.projectBtn)
    })()

    const MainHeader = (function() {
        const createLogo = (function() {
            createElements.logo.textContent = "Lyu Todo List"
            getElement.header.appendChild(createElements.logo)
        })()
    })()

    const sideBar = (function() {
        const project = (function() {
            
            const Storage = (function() {
                getElement.sideBar.appendChild(createElements.projectContainer)
            })()

            const addProject = (function() {
                createElements.submitBtn.textContent = "Submit"
                createElements.nameInput.setAttribute("id", "name")
                createElements.name.setAttribute("for", "name")
                createElements.name.textContent = "Name: "
                getElement.content.appendChild(createElements.dialog)
                createElements.dialog.appendChild(createElements.form)
                createElements.form.appendChild(createElements.name)
                createElements.form.appendChild(createElements.nameInput)
                createElements.form.appendChild(createElements.submitBtn)

                function AddProjectToContainer(name) {
                    const pro = document.createElement("div")
                    pro.textContent = `${name}`       
                    createElements.projectContainer.appendChild(pro)

                }

                createElements.projectBtn.addEventListener("click", () => {
                    createElements.dialog.showModal()
                }) 

                createElements.submitBtn.addEventListener("click", (e) => {
                    e.preventDefault()
                    
                    if(createElements.nameInput.value !== '') {
                        AddProjectToContainer(createElements.nameInput.value)
                        createElements.nameInput.value = ""
                        createElements.dialog.close()
                    }
                    else {
                        alert("Enter something in words")
                    }
                })
                
            })()

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
        })()
    })()
})()


export {generateElement}