// import * as m from "./mithril.min.js";

import WorkComponent from "./WorkComponent.js"
import Basics from "./Basics.js"
import {Header, Footer} from "./HeadFoot.js"

// Temporary navigation while developing each page in isolation
const MainView = {
    view: (vnode) => {
        return m("aside.container.pico",
            m("nav", 
                m("ul",
                    m("li", m(m.route.Link, {href: "/"}, "Home")),
                    m("li", m(m.route.Link, {href: "/basics"}, "Basic Information"))
                )
            ),
        )
    }
}

const Layout = {
    view: (vnode) => {
        return m("div", [
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
    }
})
