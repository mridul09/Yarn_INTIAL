import React from "react";
import axios from 'axios';
import loginImp from "../../password.png";

export class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            user_name: null,
            pass: null,
        }
    }

    loginData(){
        const username = document.getElementById("username");
        const password = document.getElementById("password");
        this.setState({   
            user_name: username,
            pass: password,
        });
        
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET", // *Type of request GET, POST, PUT, DELETE
            mode: "cors", // Type of mode of the request
            cache: "no-cache", // options like default, no-cache, reload, force-cache
            credentials: "same-origin", // options like include, *same-origin, omit
            headers: {
                "Content-Type": "application/json" // request content type
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *client
            // body: JSON.stringify(data) // Attach body with the request
            }).then(response => {
            let json = response.json();
            console.log(json);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response;
            })
            .catch(error => {
            console.error(
                "There has been a problem with your fetch operation:",
                error
            );
            });
            //console.log(response.json());    
            //this.setState({ users: await response.json() });
    }

    render() {
        return <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImp} />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" placeholder="username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="text" id="password" name="password" placeholder="password"/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn" onClick={this.loginData.bind(this)} > 
                        Login
                    </button>
                </div>
            </div>
    }
}