import ResumeModel from "./ResumeModel.js";

const WorkEdit = {
    view: (vnode) => m(
        "dialog[open]",
        m("article",
            m("h2", "Testing, Item #" + m.route.param("idx")),
            m("footer",
                m("button.secondary", {
                    onclick: () => {history.back()}
                },
                "Cancel"),
                m("button",
                    {
                        onclick: () => {history.back()}
                    },
                    "Confirm"
                )
            )
        )
    )
}

export default WorkEdit