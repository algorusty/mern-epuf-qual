import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Epuf = props => (
    <tr>
        <td>{props.epuf.epufID}</td>
        <td>{props.epuf.startDate.substring(0,10)}</td>
        <td>{props.epuf.endDate.substring(0,10)}</td>
        <td>{props.epuf.update}</td>
        <td>{props.epuf.add}</td>
        <td>{props.epuf.comments}</td>
        <td>{props.epuf.audit}</td>
        <td>
            <Link to={"/edit/"}
        </td>
    </tr>
)

export default class EpufList extends Component {
    constructor(props) {
        super(props);

        this.deleteEpuf = this.deleteExercise.bind(this);

        this.state = {epuf: []};
    }
    componentDidMount() {
        axios.get('http://localhost:6000/epuf/')
        .then(response => {
            this.setState({epuf: response.data})
        })
        .catch((error) => {
            console.log(error);
        })
    }

    deleteEpuf(id) {
        axios.delete('http://localhost:6000/epuf/' + id)
        .then(res => console.log(res.data));
        this.setState({
            epuf: this.state.epuf.filter(el => el._id !== id)
        })
    }
    epufList() {
        return this.state.epuf.map(currentepuf => {
            return <Epuf epuf={currentepuf} deleteEpuf={this.deleteEpuf} key={currentepuf._id}/>;
        })
    }



    render() {
        return (
            <div>
            <h3>ePUFs</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                </tr>
              </thead>
              <tbody>
                { this.epufList() }
              </tbody>
            </table>
          </div>
        )
    }
}