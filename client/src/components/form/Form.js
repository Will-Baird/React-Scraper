import React, { Component } from "react";
import "./Form.css"
import axios from "axios";
import Articles from "../articles/Articles.js";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
const offset = "&offset=1";
const key = "&api-key=da6363ecdab84e9f96a1e76372f4aae5";
const begin = "&begin_date=";
const end = "&end_date=";

class Form extends Component {
    state = {
        search: "",
        records: 1,
        start: 20180101,
        end: 20181020,
        results: []
    }

    handleInputChange = event => {
        const { name, value } = event.target;
    
        this.setState({
          [name]: value
        });
    };

    searchForm = event => {
        event.preventDefault();

        axios.get(BASEURL + this.state.search + offset + this.state.records + begin + this.state.start + end + this.state.end + key).then(res => { 
            let results = []
            for (let i = 0; i < this.state.records; i++) {
                
                let result = {
                    title: res.data.response.docs[i].headline.main,
                    url: res.data.response.docs[i].web_url
                }
                results.push(result);
            }
            this.setState({results: results})
            return;
        });
    }

    render() {
        return(
            <div>
                <br></br>
                <div className="card">
                    <div className="card-header">
                    <i className="fas fa-clipboard-list"></i> Search Options
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Search Term:</label>
                                <input type="text" className="form-control" name="search" onChange={this.handleInputChange} placeholder="Sports"></input>
                            </div>
                            <div className="form-group">
                                <label>Number Of Articles:</label>
                                <select className="form-control" name="records" onChange={this.handleInputChange}>
                                    <option>1</option>
                                    <option>5</option>
                                    <option>10</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Beginning Date:</label>
                                <input type="number" className="form-control" name="start" onChange={this.handleInputChange} placeholder="YYYYMMDD"></input>
                            </div>
                            <div className="form-group">
                                <label>Ending Date:</label>
                                <input type="number" className="form-control" name="end" onChange={this.handleInputChange} placeholder="YYYYMMDD"></input>
                            </div>
                            <button type="submit" className="btn btn-primary" id="submit" onClick={this.searchForm}><i className="fas fa-search"></i> Search</button>
                            <button href="/" type="submit" className="btn btn-primary" id="clear">Clear Results</button>
                        </form>
                    </div> 
                </div>
                {this.state.results.map((result, index) =>{
                    return(
                        <Articles title={result.title} url={result.url} key={index++}/>
                    )
                })}
            </div>
        );
    }
}

export default Form;