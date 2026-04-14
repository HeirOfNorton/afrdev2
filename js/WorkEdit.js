import ResumeModel from "./ResumeModel.js";

const WorkEdit = {
    view: (vnode) => m(
        "dialog[open]",
        m("article",
            m("h2", "Testing, Item #" + vnode.attrs.idx),
            m("footer",
                m("button.secondary", {
                    onclick: History.back
                },
                "Cancel"),
                m("button",
                    {
                        onclick: History.back
                    },
                    "Confirm"
                )
            )
        )
    )
}

export default WorkEdit