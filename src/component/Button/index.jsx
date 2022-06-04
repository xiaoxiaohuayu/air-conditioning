import React, { useState } from 'react'

import switchBtns from '../images/开关.png'
import upArrow from '../images/上箭头.png'
import downArrow from '../images/下箭头.png'

const Button = ({ up, down, toSwitch }) => {
    const [bg, setBg] = useState({ open: '#f33531', off: '#43a047', flag: false })
    const switchState = () => {
        toSwitch()
        setBg({ ...bg, flag: !bg.flag })
    }
    return (
        <>
            <div className="b-inc" onClick={() => up()}>
                <img src={upArrow} className="img-5" alt="failed" />
            </div>
            <div
                className="b-switch"
                onClick={() => switchState()}
                style={{ backgroundColor: bg.flag ? bg.open : bg.off }}
            >
                <img src={switchBtns} className="img-5" alt="failed" />
            </div>
            <div className="b-dec" onClick={() => down()}>
                <img src={downArrow} className="img-5" alt="failed" />
            </div>
        </>
    )
}
export default React.memo(Button)