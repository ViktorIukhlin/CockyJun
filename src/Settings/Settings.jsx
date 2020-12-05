import React from 'react'
import style from './Settings.module.scss'

const Settings = ({ changeTimer, timerOn }) => {
    return (
        <div className={style.container}>
            <p>Ограничение по времени:</p>
            <div className={style.switch} style={!timerOn ? { paddingLeft: '0' } : { paddingLeft: '30px', background: '#52D869' }}>
                <button onClick={changeTimer} />
            </div>
        </div>
    )
}

export default Settings
