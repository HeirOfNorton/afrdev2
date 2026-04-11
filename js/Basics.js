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
                        m("input[type=text][name=fullname]",
                            {
                                value: model.name,
                                autocomplete: "name",
                                required: true,
                                oninput: e => {model.name = e.target.value}
                            }
                        )
                    ),
                    m("label",
                        "Address",
                        m("input[type=text][name=address1]",
                            {
                                value: model.location.address,
                                autocomplete: "home address-line1",
                                required: true,
                                oninput: e => {model.location.address = e.target.value}
                            }
                        ),
                        m("input[type=text][name=address2]",
                            {
                                value: model.location.address_line2,
                                autocomplete: "home address-line2",
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
                                    autocomplete: "home address-level2",
                                    required: true,
                                    oninput: e => {model.location.city = e.target.value}
                                }
                            )
                        ),
                        m("label",
                            "State/Province",
                            m("input[type=text][name=state]",
                                {
                                    value: model.location.state,
                                    autocomplete: "home address-level1",
                                    required: true,
                                    oninput: e => {model.location.state = e.target.value}
                                }
                            )
                        ),
                        m("label",
                            "Zip/Postal Code",
                            m("input[type=text][name=zip]",
                                {
                                    value: model.location.postalCode,
                                    autocomplete: "home postal-code",
                                    required: true,
                                    oninput: e => {model.location.postalCode = e.target.value}
                                }
                            )
                        )
                    ),
                    m(".grid",
                        m("label",
                            "Email",
                            m("input[type=email][name=email]",
                                {
                                    value: model.email,
                                    autocomplete: "home email",
                                    oninput: e => {model.email = e.target.value}
                                }
                            )
                        ),
                        m("label",
                            "Phone Number",
                            m("input[type=tel][name=phone]",
                                {
                                    value: model.phone,
                                    autocomplete: "home tel",
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
                        },
                        "Save and Continue"
                    )
                )
            )
        )
    }
}

export default Basics
