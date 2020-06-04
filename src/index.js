import "regenerator-runtime";

// Style
import "reset-css";
import "./styles/style.scss";

// Images
import "./images/loading.gif";
import "./images/moview-app-logo.png";
import "./images/how-to-train-your-dragon.jpg";

// Components
import "./script/components/Loading";
import "./script/components/Alert";
import "./script/components/MovieList";
import "./script/components/SidebarFavorite";

// Main JS
import main from "./script/ui/main.js";

document.addEventListener("DOMContentLoaded", main);
