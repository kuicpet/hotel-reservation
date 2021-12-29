import React from 'react'
import Hero from '../components/Hero';
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";
import Meta from '../components/Meta';

export default function Rooms() {
    return (
        <>
        <Meta title='Beach Resort | Rooms' />
        <Hero hero="roomsHero">
            <Banner title="Our rooms">
                <Link to="/" className="btn-primary">return home</Link>            
            </Banner>
        </Hero>
        <RoomsContainer/>
        </>
    )
}
