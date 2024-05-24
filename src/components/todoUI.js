import { project } from "./project.js";
import { task } from "./task.js";

// here the elements are generated
const generate = (function () {
  const element = (function () {
    const projectBtn = document.createElement("button");
    const logo = document.createElement("div");
    const projectContainer = document.createElement("div");
    const dialog = document.createElement("dialog");
    const projectInputLabel = document.createElement("label");
    const nameInput = document.createElement("input");
    const submitBtn = document.createElement("button");
    const defaultContainer = document.createElement("div");
    const defaultPro = document.createElement("div");
    const title = document.createElement("div");
    const mainFormContainer = document.createElement("div");
    const formHeader = document.createElement("div");
    const formWrapper = document.createElement("div");
    const formDisplay = document.createElement("div");
    const taskFormText = document.createElement("div");
    const projectFormText = document.createElement("div");
    const projectFormContainer = document.createElement("div");
    const taskTitle = document.createElement("input");
    const taskDetails = document.createElement("input");
    const dateInput = document.createElement("input");
    const dateLabel = document.createElement("div");
    const priorityLabel = document.createElement("div");
    const priorityOptionContainer = document.createElement("div");
    const priorityLow = document.createElement("div");
    const priorityHigh = document.createElement("div");
    const priorityExtreme = document.createElement("div");
    const taskSubmitBtnContainer = document.createElement("div");
    const taskFormSUbmitBtn = document.createElement("button");

    return {
      projectBtn,
      logo,
      projectContainer,
      dialog,
      projectInputLabel,
      nameInput,
      submitBtn,
      defaultContainer,
      defaultPro,
      title,
      mainFormContainer,
      formHeader,
      taskTitle,
      dateInput,
      taskDetails,
      formWrapper,
      formDisplay,
      taskFormText,
      dateLabel,
      projectFormText,
      projectFormContainer,
      priorityLabel,
      priorityOptionContainer,
      priorityLow,
      priorityHigh,
      priorityExtreme,
      taskFormSUbmitBtn,
      taskSubmitBtnContainer,
    };
  })();

  const assignClass = (function () {
    element.projectBtn.classList.add("createBtn");
    element.logo.classList.add("logo");
    element.projectContainer.classList.add("projectContainer");
    element.submitBtn.classList.add("submitBtn");
    element.defaultContainer.classList.add("defaultContianer");
    element.title.classList.add("title");
    element.defaultPro.classList.add("defaultProject");
    element.mainFormContainer.classList.add("mainFormContainer");
    element.formHeader.classList.add("formHeader");
    element.formWrapper.classList.add("formWrapper");
    element.formDisplay.classList.add("formDisplay");
    element.taskFormText.classList.add("taskFormText");
    element.projectFormText.classList.add("projectFormText");
    element.projectFormContainer.classList.add("projectFormContainer");
    element.taskTitle.classList.add("taskTitleInput");
    element.taskDetails.classList.add("taskDetails");
    element.dateLabel.classList.add("dateLabel");
    element.priorityLabel.classList.add("priorityLabel");
    element.priorityOptionContainer.classList.add("priorityOptionContainer");
    element.priorityLow.classList.add("priorityLow");
    element.priorityHigh.classList.add("priorityHigh");
    element.priorityExtreme.classList.add("priorityExtreme");
    element.taskFormSUbmitBtn.classList.add("taskFormSubmitBtn");
    element.taskSubmitBtnContainer.classList.add("taskSubmitBtnContainer");
  })();

  const addText = (function () {
    element.formHeader.textContent = "Create a New...";
    element.taskFormText.textContent = "Task";
    element.projectFormText.textContent = "Project";
    element.defaultPro.textContent = "Default";
    element.dateLabel.textContent = "Due Date: ";
    element.priorityLabel.textContent = "Priority: ";
    element.priorityLow.textContent = "Low";
    element.priorityHigh.textContent = "High";
    element.priorityExtreme.textContent = "Extreme";
    element.taskFormSUbmitBtn.textContent = "Create";
  })();

  return { element };
})();

const getElement = (function () {
  const header = document.querySelector("header");
  const sideBar = document.querySelector(".sidebar");
  const content = document.querySelector("#content");
  const createBtn = document.querySelector(".createBtn");

  return { header, sideBar, content, createBtn };
})();

const header = (function () {
  const createLogo = (function () {
    generate.element.logo.textContent = "Lyu Todo List";
    getElement.header.appendChild(generate.element.logo);
  })();
})();

