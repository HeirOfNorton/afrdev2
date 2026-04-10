import ResumeModel from "./ResumeModel.js";

const Guide = {
    view: () => m(".container",
        m("p", "TODO ask about guidance."),
        m("div",
            m("button", "Guide me (not implemented yet)."),
            m(m.route.Link, {href: "/sections", role:"button"},
                "I don't need a guide."
            )
        )
    )
}

export default Guide
