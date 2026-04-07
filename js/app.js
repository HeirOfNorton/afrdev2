// import * as m from "./mithril.min.js";

import WorkComponent from "./WorkComponent.js"
import Basics from ".Basics.js"

// Temporary navigation while developing each page in isolation
const MainView = {
    view: (vnode) => {
        return m(".container",
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
        return m(".container", [
            m("nav", 
                m(m.route.Link, {href: "/"}, "Home"),
            ),
            m("main", vnode.children)
        ]
        )
    }
}

m.route(document.body, "/", {
    "/": {
        render: () => m(MainView)
    },
    "/basics": {
        render: () => m(Layout, [Basics])
    }
})
