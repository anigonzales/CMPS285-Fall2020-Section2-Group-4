import React, { useState } from 'react'

export const MainPage = () => {
    const [state, setState] = useState(1);

    return ( 
        <>
        <div>
            Hello
        </div>
        <div>
            Dom
        </div>
        <button onClick={() => setState(state + 1)}>Press me</button>
        {state}
        </>
    )
}