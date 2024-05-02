import { project } from "./project";
import { task } from "./task";

const generateElement = (function() {
    const getElement = (function() {
        const header = document.querySelector("header")
        const sideBar = document.querySelector(".sidebar")
        return {header, sideBar}
    })()
    

    const createElement = (function() {
        const createProjectBtn = document.createElement("button")
        createProjectBtn.textContent = "+"
        createProjectBtn.classList.add("createBtn")
        getElement.sideBar.appendChild(createProjectBtn)
    })()

    const MainHeader = (function() {
        const createLogo = (function() {
            const logo = document.createElement("div")
            logo.classList.add("logo");
            logo.textContent = "Lyu Todo List"
            getElement.header.appendChild(logo)
        })()
    })()

    const sideBar = (function() {
        const project = (function() {
            
            const Storage = (function() {
                const projectContainer = document.createElement("div")
                projectContainer.classList.add("projectContainer")
                getElement.sideBar.appendChild(projectContainer)
                return {projectContainer}
            })()

            const addProject = (function() {
                const content = document.querySelector("#content")
                const dialog = document.createElement("dialog")
                const form = document.createElement("form")
                const name = document.createElement("label")
                const nameInput = document.createElement("input")
                const submitBtn = document.createElement("button")
                submitBtn.textContent = "Submit"
                submitBtn.classList.add("submitBtn")
                nameInput.setAttribute("id", "name")
                name.setAttribute("for", "name")
                name.textContent = "Name: "
                content.appendChild(dialog)
                dialog.appendChild(form)
                form.appendChild(name)
                form.appendChild(nameInput)
                form.appendChild(submitBtn)

                const projectContainer = document.querySelector(".projectContainer")
                function ExProject(name) {       
                    const pro = document.createElement("div")
                    pro.textContent = `${name}`       
                    projectContainer.appendChild(pro)

                }

                document.querySelector(".createBtn").addEventListener("click", () => {
                    dialog.showModal()
                }) 

                submitBtn.addEventListener("click", (e) => {
                    e.preventDefault()
                    
                    if(nameInput.value !== '') {
                        ExProject(nameInput.value)
                        nameInput.value = ""
                        dialog.close()
                    }
                    else {
                        console.log("Enter something in words")
                    }
                })
                
            })()

            const addDefaultProject = (function() {
                let array = JSON.parse(localStorage.arrayStorage)
                let defaultProject = array[0][0]
                const defaultContainer = document.createElement("div")
                const defaultPro = document.createElement("div")
                defaultContainer.classList.add("defaultContianer")
                defaultPro.classList.add("defaultProject")
                getElement.sideBar.appendChild(defaultContainer)
                defaultContainer.appendChild(defaultPro)
                defaultPro.textContent = `${defaultProject}`
                
            })() 

        })()
        
    })()

})()


export {generateElement}