import React, {Component} from 'react';

class Login extends Component {

    state = {
        credentials: {username: '', password: ''}
    }
    login = event => {
        //console.log(this.state.credentials);
        fetch('http://localhost:8000/auth/', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.credentials)
        })
        .then(data => data.json())
        .then(
            data => {
                this.props.userLogin(data.token);
            }
        ).catch(error => console.error(error))
    }
    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
    }

    render() {

        return (
            <div >
            <h3>TASKS</h3>
            <label>
                
                <input type="text" name="username" placeholder="User"
                value={this.state.credentials.username}
                onChange={this.inputChanged}
                />
            </label>
            <br/>
            <label>
                
                <input type="password" name="password" placeholder="Password"
                value={this.state.credentials.password}
                onChange={this.inputChanged}
                />
            </label>
            <br/>
            <button onClick={this.login} className="btn btn-primary" >Login</button>
            </div>
        );

    }

}

export default Login;