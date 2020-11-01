import React,{ useContext } from 'react';
import { RoomContext } from "../Context";
import Title from "../components/Title";

const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))]
}
export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets,
    } = context;
    // get unique types
    let types = getUnique(rooms, 'type');
    // add all
    types = ["all", ...types];
    // map to jsx
    types = types.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select
                        onChange={handleChange}
                        className="form-control"
                        name="type" 
                        id="type" 
                        value={type}>
                            {types}
                        </select>
                </div>
            </form>
        </section>
    )
}
