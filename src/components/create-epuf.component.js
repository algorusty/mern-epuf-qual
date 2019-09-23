import React, { Component } from 'react';
import axios from 'axios';

export default class CreateEpuf extends Component {
    constructor(props) {
        super(props);

        this.onChangeEpufID = this.onChangeEpufID.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            epufID: 0,
        };
    }
    onChangeEpufID(e) {
        this.setState({
            epufID: e.target.value
        });
    }
    
    onSubmit(e) {
        e.preventDefault();

        const epuf = {
            epufID: this.state.epufID,
        };

        console.log(epuf);

        axios.post('http://localhost:6000/epuf/add', epuf)
        .then(res => console.log(res.data));

        this.setState({
            epufID: ''
        });
    }

    render() {
        return (
            <div>
                <h3>REDUNDANT Create new ePUF REDUNDANT</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>ePUF: </label>
                        <input type="number" 
                            required
                            className="form-control"
                            value={this.state.epufID}
                            onChange={this.onChangeEpufID}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" 
                            value="Create Epuf" 
                            className="btn btn-primary" 
                        />
                    </div>
                </form>
            </div>
        )
    }
}