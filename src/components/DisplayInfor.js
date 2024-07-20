import React from "react";
import UserInfor from "./UserInfor";
class DisplayInfor extends React.Component{
    render(){
        console.log(this.props)
        //destructuring arrray/object
        const{age,name} = this.props
        return(
            <div>
                <div>{name}</div>
                <div>{age}</div>

            </div>

        )
    }

}
export default DisplayInfor