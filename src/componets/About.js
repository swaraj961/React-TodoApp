import React from 'react'

export const About = () => {
    let aboutStyle={
        marginTop:"10rem",
    }
    return (
        <div className="container py-3 " style={aboutStyle}>
            <h3 className="text-center">This is a todo-App made using Reactjs and bootstap</h3>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Odio, modi magnam illum, placeat hic sapiente iste cumque,
              facere doloribus eum earum est! Necessitatibus, veniam recusandae. 
              Rerum mollitia fugiat eveniet ullam!</p>
        </div>
    )
}
