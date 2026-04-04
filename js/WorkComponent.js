import ResumeModel from "./ResumeModel.js"

export default function WorkComponent () { return ({
    view: () => {
        return m("h1", ResumeModel.basics.name)
    }
})
}
