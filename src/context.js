import React, {createContext, useState} from 'react';

const Context = createContext()
const Provider = ({children}) => {
    const [state, setState] = useState({trackList:[
            {
                track: {track_name: "abc"},
            },
            {
                track: {track_name: "123"},
            }],
        heading: 'Top 10 tracks'
    })


    return (
        <Context.Provider value={initialState}>
            {children}
        </Context.Provider>
    );
};

export default Provider;