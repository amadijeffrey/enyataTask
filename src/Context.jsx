import React, { useState, createContext } from "react";

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
    const [selectedItem, setSelectedItem] = useState({
        image: "",
        name: "",
        gender: "",
        yearOfBirth: "",
        height: "",
        language: "",
        designation: "",
        eyeColors: "",
        averageLifeSpan: "",
        title: "",
        producer: "",
        director: "",
        releaseDate: "",
        model: "",
        passengers: "",
        pilots: "",
    })

    return (
        <AppContext.Provider value={{ selectedItem, setSelectedItem }}>
            {children}
        </AppContext.Provider>
    )
}