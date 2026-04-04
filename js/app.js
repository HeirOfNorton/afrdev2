import * as m from "/afrdev2/js/mithril.min.js"

const Temp = {
    view: () => {
        return m("p", "Hello World")
    }
}

m.mount(document.body, Temp)
