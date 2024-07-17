import React from "react";
class MyComponent extends React.Component{
    state = {
        name: "chuichien",
        age: 21
    };
    render(){
        return(
            <div> Tui ten la {this.state.name}. Nam nay tui {this.state.age} </div>
        );
    }
}
export default MyComponent