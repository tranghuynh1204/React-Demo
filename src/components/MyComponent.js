import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component{
    render(){
        const myInfor = ['ab','c','c']
        return(
            <div>
            <UserInfor></UserInfor>
            <br></br>
            <DisplayInfor name = {"trang"} age={21} myInfor={myInfor}/>
            </div>
            
    
        );
    }
}
export default MyComponent
