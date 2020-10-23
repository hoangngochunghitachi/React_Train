
import React, { Component } from "react";
import TaskItem from "./TaskItem";

export default class TaskList extends Component {

    render() {
        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover mt-15">
                        <thead>
                            <tr>
                                <th className="text-center">Index</th>
                                <th className="text-center">Name</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="text" className="form-control" />
                                </td>
                                <td>
                                    <select className="form-control">
                                        <option value="-1">All</option>
                                        <option value="0">Hide</option>
                                        <option value="1">Active</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            {/* Task Item  */}
                            <TaskItem />
                            <TaskItem />
                            <TaskItem />
                            <TaskItem />
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}