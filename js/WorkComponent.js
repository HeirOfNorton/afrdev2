import ResumeModel from "./ResumeModel.js"

const WorkComponent = {
    view: () => {
        return m("h1", ResumeModel.basics.name)
    }
}

export default WorkComponent
