import React, {Component} from 'react';

class Tasks extends Component {

    state = {
        tasks: []
    }

    loadBooks = () => {

        fetch('http://localhost:8000/api/tasks/', {
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${this.props.token}`
            },
            body: JSON.stringify(this.state.credentials)
        })
        .then(data => data.json())
        .then(
            data => {
                this.setState({tasks: data})
            }
        ).catch(error => console.error(error))
    }
   
    render() {

        return (
            <div >
                <h3>Tasks</h3>
                {/* this.loadBooks()  */}
                { this.state.tasks.map(task => {
                    return <h4 key={task.id}>{task.title}</h4>
                 }) }
                 <button onClick={this.loadBooks}>Load Tasks</button> 
            </div>
            
        );

  }
  
}

export default Tasks;
