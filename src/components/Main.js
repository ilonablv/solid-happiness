import React from 'react';
import Welcome from './Welcome';
import HotelInfo from './HotelInfo';

const Main = () => {
    return (
        <div className="Main">
            <main id="wrapper">
                <Welcome/>
                <HotelInfo/>
            </main>
        </div>
    );
}

export default Main;