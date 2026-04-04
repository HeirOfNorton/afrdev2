// import * as m from "./mithril.min.js";

import WorkComponent from "./WorkComponent.js"

const MainView = {
    view: () => m(".container", [WorkComponent] )
};

m.mount(document.body, MainView);
