import React, { Component } from 'react';

export default class CreateEpufID extends Component {
    constructor(props) {
        super(props);

        this.onChangeEpufID = this.onChangeEpufID.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);
        this.onChangeUpdate = this.onChangeUpdate.bind(this);
        this.onChangeAdd = this.onChangeAdd.bind(this);
        this.onChangeComments = this.onChangeComments.bind(this);
        this.onChangeAudit = this.onChangeAudit.bind(this);

        this.state = {
            epuf: [],
            epufID: '',
            startDate: '',
            endDate: '',
            update: '',
            add: '',
            comments: '',
            audit: ''
        }
    }

    componentDidMount() {
        this.setState({
            epuf: ['1337'],
            epufID: '1337'
        });
    }

    onChangeEpufID(e) {
        this.setState({
            epufID: e.target.value
        })
    }

    onChangeStartDate(e) {
        this.setState({
            startDate: e.target.value
        })
    }

    onChangeEndDate(e) {
        this.setState({
            endDate: e.target.value
        })
    }

    onChangeUpdate(e) {
        this.setState({
            update: e.target.value
        })
    }

    onChangeAdd(e) {
        this.setState({
            add: e.target.value
        })
    }
    
    onChangeComments(e) {
        this.setState({
            comments: e.target.value
        })
    }

    onChangeAudit(e) {
        this.setState({
            audit: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const epuf = {
            epufID: this.state.epufID,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            update: this.state.update,
            add: this.state.add,
            comments: this.state.comments,
            audit: this.state.audit
        }
        console.log(epuf);

        window.location = '/';
    }

    render() {
        return (
            <div>
            <h3>Create new ePUF registry</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>ePUF: </label>
                <select ref="userInput"
                    required
                    className="form-control"
                    value={this.state.epufID}
                    onChange={this.onChangeEpufID}>
                    {
                      this.state.epuf.map(function(epuf) {
                        return <option 
                          key={epuf}
                          value={epuf}>{epuf}
                          </option>;
                      })
                    }
                </select>
              </div>
              <div className="form-group"> 
                <label>Start Date: </label>
                <div>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.onChangeStartDate}
                  />
                  </div>
              </div>
              <div className="form-group"> 
                <label>End Date: </label>
                <div>
                <DatePicker
                    selected={this.state.endDate}
                    onChange={this.onChangeEndDate}
                  />
                  </div>
              </div>
              <div className="form-group"> 
                <label>Updates: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.update}
                    onChange={this.onChangeUpdate}
                    />
              </div>
              <div className="form-group"> 
                <label>Adds: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.add}
                    onChange={this.onChangeAdd}
                    />
              </div>
              <div className="form-group"> 
                <label>Comments: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.comments}
                    onChange={this.onChangeComments}
                    />
              </div>
              <div className="form-group"> 
                <label>Description: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    />
              </div>
              <div className="form-group">
                <label>Duration (in minutes): </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.duration}
                    onChange={this.onChangeDuration}
                    />
              </div>
              <div className="form-group">
                <label>Date: </label>
                <div>
                  <DatePicker
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                  />
                </div>
              </div>
      
              <div className="form-group">
                <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
    }
}