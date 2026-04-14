import ResumeModel from "./ResumeModel.js";

const section_order = {
    standard: [
        "basics",
        "summary",
        "work",
        "education",
        "skills",
        "projects",
        "awards",
        "languages",
        "interests",
        "photo",
        "references"
    ]
}

function Sections () {
    var rtype
    return {
        view: vnode => m("article",
            m("table",
                section_order.standard.map(function(sect) {
                    return m("tr",
                        m("td.wide", "Description per line: " + sect),
                        m("td", m(
                            m.route.Link, {href: "/"+sect, role: "button"}, sect
                        ))
                    )
                })
            )
        )
    }
}

export default Sections