const sideBarUi = (function () {
  const addBtn = (function () {
    generate.element.projectBtn.textContent = "+";
    getElement.sideBar.appendChild(generate.element.projectBtn);
  })();

  const projectStorage = (function () {
    getElement.sideBar.appendChild(generate.element.projectContainer);
  })();

  const formMaker = (function () {
    generate.element.submitBtn.textContent = "Submit";
    generate.element.nameInput.setAttribute("id", "projectInputLabel");
    generate.element.projectInputLabel.setAttribute("for", "projectInputLabel");
    generate.element.projectInputLabel.textContent = "Name: ";
    getElement.content.appendChild(generate.element.dialog);
    generate.element.dialog.appendChild(generate.element.mainFormContainer);
    generate.element.mainFormContainer.appendChild(generate.element.formHeader);
    generate.element.mainFormContainer.appendChild(
      generate.element.formWrapper
    );
    generate.element.mainFormContainer.appendChild(
      generate.element.formDisplay
    );
    generate.element.formWrapper.appendChild(generate.element.taskFormText);
    generate.element.formWrapper.appendChild(generate.element.projectFormText);
  })();

  function addProjectForm() {
    const projectForm = document.createElement("form");
    projectForm.classList.add("projectForm");

    generate.element.formDisplay.appendChild(projectForm);
    projectForm.appendChild(generate.element.projectInputLabel);
    projectForm.appendChild(generate.element.nameInput);
    projectForm.appendChild(generate.element.submitBtn);
  }

  function addTaskForm() {
    const taskForm = document.createElement("form");
    taskForm.classList.add("taskForm");

    generate.element.taskTitle.setAttribute("maxlength", "40");
    generate.element.dateInput.setAttribute("type", "date");
    generate.element.dateInput.setAttribute("id", "date");

    generate.element.taskTitle.setAttribute(
      "placeHolder",
      "Title: Drink Coffee"
    );
    generate.element.taskDetails.setAttribute(
      "placeHolder",
      "Details: e.g Drink coffee at 4pm."
    );

    generate.element.formDisplay.appendChild(taskForm);
    taskForm.appendChild(generate.element.taskTitle);
    taskForm.appendChild(generate.element.taskDetails);
    taskForm.appendChild(generate.element.dateLabel);
    taskForm.appendChild(generate.element.dateInput);
    taskForm.appendChild(generate.element.priorityLabel);
    taskForm.appendChild(generate.element.priorityOptionContainer);
    generate.element.priorityOptionContainer.appendChild(
      generate.element.priorityLow
    );
    generate.element.priorityOptionContainer.appendChild(
      generate.element.priorityHigh
    );
    generate.element.priorityOptionContainer.appendChild(
      generate.element.priorityExtreme
    );
    taskForm.appendChild(generate.element.taskSubmitBtnContainer);
    generate.element.taskSubmitBtnContainer.appendChild(
      generate.element.taskFormSUbmitBtn
    );
  }

  const eventListeners = (function () {
    document.querySelector(".createBtn").addEventListener("click", () => {
      generate.element.dialog.showModal();
    });

    addTaskForm();

    const switchBetweenForms = (function () {
      const formDisplay = document.querySelector(".formDisplay");

      function QueryElement(element) {
        return document.querySelector(`${element}`);
      }

      generate.element.taskFormText.addEventListener("click", () => {
        if (QueryElement(".projectForm") !== null) {
          const projectForm = document.querySelector(".projectForm");
          formDisplay.removeChild(projectForm);
          addTaskForm();
        }
      });

      generate.element.projectFormText.addEventListener("click", () => {
        if (QueryElement(".taskForm") !== null) {
          const taskForm = document.querySelector(".taskForm");
          formDisplay.removeChild(taskForm);
          addProjectForm();
        }
      });
    })();
  })();
})();

const displayProjectContents = (function () {
  const appendProjectUi = (function () {
    function makeAndAppendProjectUI() {
      let arrayStore = JSON.parse(localStorage.arrayStorage);
      const projectUI = document.createElement("div");
      projectUI.textContent = `${arrayStore[arrayStore.length - 1][0]}`;
      projectUI.setAttribute("data-key", `${arrayStore.length - 1}`);
      projectUI.setAttribute("onclick", "sendProjectIndex()");
      projectUI.classList.add("allProject");
      generate.element.projectContainer.appendChild(projectUI);
    }

    const appendProjectToLocal = (function () {
      generate.element.submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (generate.element.nameInput.value !== "") {
          project.initializeProject(`${generate.element.nameInput.value}`);
          makeAndAppendProjectUI();
          // here it should be "projectInput" rather then then "projectInputLabel" as this is a input field, change it
          document.querySelector("#projectInputLabel").value = ""
        }
        generate.element.dialog.close();
      });
    })();
  })();
})();

