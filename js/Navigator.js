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
            const rstyle = ResumeModel.data.style
            next = NavigatorData[rstye][node]["next"]
            prev = NavigatorData[rstyle][node]["prev"]
            skip = NavigatorData[rstyle][node]["skip"]
        },
        view: (vnode) => {
            return m(".navigator",
                vnode.childre
            )
        }
    }
}

export default Navigator
