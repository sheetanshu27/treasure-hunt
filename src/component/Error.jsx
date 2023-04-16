import React, { Component } from 'react';
import Imageurl from "../images/errorbg.jpg"

const Error = ()=>{
    return(<><div style={{
        padding: "5%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <center><img src={Imageurl} style={{
            height: "80vh",
            width: "100%",
            alignSelf: "center",
            boxShadow: "2rem 2rem 1rem #808080"
        }}/></center></div>
        </>
        )
}
export default Error;