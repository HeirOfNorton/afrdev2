
const Header = {
    view: () => m("header",
        m("nav",
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
    )
}

const Footer = {
    view: () => m("footer",
        "(placeholder for footer)"
    )
}

export {Header, Footer}
