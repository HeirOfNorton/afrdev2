import ResumeModel from "./ResumeModel.js"

function Basics () {
    var model;
    loadModel = () => {
        model = structuredClone(ResumeModel.data.basics)
    }
    saveModel = () => {
        ResumeModel.data.basics = structuredClone(model)
        ResumeModel.saveToLocal()
    }
    
    return {
        view: (vnode) => m("form",
            {
                oninit: () => {Basics.loadModel()}
            },
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
                            m("select[name=state]",
                                {
                                    value: model.location.state,
                                    autocomplete: "home address-level1",
                                    required: true,
                                    oninput: e => {model.location.state = e.target.value}
                                },
                                m("option", {selected: true, disabled: true, value: ""}, "Select state/province..."),
                                m("optgroup", {label: "United States and Territories"},
                                    m("option", {value: "AK"}, "Alaska"),
                                    m("option", {value: "AL"}, "Alabama"),
                                    m("option", {value: "AR"}, "Arkansas"),
                                    m("option", {value: "AZ"}, "Arizona"),
                                    m("option", {value: "CA"}, "California"),
                                    m("option", {value: "CO"}, "Colorado"),
                                    m("option", {value: "CT"}, "Connecticut"),
                                    m("option", {value: "DC"}, "District Of Columbia"),
                                    m("option", {value: "DE"}, "Delaware"),
                                    m("option", {value: "FL"}, "Florida"),
                                    m("option", {value: "GA"}, "Georgia"),
                                    m("option", {value: "HI"}, "Hawaii"),
                                    m("option", {value: "IA"}, "Iowa"),
                                    m("option", {value: "ID"}, "Idaho"),
                                    m("option", {value: "IL"}, "Illinois"),
                                    m("option", {value: "IN"}, "Indiana"),
                                    m("option", {value: "KS"}, "Kansas"),
                                    m("option", {value: "KY"}, "Kentucky"),
                                    m("option", {value: "LA"}, "Louisiana"),
                                    m("option", {value: "MA"}, "Massachusetts"),
                                    m("option", {value: "MD"}, "Maryland"),
                                    m("option", {value: "ME"}, "Maine"),
                                    m("option", {value: "MI"}, "Michigan"),
                                    m("option", {value: "MN"}, "Minnesota"),
                                    m("option", {value: "MO"}, "Missouri"),
                                    m("option", {value: "MS"}, "Mississippi"),
                                    m("option", {value: "MT"}, "Montana"),
                                    m("option", {value: "NC"}, "North Carolina"),
                                    m("option", {value: "ND"}, "North Dakota"),
                                    m("option", {value: "NE"}, "Nebraska"),
                                    m("option", {value: "NH"}, "New Hampshire"),
                                    m("option", {value: "NJ"}, "New Jersey"),
                                    m("option", {value: "NM"}, "New Mexico"),
                                    m("option", {value: "NV"}, "Nevada"),
                                    m("option", {value: "NY"}, "New York"),
                                    m("option", {value: "OH"}, "Ohio"),
                                    m("option", {value: "OK"}, "Oklahoma"),
                                    m("option", {value: "OR"}, "Oregon"),
                                    m("option", {value: "PA"}, "Pennsylvania"),
                                    m("option", {value: "RI"}, "Rhode Island"),
                                    m("option", {value: "SC"}, "South Carolina"),
                                    m("option", {value: "SD"}, "South Dakota"),
                                    m("option", {value: "TN"}, "Tennessee"),
                                    m("option", {value: "TX"}, "Texas"),
                                    m("option", {value: "UT"}, "Utah"),
                                    m("option", {value: "VA"}, "Virginia"),
                                    m("option", {value: "VT"}, "Vermont"),
                                    m("option", {value: "WA"}, "Washington"),
                                    m("option", {value: "WI"}, "Wisconsin"),
                                    m("option", {value: "WV"}, "West Virginia"),
                                    m("option", {value: "WY"}, "Wyoming"),
                                    m("option", {value: "AS"}, "American Samoa"),
                                    m("option", {value: "GU"}, "Guam"),
                                    m("option", {value: "MP"}, "Northern Mariana Islands"),
                                    m("option", {value: "PR"}, "Puerto Rico"),
                                    m("option", {value: "UM"}, "United States Minor Outlying Islands"),
                                    m("option", {value: "VI"}, "Virgin Islands"),
                                ),
                                m("optgroup", {label: "Canada"},
                                    m("option", {value: "AB"}, "Alberta"),
                                    m("option", {value: "BC"}, "British Columbia"),
                                    m("option", {value: "MB"}, "Manitoba"),
                                    m("option", {value: "NB"}, "New Brunswick"),
                                    m("option", {value: "NL"}, "Newfoundland and Labrador"),
                                    m("option", {value: "NS"}, "Nova Scotia"),
                                    m("option", {value: "NT"}, "Northwest Territories"),
                                    m("option", {value: "NU"}, "Nunavut"),
                                    m("option", {value: "ON"}, "Ontario"),
                                    m("option", {value: "PE"}, "Prince Edward Island"),
                                    m("option", {value: "QC"}, "Quebec"),
                                    m("option", {value: "SK"}, "Saskatchewan"),
                                    m("option", {value: "YT"}, "Yukon"),
                                )

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
                                Basics.saveModel()
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


