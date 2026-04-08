
const Header = {
    view: () => m("nav.container-fluid.pico",
        m("ul",
            m("li",
                m(m.route.Link, {href: "/"}, "Home")
            )
        ),
        m("ul",
            m("li",
                m(m.route.Link, {href: "/"}, "About")
            ),
            m("li",
                m(m.route.Link, {href: "/"}, "Privacy")
            ),
            m("li",
                m(m.route.Link, {href: "/", role: "button"}, "Start Over")
            ),
        )
    )
}

const Footer = {
    view: () => m("footer.container-fluid.pico",
        "(placeholder for footer)"
    )
}

export {Header, Footer}
