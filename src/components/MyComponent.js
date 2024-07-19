import React from "react";
class MyComponent extends React.Component{
    state = {
        name: "chuichien",
        age: 21
    };
    handleClick = (event) => {
        console.log(">> click me my button")
        this.setState({
            name: 'Trang',
            age: Math.floor((Math.random()*100) + 1)
        })
    }
    handleOnMouseOuver(event){
        console.log(event.pageX)

    }
    render(){
        return(
            <div> Tui ten la {this.state.name}. Nam nay tui {this.state.age} 
            <button onMouseOver={this.handleOnMouseOuver}>Hover me</button>
            <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}
export default MyComponent