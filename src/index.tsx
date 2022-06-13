import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { World } from "./world";

// Get a reference to the container element
const container = document.getElementById("root") as HTMLElement;

// create a new world
const world = new World(container);

// start the animiation loop
world.start();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
