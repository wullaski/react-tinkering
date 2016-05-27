import React from 'react';
import ReactDOM from 'react-dom';

class ProjectSelect extends React.Component {
  render() {
    return (
      <div>
        <label for="project">Project*</label>
        <select className="form-control">
          <option value="1">Project 1</option>
          <option value="2">Project 2</option>
          <option value="3">Project 3</option>
          <option value="4">Project 4</option>
        </select>
      </div>
    );
  }
}

class TaskList extends React.Component {
  render() {
    return (
      <div>
        <ProjectSelect />
      </div>
    )
  }
}



ReactDOM.render(
  <TaskList />,
  document.getElementById('task_list')
);



