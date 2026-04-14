
const ResumeModel = {
    data: {
        basics: {
            name: "",
            phone: "",
            email: "",
            website: "",
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
            {
                position: "Librarian",
                organization: "HCL",
                location: "Brooklyn Center, MN",
                startDate: "2015-10-17",
                endDate: "current",
                highlights: []
            },
            {
                position: "Department Supervisor",
                organization: "J.C. Penney",
                location: "Roseville, MN",
                startDate: "2004-09-18",
                endDate: "2015-10-18",
                highlights: []
            }
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
            ResumeModel.data = JSON.parse(newdata)
        }
        const newopts = window.localStorage.getItem("afr-options")
        if (newopts) {
            ResumeModel.options = JSON.parse(newopts)
        }
    }
}

ResumeModel.loadFromLocal()

export default ResumeModel
