import ResumeModel from "./ResumeModel.js"

function WorkComponent () { return ({
    view: () => {
        return m("h1", ResumeModel.basics.name)
    }
})
}

export default WorkComponent
