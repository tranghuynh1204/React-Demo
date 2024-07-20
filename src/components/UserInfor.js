import React from "react";
class UserInfor extends React.Component{
    state = {
        name: "chuichien",
        age: 21
    };
    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })

    }
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })

    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    render(){
        return(
            <div> 
            Tui ten la {this.state.name}. Nam nay tui {this.state.age}

            <form onSubmit={(event => this.handleOnSubmit(event))}>
                <label>Your name: </label>
                <input 
                value = {this.state.name}
                type = "text" 
                onChange={(event) => this.handleOnChangeInput(event)}
                />
                <label>Your age: </label>
                <input
                    value = {this.state.age}
                    type = "text"
                    onChange={(event)=>this.handleOnChangeAge(event)}
                />
                <button>Summit</button>
            </form>
            </div>
        )
    }
}
export default UserInfor