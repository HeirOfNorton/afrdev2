// import * as m from "./mithril.min.js";

import Basics from "./Basics.js"
import Work from "./Work.js"
import WorkEdit from ".WorkEdit.js"
import Education from "./Education.js"
import Skills from "./Skills.js"
import Projects from "./Projects.js"
import Awards from "./Awards.js"
import Interests from "./Interests.js"
import Languages from "./Languages.js"
import Photo from "./Photo.js"
import Volunteer from "./Volunteer.js"
import References from "./References.js"
import Sections from "./Sections.js"
import Guide from "./Guide.js"
import {Header, Footer} from "./HeadFoot.js"

// Temporary navigation while developing each page in isolation
const MainView = {
    view: (vnode) => {
        return m("aside.container.pico",
            m("nav", 
                m("ul",
                    m("li", m(m.route.Link, {href: "/"}, "Home")),
                    m("li", m(m.route.Link, {href: "/guide"}, "Guided Start")),
                    m("li", m(m.route.Link, {href: "/sections"}, "List of Sections")),
                    m("li", m(m.route.Link, {href: "/basics"}, "Basic Information")),
                    m("li", m(m.route.Link, {href: "/work"}, "Work Experience")),
                    m("li", m(m.route.Link, {href: "/education"}, "Education")),
                    m("li", m(m.route.Link, {href: "/skills"}, "Skills")),
                    m("li", m(m.route.Link, {href: "/projects"}, "Projects")),
                    m("li", m(m.route.Link, {href: "/awards"}, "Awards")),
                    m("li", m(m.route.Link, {href: "/interests"}, "Interests")),
                    m("li", m(m.route.Link, {href: "/languages"}, "Languages")),
                    m("li", m(m.route.Link, {href: "/photo"}, "Photograph")),
                    m("li", m(m.route.Link, {href: "/volunteer"}, "Volunteer Experience")),
                    m("li", m(m.route.Link, {href: "/references"}, "References"))
                )
            ),
        )
    }
}

const Layout = {
    view: (vnode) => {
        return m("div.container-fluid.pico.flexy", [
            m(Header),
            m("main.container.pico", vnode.children),
            m(Footer)
        ]
        )
    }
}

m.route(document.body, "/", {
    "/": {
        render: () => m(Layout, m(MainView))
    },
    "/sections": {
        render: () => m(Layout, m(Sections))
    },
    "/guide": {
        render: () => m(Layout, m(Guide))
    },
    "/basics": {
        render: () => m(Layout, m(Basics))
    },
    "/work": {
        render: () => m(Layout, m(Work))
    },
    "/work/edit/:idx": {
        render: () => m(Layout, m(Work), m(WorkEdit))
    },
    "/education": {
        render: () => m(Layout, m(Education))
    },
    "/skills": {
        render: () => m(Layout, m(Skills))
    },
    "/projects": {
        render: () => m(Layout, m(Projects))
    },
    "/awards": {
        render: () => m(Layout, m(Awards))
    },
    "/interests": {
        render: () => m(Layout, m(Interests))
    },
    "/photo": {
        render: () => m(Layout, m(Photo))
    },
    "/languages": {
        render: () => m(Layout, m(Languages))
    },
    "/volunteer": {
        render: () => m(Layout, m(Volunteer))
    },
    "/references": {
        render: () => m(Layout, m(References))
    },
})
