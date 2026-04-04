import * as m from "mithril.min.js"

const Temp = {
    view: () => {
        return m("p", "Hello World")
    }
}

m.mount(document.body, Temp)
