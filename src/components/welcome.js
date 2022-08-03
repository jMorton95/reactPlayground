import React from "react";


const welcomeElement = (props) => {
    return <p className='App-welcome'>
            Hi {props.userName}, you are {props.userAge} years old, and are {props.userHeight}, {props.userWeight}
        </p>
}

export { welcomeElement };