import { type } from '@testing-library/user-event/dist/type'
import React from 'react'

const number_get=(data)=>{
    return(dispatch)=>{
        dispatch({
            type:'GET',
            payload:data
        })
    }
}

const number_get1=(data1)=>{
    return(dispatch)=>{
        dispatch({
            type:'GET1',
            payload:data1
        })
    }
}

export {
    number_get,
    number_get1
}