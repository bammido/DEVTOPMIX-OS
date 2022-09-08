import React,{useState} from 'react'

const useRequestMsg = (initial?) => {
    const [msg, setMsg] = useState(initial || {})
    return {msg, setMsg}
}
export default useRequestMsg