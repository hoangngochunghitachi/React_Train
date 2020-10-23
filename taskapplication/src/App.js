import React, { Component } from 'react';
import './App.css';
import TaskControl from './components/TaskControl';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

export default class TaskSearchControl extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tasks: []
    }
  }

  onGenerateData = () => {
    const tasks = [
      {
        id: this.generateID(),
        name: "Java",
        status: true
      },
      {
        id: this.generateID(),
        name: "DotNet",
        status: true
      },
      {
        id: this.generateID(),
        name: "Golang",
        status: false
      }
    ];
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
    // console.log(this.state)
  }

  s4() {
    return Math.floor((1 + Math.random()) * 0X10000).toString(16).substring(1);
  }
  generateID() {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4();
  }

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>Management Task Application</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {/* Task Form */}
            <TaskForm />
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" className="btn btn-primary">
              <span className="fa fa-plus mr-5"></span>Add New Job
                  </button>
            <button type="button" className="btn btn-danger ml-5" onClick={this.onGenerateData}>
              <span className="fa fa-plus mr-5"></span>generate data
                  </button>
            {/* Task Control  */}
            <TaskControl />
            {/* Task List  */}
            <TaskList />
          </div>
        </div>
      </div >
    );
  }
}
