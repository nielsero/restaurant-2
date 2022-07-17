import loadPage from "./util/loadPage";
import addAllEventListeners from "./util/addAllEventListeners";

if(loadPage()) { 
    console.log("[ Page Loaded ]");
}

if(addAllEventListeners()) { 
    console.log("[ Event Listeners added ]");
}
