import React from "react";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditeMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditeMode = () => {
        this.setState({editMode: false})
        this.props.updateProfileStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        //console.log(this.props.status)
        /*console.log(`statusComponent props ${this.props.status}`)
        console.log(`statusComponent state ${this.state.status}`)*/

        return (<>
            {
                !this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditeMode}>{this.props.status
                        ? this.props.status
                        : "Enter status"}</span>
                      </div>
                    : <div>
                        <input
                            onChange={this.onStatusChange}
                            defaultValue={this.state.status}
                            onBlur={this.deactivateEditeMode}
                            autoFocus={true}/>
                      </div>

            }
        </>)
    }
}

export default ProfileStatus