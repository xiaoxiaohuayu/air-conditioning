import { useMemo } from 'react'

import Temp from '../Temp'

import snowflake from '../images/雪花.png'
import wind from '../images/风.png'

const productDiv = length => Array.from({ length }).map((_, i) => <div key={i}></div>)

const Panel = ({ temp }) => {
    const processTemp = useMemo(() => temp, [temp])
    return (
        <div className="air-condition">
            <div className="a-tag">
                <div className="a-t-header">
                    {productDiv(6)}
                </div>
                <div className="a-t-content-1">
                    <div className="c-l">
                        <div className="c-l-1"></div>
                        <div className="c-l-2"></div>
                        <div className="c-l-3"></div>
                    </div>
                    <div className="c-r">
                        <p className="c-r-grade"></p>
                    </div>
                </div>
                <div className="a-t-content-2">
                    <div className="c-2-title">
                        {productDiv(9)}
                    </div>
                    <div className="c-2">
                        <div className="c-2-1">
                            {productDiv(6)}
                        </div>
                        <div className="c-2-2">
                            {productDiv(6)}
                        </div>
                    </div>
                </div>
                <div className="a-t-footer">
                    {productDiv(6)}
                </div>
            </div>
            <div className="a-screen">
                <div className="s-icon">
                    <img src={snowflake} className="img-100" alt="" />
                </div>
                <div className="s-temp">
                    <Temp temp={processTemp} />
                </div>
            </div>
            <div className="a-line"></div>
            <div className="a-wind">
                <img src={wind} alt="failed" className="img-l" />
                <img src={wind} alt="failed" className="img-c" />
                <img src={wind} alt="failed" className="img-r" />
            </div>
        </div>
    )
}
export default Panel