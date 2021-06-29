import React from 'react'
const style = {
    height:'100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
}
function Loading() {   
    return (
        <div style={style}>
            <h2>Loading...</h2>
        </div>
    )
}

export default Loading
