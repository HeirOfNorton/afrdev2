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
                        m("input[type=text][name=Name]",
                            {
                                value: model.name,
                                placeholder: "Full Name",
                                oninput: e => {model.name = e.target.value}
                            }
                        )
                    ),
                    m("label",
                        "Address",
                        m("input[type=text][name=address1][placeholder=123 Anywhere Lane]",
                            {
                                value: model.location.address,
                                placeholder: "123 Anywhere Lane",
                                oninput: e => {model.location.address = e.target.value}
                            }
                        ),
                        m("input[type=text][name=address2]",
                            {
                                value: model.location.address_line2,
                                placeholder: "Apt 101",
                                oninput: e => {model.location.address_line2 = e.target.value}
                            }
                        )
                    ),
                    m(".grid",
                        m("label",
                            "City",
                            m("input[type=text][name=city]",
                                {
                                    value: model.location.city,
                                    placeholder: "City",
                                    oninput: e => {model.location.city = e.target.value}
                                }
                            )
                        ),
                        m("label",
                            "State/Province",
                            m("input[type=text][name=state]",
                                {
                                    value: model.location.state,
                                    placeholder: "State",
                                    oninput: e => {model.location.state = e.target.value}
                                }
                            )
                        ),
                        m("label",
                            "Zip/Postal Code",
                            m("input[type=text][name=zip]",
                                {
                                    value: model.location.postalCode,
                                    placeholder: "Zip",
                                    oninput: e => {model.location.postalCode = e.target.value}
                                }
                            )
                        )
                    ),
                    m(".grid",
                        m("label",
                            "Email",
                            m("input[type=email][name=email][placeholder=yourname@example.com]",
                                {
                                    value: model.email,
                                    placeholder: "yourname@example.com",
                                    oninput: e => {model.email = e.target.value}
                                }
                            )
                        ),
                        m("label",
                            "Phone Number",
                            m("input[type=tel][name=phone][placeholder=123-456-7890]",
                                {
                                    value: model.phone,
                                    placeholder: "123-456-7890",
                                    oninput: e => {model.phone = e.target.value}
                                }
                            )
                        )
                    )
                ),
                m("footer",
                    m(m.route.Link,
                    {
                        href: "/",
                        role: "button",
                        onclick: e => {
                            ResumeModel.saveToLocal()
                        }
                    }
                    )
                )
            )
        )
    }
}

export default Basics
