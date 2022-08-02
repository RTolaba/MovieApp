/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable keyword-spacing */
/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable semi */
import React, { createContext, useState } from "react";


interface ImageColors {
    primary: string,
    secondary: string
}

interface ContextProps {
    colors: ImageColors,
    prevColors: ImageColors,
    setMainColors: (colors: ImageColors) => void,
    setPrevMainColors: (colors: ImageColors) => void
}

export const GradientContext = createContext({} as ContextProps) //TODO: definir tipo

    


export const GradientProvider = ({ children }: any) => {
    
    const [ colors, setColors ] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent',
    })

    const [ prevColors, setPrevColors ] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent',
    })

    const setMainColors = ( colors: ImageColors ) => {
        setColors( colors )
    }

    const setPrevMainColors = ( colors: ImageColors ) => {
        setPrevColors( colors )
    }

    return (
        <GradientContext.Provider value={{
            colors,
            prevColors,
            setMainColors,
            setPrevMainColors
        }}>
            { children }
        </GradientContext.Provider>
    )
}

