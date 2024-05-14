import "./style.css"
import { project } from "./components/project"
import { task } from "./components/task"
import { generate, appendAllProjectFromLocal } from "./components/todoUI"


appendAllProjectFromLocal()

project.showLatestArray()

