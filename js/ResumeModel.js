
const ResumeModel = {
    data: {
        basics: {
            name: "",
            phone: "",
            email: "",
            image: null,
            url: "",
            summary: "",
            location: {
                address: "",
                address_line2: "",
                city: "",
                state: "",
                postalCode: "",
                countryCode: ""
            }
        },
        work: [

        ],
        education: [

        ],
        skills: [

        ],
        volunteer: [

        ],
        awards: [

        ],
        certificates: [

        ],
        publications: [

        ],
        languages: [

        ],
        interests: [

        ],
        projects: [

        ],
        references: [

        ]
    },
    options: {
        type: "standard",
        template: "basic",
        last_page: "home",
        guided: null,
        basics: {
            summaryTitle: "Summary",
        },
        work: {
            sectionTitle: "Experience",
            includeHighlights: true,
            highlightsTitle: "Accomplishments"
        },
        education: {
            sectionTitle: "Education",
            includeHighlights: false,
            highlightsTitle: "Coursework"
        },
        skills: {

        },
        volunteer: {

        },
        awards: {

        },
        certificates: {

        },
        publications: {

        },
        languages: {

        },
        interests: {

        },
        projects: {

        },
        references: {

        }

    },
    saveToLocal: () => {
        window.localStorage?.setItem(
            "afr-data",
            JSON.stringify(ResumeModel.data)
        )
        window.localStorage?.setItem(
            "afr-options",
            JSON.stringify(ResumeModel.options)
        )
    },
    loadFromLocal: () => {
        const newdata = window.localStorage.getItem("afr-data")
        if (newdata) {
            ResumeModel.data = newdata
        }
        const newopts = window.localStorage.getItem("afr-options")
        if (newopts) {
            ResumeModel.options = newopts
        }
    }
}

export default ResumeModel
