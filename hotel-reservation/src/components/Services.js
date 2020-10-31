import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
import Title from './Title';

export default class Services extends Component {
    state={
        services: [
            {
                icon: <FaCocktail/>,
                title: "Free Cooktails",
                info: "lorem ipsum something placeholedr info",
            },
            {
                icon: <FaHiking/>,
                title: "Endless Hiking",
                info: "lorem ipsum something placeholedr info",
            },
            {
                icon: <FaShuttleVan/>,
                title: "Free Shuttle",
                info: "lorem ipsum something placeholedr info",
            },
            {
                icon: <FaBeer/>,
                title: "Srongest Beer",
                info: "lorem ipsum something placeholedr info",
            },
        ]
    }
    render() {
        return (
            <section className="services">
               <Title title="services" />
               <div className="services-center">
                {this.state.services.map((item,index) => {
                    return <article className="service" key={index}>
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                })}
               </div> 
            </section>
        )
    }
}

