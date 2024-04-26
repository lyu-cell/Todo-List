import "./style.css"
import { project } from "./components/project"
import { task } from "./components/task"

project.initializeProject("daily")
task.sendTask("drink coffee", "daily drink coffee and 22pm", "high", "complete")
project.showLatestArray()