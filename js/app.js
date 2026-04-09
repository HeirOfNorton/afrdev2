// import * as m from "./mithril.min.js";

import Basics from "./Basics.js"
import Work from "./Work.js"
import Education from "./Education.js"
import Skills from "./Skills.js"
import Projects from "./Projects.js"
import Awards from "./Awards.js"
import Interests from "./Interests.js"
import Languages from "./Languages.js"
import Photo from "./Photo.js"
import Volunteer from "./Volunteer.js"
import References from "./References.js"
import {Header, Footer} from "./HeadFoot.js"

// Temporary navigation while developing each page in isolation
const MainView = {
    view: (vnode) => {
        return m("aside.container.pico",
            m("nav", 
                m("ul",
                    m("li", m(m.route.Link, {href: "/"}, "Home")),
                    m("li", m(m.route.Link, {href: "/basics"}, "Basic Information"))
                    m("li", m(m.route.Link, {href: "/basics"}, "Basic Information"))
                    m("li", m(m.route.Link, {href: "/basics"}, "Basic Information"))
                    m("li", m(m.route.Link, {href: "/basics"}, "Basic Information"))
                    m("li", m(m.route.Link, {href: "/basics"}, "Basic Information"))
                    m("li", m(m.route.Link, {href: "/basics"}, "Basic Information"))
                    m("li", m(m.route.Link, {href: "/basics"}, "Basic Information"))
                    m("li", m(m.route.Link, {href: "/basics"}, "Basic Information"))
                    m("li", m(m.route.Link, {href: "/basics"}, "Basic Information"))
                    m("li", m(m.route.Link, {href: "/basics"}, "Basic Information"))
                    m("li", m(m.route.Link, {href: "/basics"}, "Basic Information"))
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
    "/basics": {
        render: () => m(Layout, m(Basics))
    },
    "/basics": {
        render: () => m(Layout, m(Basics))
    },
    "/basics": {
        render: () => m(Layout, m(Basics))
    },
    "/basics": {
        render: () => m(Layout, m(Basics))
    },
    "/basics": {
        render: () => m(Layout, m(Basics))
    },
    "/basics": {
        render: () => m(Layout, m(Basics))
    },
    "/basics": {
        render: () => m(Layout, m(Basics))
    },
    "/basics": {
        render: () => m(Layout, m(Basics))
    },
    "/basics": {
        render: () => m(Layout, m(Basics))
    },
    "/basics": {
        render: () => m(Layout, m(Basics))
    },
    "/basics": {
        render: () => m(Layout, m(Basics))
    },
})
