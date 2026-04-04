// import * as m from "./mithril.min.js";

//import WorkComponent from "./WorkComponent.js"



const ResumeModel = {
    basics: {
        name: "Test Name",
    }
}

const WorkComponent = {
    view: () => {
        return m("h1", ResumeModel.basics.name)
    }
}

const MainView = {
    view: () => m(".container", [WorkComponent] )
};

m.mount(document.body, MainView);
