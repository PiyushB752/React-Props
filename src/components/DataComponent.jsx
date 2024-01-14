import React from "react";
import elephants from "../images/elephant.jpeg"

const DataComponent = () =>{
    const props = [
        {
            id : 1,img : elephants
        },
        {
            id : 2,img : elephants
        },
        {
            id : 3,img : elephants
        },
        {
            id : 4,img : elephants
        },
    ]
    return props
}
export default DataComponent;