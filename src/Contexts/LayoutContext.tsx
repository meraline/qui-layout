"use client"


import * as React from 'react';
import { useState, useContext, createContext } from "react";
import countries from '@/data/countries';
import Country from '@/types/country';


export interface LayoutContextPropsInterface {
    modal: React.ReactNode | React.ReactNode[] | null,
    setModal: Function,
    country: Country,
    setCountry: Function,
    feedbackModal: boolean,
    setFeedbackModal: Function,
    contactMenu: boolean,
    setContactMenu: Function,
    countryMenu: boolean,
    setCountryMenu: Function,
    nooverflow: boolean,
    setNooverflow: Function,
}

const LayoutContext = createContext<LayoutContextPropsInterface>({
    feedbackModal: false,
    setFeedbackModal: Function,
    contactMenu: false,
    setContactMenu: Function,
    nooverflow: false,
    setNooverflow: Function,
    countryMenu: false,
    setCountryMenu: Function,
    modal: null,
    setModal: Function,
    country: countries[0],
    setCountry: Function,
});

interface LayoutProviderPropsInterface {
    children: React.ReactNode,
}


const LayoutProvider: React.FC<LayoutProviderPropsInterface> = ({ children }) => {

    const [modal, setModal] = useState<React.ReactNode | React.ReactNode[] | null>(null);
    const [feedbackModal, setFeedbackModal] = useState<boolean>(false);
    const [contactMenu, setContactMenu] = useState<boolean>(false);
    const [countryMenu, setCountryMenu] = useState<boolean>(false);
    const [nooverflow, setNooverflow] = useState<boolean>(false);
    const [country, setCountry] = useState<Country>(countries[0]);

    React.useEffect(() => {
        if (feedbackModal) {
            setContactMenu(false)
            setCountryMenu(false)
        }
    }, [feedbackModal])

    React.useEffect(() => {
        if (countryMenu) {
            setContactMenu(false)
        }
    }, [countryMenu])

    React.useEffect(() => {
        setCountryMenu(false)
    }, [country])

    React.useEffect(() => {
        if (contactMenu) {
            setCountryMenu(false)
        }
    }, [contactMenu])

    return <LayoutContext.Provider
        value={{
            modal,
            setModal,
            country,
            setCountry,
            feedbackModal,
            setFeedbackModal,
            nooverflow,
            setNooverflow,
            contactMenu,
            setContactMenu,
            countryMenu,
            setCountryMenu,
        }}
    >
        {children}
    </LayoutContext.Provider>
}

const useLayout = () => {
    const context = useContext(LayoutContext);

    if (context === undefined) {
        throw new Error(`useLayout must be used within a LayoutProvider`);
    }

    return context;
}

export { LayoutProvider, useLayout };
