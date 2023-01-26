import React from "react";



class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    }

    toggleEditMode = () =>{
        console.log(this)
        this.setState({
            editMode: !this.state.editMode
        })
        //this.state.editMode = !this.state.editMode
    }

    render() {


        return (<>
            {!this.state.editMode
                ?<div>
                    <span onDoubleClick={this.toggleEditMode}>{this.props.status}</span>
                 </div>
                :<div>
                    <input
                        defaultValue={this.props.status}
                        onBlur={this.toggleEditMode}
                        autoFocus={true}
                    />
                 </div>
            }
        </>)
    }
}

export default ProfileStatus