import React from 'react'

function TextHeading({level,children}) {
    if (level === 1) {
        return (
            <h1 className="" id={children}>{children}</h1>
        )
    }
    if (level === 2) {
        return (
            <h2 className="" id={children}>{children}</h2>
        )
    }
    if (level === 3) {
        return (
            <h3 className="" id={children}>{children}</h3>
        )
    }
}

export default TextHeading