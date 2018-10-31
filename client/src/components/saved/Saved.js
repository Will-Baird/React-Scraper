import React, { Component } from "react";
import "./Saved.css";
import axios from "axios";

class Saved extends Component {
    state = {
        results:[]
    }

    componentDidMount = () => {
        axios.get("/api/saved").then(res => {
            this.setState({results:res.data});
            return;
        });
    }

    remove = (id) => {
        console.log(id);
        axios.get("/api/saved/" + id).then(res => {
            console.log(res);
            return;
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <hr></hr>
                <div className="card">
                    <div className="card-header">
                        <i className="fas fa-check"></i> Saved Articles
                </div>
                    <div className="card-body">
                        <div>
                            {this.state.results.map(function(result, index) {
                                return (<div className="main" key={index++}><hr></hr><h1 className="savedTitle">{result.title}</h1>
                                    <a href={result.url} target="_blank">Check More!</a>
                                    <button className="remove" onClick={() => axios.get("/api/saved/" + result._id).then(res => {
                                                                                console.log(res);
                                                                                window.location.reload();
                                                                        })
                            }><i className="fas fa-times"></i> Remove</button>
                                    <hr></hr>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <br></br>
            </div>
        );
    }
}   

export default Saved;