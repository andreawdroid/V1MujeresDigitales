import { BtnMyLocation, MapView, ReactLogo, SearchBar, SasoftcoLogo } from '../components'
import React from 'react';

export const HomeScreen = () => {
    return (
        <div>
            <MapView />
            <BtnMyLocation />
            <SasoftcoLogo />
            <SearchBar />
        </div>
    )
}
