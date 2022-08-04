import {autoCompleteData} from "./data"

import React from 'react'
import { useState } from "react"

function Autocomplete({data}) {
    const [suggestions, setSuggestions] = useState([])
    const [suggestionIndex, setSuggestionIndex] = useState(0);
    const[suggestionsActive, setSuggestionsActive] = useState(false);
    const [value, setValue] = useState("")
    const handleChange =(e)=>{
        const query = e.target.value.toLowerCase();
        setValue(query);
        if(query.length >1){
            const filterSuggestions = autoCompleteData.filter((suggestion)=>
                suggestion.toLowerCase().includes(query)
            )
        setSuggestions(filterSuggestions);
        setSuggestionsActive(true)
        }
        
        else{
            setSuggestionsActive(false)
        }
    }
    const handleClick =(e)=>{
        setSuggestions([]);
        setValue(e.target.innerText);
        setSuggestionsActive(false)
    }
    const handleKeyDown =(e)=>{
        //up arrow
        if(e.keyCode ===38){
            if(suggestionIndex==0){
                return;
            }
        setSuggestionIndex(suggestionIndex-1)
        }
        //down Arrow 
        else if(e.keyCode ===40){
            if(suggestionIndex -1 ===suggestions.length){
                return
            }
            setSuggestionIndex(suggestionIndex+1)
        }
        //enter
        else if(e.keyCode ===13){
            setValue(suggestions[suggestionIndex]);
            setSuggestionIndex(0);
            setSuggestionsActive(false)
        }
    }

    const Suggestions =()=>{
        return(
            <ul>
                {suggestions.map((suggestion, index)=>{
                    return (
                        <li key={index} onClick={handleClick}>{suggestion}</li>
                    )
                })}
            </ul>
        )
    }
  return (
    <div>
        <input type="text" value={value} onChange={handleChange} onKeyDown={handleKeyDown}/>
        {suggestionsActive && <Suggestions/>}
    </div>
  )
}



export default Autocomplete