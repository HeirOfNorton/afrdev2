import ResumeModel from "./ResumeModel.js"
import Navigator from "./Navigator.js"

const blankWorkItem = {
    position: "",
    organization: "",
    location: "",
    startDate: "",
    endDate: "",
    highlights: []
}

const Work = {
    view: (vnode) => m("section",
        m("h1", "Work Experience"),
        m("table",
            ResumeModel.data.work.map((item, index) => m("tr",
                m("td",
                    m("h3", item.position),
                    m("h2", item.organization),
                    m("p",
                        Date.parse(item.startDate).toLocaleDateString(options={month:"long", year:"numeric"}),
                        " &ndash; ",
                        item.endDate == "current" ? "current" : 
                            Date.parse(item.endDate).toLocaleDateString(options={month:"long", year:"numeric"})
                    )
                ),
                m("td", m("button", "Edit"))
            )),
            m("tr",
                m("td"),
                m("td", m("button", "Add"))
            )
        ),
        m("footer.flexx",
            m(Navigator.BackButton, {href: Navigator.getLast()}),
            m(m.route.Link,
                {
                    href: Navigator.getNext(),
                    role: "button",
                    onclick: e => {
                        ResumeModel.saveToLocal()
                    }
                },
                "Save and Continue"
            )
        )
    )
}

export default Work
