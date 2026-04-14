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
                    ),
                    m("label",
                        "Company / Organization",
                        m("input[type=text][name=organization]",
                            {
                                value: itemModel.organization,
                                required: true,
                                oninput: e => {itemModel.organization = e.target.value}
                            }
                        )
                    ),
                    m("label",
                        "Location",
                        m("input[type=text][name=location]",
                            {
                                value: itemModel.location,
                                required: true,
                                oninput: e => {itemModel.location = e.target.value}
                            }
                        )
                    ),
                    m(".grid",
                        m("label",
                            "Start Date",
                            m("input[type=date][name=startDate]",
                                {
                                    value: itemModel.startDate,
                                    oninput: e => {itemModel.startDate = e.target.value}
                                }
                            )
                        ),
                        m("label",
                            m("input[type=checkbox][name=current]",
                                {
                                    checked: itemModel.endDate == "current",
                                    onchange: e => {
                                        itemModel.endDate = e.target.checked ? "current" : ""
                                    }
                                }
                            ),
                            "I still work here"
                        ),
                        m("label",
                            "End Date",
                            m("input[type=date][name=endDate]",
                                {
                                    value: itemModel.endDate == "current" ? "" : itemModel.endDate,
                                    disabled: itemModel.endDate == "current",
                                    oninput: e => {itemModel.endDate = e.target.value}
                                }
                            )
                        )
                    ),
                    "Highlights will go here"
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
                        "Save"
                    )
                )
            )
        )
    }
}
export default WorkEdit