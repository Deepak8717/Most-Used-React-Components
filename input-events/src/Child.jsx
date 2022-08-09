import React from 'react'
import { useState } from 'react'

const Child = () => {
    const [state, setState] = useState({
        name:"",
        showIcon:false
    })
    const handleOnChange=(e)=>{
        console.log(e.target.value.length);
        setState({
            ...state,
            name:e.target.value
        })
        console.log(e.target.value)
    }
    const handleOnFocus=()=>{
        setState({
            ...state,
            showIcon:true
        })
        console.log("state",state);
    }
    const handleOnBlur =()=>{
        setState({
            ...state,
            showIcon:false
        })
        console.log("state",state);
    }
  return (
    <div>
      <input type="text" value={state.name} onChange={handleOnChange} onFocus={handleOnFocus} onBlur={handleOnBlur}/>
            {state.showIcon ? <h1>onFocus</h1>:<h1>onBlur</h1>}
    </div>
  )
}

export default Child
