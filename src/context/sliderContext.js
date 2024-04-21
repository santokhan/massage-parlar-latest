import { useState, useEffect, createContext } from 'react'
import sanityClient from '../sanity/sanityClient'

export const SliderContext = createContext(null);

function SanityURLProvider({ children }) {
    const [state, setState] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "sliders"]`).then((data) => {
            if (data) {
                setState(data);
            };
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <SliderContext.Provider value={{ state }}>
            {children}
        </SliderContext.Provider>
    );
}

export default SanityURLProvider;