// import * as m from "./mithril.min.js";

import WorkComponent from "./WorkComponent.js"

/*
const ResumeModel = {
    basics: {
        name: "Test Name",
    }
}

const WorkComponent = {
    view: function(vnode) {
        return m("h1", ResumeModel.basics.name)
    }
}
*/

const MainView = {
    view: function(vnode) {
        return m(WorkComponent)
    }
}

const Layout = {
    view: (vnode) => {
        return m(".container", [
            m("nav", 
                m(m.route.Link, {href="/"}, "Home"),
                m("a", "For later")
            ),
            m("main", vnode.children)
        ]
        )
    }
}

m.route(document.body, "/", {
    "/": {
        render: () => m(Layout, [m(MainView)])
    },
})
