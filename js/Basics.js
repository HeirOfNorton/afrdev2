import ResumeModel from "./ResumeModel.js"

function Basics () {
    var model = ResumeModel.data.basics
    
    return {
        view: (vnode) => m("form",
            m("h1", "Basic Information"),
            m("article",
                m("fieldset",
                    m("label",
                        "Name",
                        m("input[type=text][name=Name][placeholder=Full Name]")
                    ),
                    m("label",
                        "Address",
                        m("input[type=text][name=address1][placeholder=123 Anywhere Lane]"),
                        m("input[type=text][name=address2]")
                    ),
                    m("label",
                        "Phone Number",
                        m("input[type=tel][name=phone]")
                    ),
                    m("label",
                        "Email",
                        m("input[type=email][name=email][placeholder=yourname@example.com]")
                    )
                )
            )
        )
    }
}

export default Basics
