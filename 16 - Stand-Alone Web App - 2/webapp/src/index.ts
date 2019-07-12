//import { LocalDataSource } from "./data/localDataSource";
import { RemoteDataSource } from "./data/remoteDataSource";
import { HtmlDisplay } from "./htmlDisplay";
import "bootstrap/dist/css/bootstrap.css";

let ds = new RemoteDataSource();

function displayData(): Promise<HTMLElement> {
    let display = new HtmlDisplay();
    display.props = {
        dataSource: ds
    }
    return display.getContent();
}

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        displayData().then(elem => {
            let rootElement = document.getElementById("app");
            rootElement.innerHTML = "";
            rootElement.appendChild(elem);            
        });
    }
};
