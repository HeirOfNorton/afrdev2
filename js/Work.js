import ResumeModel from "./ResumeModel.js"

const blankWorkItem = {
    position: "",
    organization: "",
    location: "",
    startDate: "",
    endDate: "",
    highlights: []
}

const Work = {
    view: () => {
        return m("h1", "Placeholder")
    }
}

export default Work
