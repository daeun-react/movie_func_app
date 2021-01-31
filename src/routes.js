import Movie from "views/Movie.js";
import TV from "views/TV.js";
import Search from "views/Search.js";
import Likes from "views/Likes.js";
import Detail from "views/Detail";

const Routes = [
  {
    path: "/movie",
    name: "Movie",
    icon: "nc-icon nc-chart-pie-35",
    show: true,
    component: Movie,
  },
  {
    path: "/tv",
    name: "TV",
    icon: "nc-icon nc-circle-09",
    show: true,
    component: TV,
  },
  {
    path: "/search",
    name: "Search",
    icon: "nc-icon nc-notes",
    show: true,
    component: Search,
  },
  {
    path: "/likes",
    name: "Likes",
    icon: "nc-icon nc-paper-2",
    show: true,
    component: Likes,
  },
  {
    path: "/detail",
    name: "Detail",
    icon: "nc-icon nc-paper-2",
    show: false,
    component: Detail,
  },
];

export default Routes;
