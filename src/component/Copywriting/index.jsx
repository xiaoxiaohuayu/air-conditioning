import { useState, useEffect } from "react"

const getContent = async () => {
    try {
        const connect = await fetch('https://v1.hitokoto.cn?c=d')
        const data = await connect.json()
        return data
    } catch (e) { return false }
}

const CopyWriting = () => {
    const [text, setText] = useState({ hitokoto: '', quote: '' })
    useEffect(() => {
        const update = async () => {
            const data = await getContent()
            const from_who = data.from_who ? data.from_who : ''
            data.quote = `——${from_who}《${data.from}》`
            setText(data)
        }
        const token = setInterval(update, 6000)
        update()
        return () => clearInterval(token)
    }, [])
    return (
        <>
            <p>{text.hitokoto}</p>
            <p>{text.quote}</p>
        </>
    )
}
export default CopyWriting