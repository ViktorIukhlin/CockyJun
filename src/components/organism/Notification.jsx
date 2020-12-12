import React, { useEffect, useState } from 'react'

const Notification = ({ show }) => {
    return (
        <div className="notification">
            <div className={show ? 'notification-box -active' : 'notification-box'}>
                <p>Успех</p>
            </div>
        </div>
    )
}

export default Notification
