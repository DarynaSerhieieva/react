import React from "react";
import Button from "./button";

const ComponentsButton = () => {

    const doSomething = () => {
        console.log('work')
    }

    const style = {
        backgroundColor: 'orange',
        color: 'red',
        border: '2px solid red',
        borderRadius: '8px',
        padding: '8px 10px' 
    }

    return(
        <>
            <h2>This is Components Button</h2>
            <Button click= {doSomething} style= {style}>
                Button  
            </Button>
        </>
    );

}

export default ComponentsButton;