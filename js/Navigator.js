import ResumeModel from "./ResumeModel"



const NavigatorData = {
    getNext: () => {

    },
    getLast: () => {

    },
    getSkip: () => {

    },
    getPageOrderList: () => {

    },
    setSkip: (page) => {

    },
}

function Navigator () {
    var skip, next, prev

    return {
        oninit: (vnode) => {
            const node = m.route.get()
            const rstyle = ResumeModel.options.type
            next = NavigatorData[rstyle][node]["next"]
            prev = NavigatorData[rstyle][node]["prev"]
            skip = NavigatorData[rstyle][node]["skip"]
        },
        view: (vnode) => {
            return m(".navigator",
                vnode.children
            )
        }
    }
}

export default Navigator
