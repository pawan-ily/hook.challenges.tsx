import React, { useEffect } from "react";
import { useState } from "react";
export function useCounter(){
    const [count,setCount] =useState(0);
    useEffect(()=>{
    const interval  =  setInterval(()=>{
            setCount(c=>c+1)
        },3000)
    
    return ()=>clearInterval(interval)
    },[])
return count;
}