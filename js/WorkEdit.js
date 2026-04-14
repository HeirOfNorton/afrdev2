import ResumeModel from "./ResumeModel.js";

function WorkEdit() { 
    var itemModel = {
        position: "",
        organization: "",
        location: "",
        startDate: "",
        endDate: "",
        highlights: []
    }

    var index = 0;

    function saveItem() {
        ResumeModel.data.work[index] = structuredClone(itemModel)
    }

    return {
        oninit: (vnode) => {
            index = parseInt(m.route.param("idx"))
            if (index < ResumeModel.data.work.length) {
                itemModel = structuredClone(ResumeModel.data.work[index])
            }
        },
        view: (vnode) => m(
            "dialog[open]",
            m("article",
                m("h2", "Testing, Item #" + m.route.param("idx")),
                m("form",
                    m("label",
                        "Job Title",
                        m("input[type=text][name=jobtitle]",
                            {
                                value: itemModel.position,
                                required: true,
                                oninput: e => {itemModel.position = e.target.value}
                            }
                        )
                    )
                ),
                m("footer",
                    m("button.secondary", {
                        onclick: () => {history.back()}
                    },
                    "Cancel"),
                    m("button",
                        {
                            onclick: () => {
                                saveItem()
                                history.back()
                            }
                        },
                        "Confirm"
                    )
                )
            )
        )
    }
}
export default WorkEdit