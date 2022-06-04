import React from 'react'

const Temp = ({ temp }) => {
    return (
        <>
            <span>{temp}</span>
            <span className="s-t-symbol">○</span>
            <span>c</span>
        </>
    )
}

export default React.memo(Temp)