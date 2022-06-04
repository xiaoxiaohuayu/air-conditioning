import React, { useRef, useImperativeHandle } from 'react'

import tip from './tip.mp3'
import run from './run.mp3'

const Audio = (_, ref) => {
    const tipRef = useRef()
    const runRef1 = useRef()
    useImperativeHandle(ref, () => ({
        name: '张三',
        playTip: () => {
            tipRef.current.play()
        },
        playRun: () => {
            const flag = runRef1.current.paused
            if (flag) return setTimeout(() => runRef1.current.play(), 300);
            runRef1.current.pause()
        },
    }))
    return (
        <>
            <audio src={tip} ref={tipRef} ></audio>
            <audio src={run} ref={runRef1} loop></audio>
        </>
    )
}

export default React.forwardRef(Audio)