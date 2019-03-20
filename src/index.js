import React from "react";
import ReactDOM from "react-dom";
import Screen from "./screens/index";

//class App extends React.Component {
//    render() {
//        return (
//            <Login />
//        );
//    }
//}

// <Route path="/users" component={Users} />
ReactDOM.render(<Screen />, document.querySelector("#root"));
