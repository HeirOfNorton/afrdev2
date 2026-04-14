import ResumeModel from "./ResumeModel.js"
import Navigator from "./Navigator.js"

const Work = {
    view: (vnode) => m("section",
        m("h1", "Work Experience"),
        m("table",
            ResumeModel.data.work.map((item, index) => m("tr",
                m("td.wide",
                    m("h3", item.position),
                    m("h2", item.organization),
                    m("p",
                        new Date(item.startDate).toLocaleDateString(undefined, {month:"long", year:"numeric"}),
                        " &ndash; ",
                        item.endDate == "current" ? "current" : 
                            new Date(item.endDate).toLocaleDateString(undefined, {month:"long", year:"numeric"})
                    )
                ),
                m("td", m(m.route.Link,
                    {
                        href: "/work/edit/" + index,
                        role: "button"
                    },
                    "Edit"
                ))
            )),
            m("tr",
                m("td"),
                m("td", m(m.route.Link,
                    {
                        href: "/work/edit/" + ResumeModel.data.work.length,
                        role: "button",
                        class: "outline"
                    },
                    "Add"))
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
