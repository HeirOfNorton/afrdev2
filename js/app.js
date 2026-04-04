// import * as m from "./mithril.min.js";

//import WorkComponent from "./WorkComponent.js"

const ResumeModel = {
    basics: {
        name: "Test Name",
    }
}

const WorkComponent = {
    view: function(vnode) {
        return m("h1", "Name Alpha")
    }
}

const MainView = {
    view: function(vnode) {
        return m(".container", [WorkComponent] )
    }
};

m.mount(document.body, MainView);
