import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => {
    return(
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4"><i className="fas fa-newspaper"></i> New York Times Search</h1>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;