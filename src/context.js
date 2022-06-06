import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";
import {base_key} from "./config";
export const GlobalContext = createContext()

export const ContextController = ({children}) => {
    let intialState = {
        track_list: [],
        heading: ""
        // dispatch: action => this.setState(state => reducer(state, action))
    };
    const [state, setState] = useState(intialState);


useEffect(() => {
    axios.get( `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${base_key}`)
        .then((res)=>{
            setState(
                {
                    ...state,track_list: res.data.message.body.track_list,
                    heading: "Top 10 Tracks"
                }
            )

        })
        .catch((err)=>{
            console.log(err)
        })

},[])

    return (
        <GlobalContext.Provider value={{state,setState}}>
            {children}
        </GlobalContext.Provider>
    );
};

