import React from 'react'

const ProgressBar = ({ size, currentSize }) => {
    let width = (100 * currentSize) / size

    return (
        <div className="progressBar">
            <div className="progressBar__scale" style={{ width: `${width}%` }}>
                <p>{width}%</p>
            </div>
        </div>
    )
}

export default ProgressBar