function appendAllProjectFromLocal() {
  function makeAllProjectUi(projectName, index) {
    const projectContainer = document.querySelector(".projectContainer");
    const projectUI = document.createElement("div");

    if (projectName === "#Home" || index === 0) {
      projectUI.textContent = `${projectName}`;
      projectUI.setAttribute("data-key", `${index}`);
      projectUI.classList.add("defaultProject");
      projectUI.classList.add("allProject");
      projectUI.setAttribute("onclick", "sendProjectIndex()");
      projectContainer.appendChild(projectUI);
    } else {
      projectUI.textContent = `${projectName}`;
      projectUI.setAttribute("data-key", `${index}`);
      projectUI.classList.add("allProject");
      projectUI.setAttribute("onclick", "sendProjectIndex()");
      projectContainer.appendChild(projectUI);
    }
  }

  const makeAllProjectAppear = (function () {
    const arrayStorage = JSON.parse(localStorage.arrayStorage);

    for (let i = 0; i < arrayStorage.length; i++) {
      makeAllProjectUi(arrayStorage[i][0], i);
    }
  })();
}

const showHomeProjectContent = (function () {
  const content = document.querySelector("#content");
  const projectName = document.createElement("div");
  const taskDisplay = document.createElement("div");
  const taskContainer = document.createElement("div");

  taskDisplay.classList.add("taskDisplay");
  projectName.classList.add("projectName");
  taskContainer.classList.add("taskContainer");
  projectName.textContent = "#Home";
  projectName.setAttribute("data-key", "0");

  content.appendChild(taskDisplay);
  taskDisplay.appendChild(projectName);
  taskDisplay.appendChild(taskContainer);
})();

generate.element.taskFormSUbmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let arrayStorage = JSON.parse(localStorage.arrayStorage);
  const taskTitle = generate.element.taskTitle;
  const dateInput = generate.element.dateInput;
  const currentProject = document.querySelector(".projectName");
  let index = 0;

  if (currentProject.dataset.key !== "0") {
    index = currentProject.dataset.key;
  }

  if (taskTitle.value !== "" && dateInput.value !== "") {
    let projectIndex = currentProject.dataset.key;
    task.sendTask(
      taskTitle.value,
      dateInput.value,
      arrayStorage[Number(projectIndex)].length,
      index
    );
    taskUI(
      taskTitle.value,
      dateInput.value,
      projectIndex,
      arrayStorage[Number(projectIndex)].length
    );
    generate.element.dialog.close();
  }
  taskTitle.value = ""
  dateInput.value = ""
});

function taskUI(title, date, projectIndex, taskIndex) {
  // elements are created here...
  const taskContainer = document.querySelector(".taskContainer");
  const taskInfoContainer = document.createElement("div");
  const checkBoxAndTitleWrapper = document.createElement("div");
  const detailsToDeleteWrapper = document.createElement("div");
  const checkBox = document.createElement("input");
  const taskTitle = document.createElement("div");
  const taskDetails = document.createElement("button");
  const taskDate = document.createElement("div");
  const taskEdit = document.createElement("button");
  const taskDelete = document.createElement("div");

  // classes are assigned here...
  taskInfoContainer.classList.add("taskInfoContainer");
  checkBoxAndTitleWrapper.classList.add("checkBoxTitleWrapper");
  detailsToDeleteWrapper.classList.add("detailsToDeleteWrapper");
  checkBox.classList.add("taskCheckBox");
  taskTitle.classList.add("taskTitle");
  taskDetails.classList.add("taskDetails");
  taskDate.classList.add("taskDate");
  taskEdit.classList.add("taskEdit");
  taskDelete.classList.add("taskDelete");

  checkBox.setAttribute("type", "checkbox");
  taskEdit.setAttribute("data-project", `${projectIndex}`)
  taskEdit.setAttribute("data-task", `${taskIndex}`)
  taskTitle.textContent = `${title}`;
  taskDetails.textContent = "Details";
  taskDate.textContent = `${date}`;
  taskEdit.textContent = "Edit";
  taskEdit.setAttribute("onclick", "showTaskEditPanel()")
  taskDelete.textContent = "Delete";

  // elements are appended here...
  taskContainer.appendChild(taskInfoContainer);
  taskInfoContainer.appendChild(checkBoxAndTitleWrapper);
  taskInfoContainer.appendChild(detailsToDeleteWrapper);
  checkBoxAndTitleWrapper.appendChild(checkBox);
  checkBoxAndTitleWrapper.appendChild(taskTitle);
  detailsToDeleteWrapper.appendChild(taskDetails);
  detailsToDeleteWrapper.appendChild(taskDate);
  detailsToDeleteWrapper.appendChild(taskEdit);
  detailsToDeleteWrapper.appendChild(taskDelete);
}

const ShowAllTasks = function () {
  const arrayStorage = JSON.parse(localStorage.arrayStorage);

  for (let i = 1; i < arrayStorage[0].length; i++) {
    let titleStore = arrayStorage[0][i].title;
    let dateStore = arrayStorage[0][i].date;
    let index = arrayStorage[0][i].index;
    taskUI(titleStore, dateStore, 0, index);
  }
};


ShowAllTasks();



export { generate, appendAllProjectFromLocal };
