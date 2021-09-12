import React, { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from '../components/Title';

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
export default function RoomsFilter({ rooms }) {
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
  types = ['all', ...types];
  // map to jsx
  types = types.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  let people = getUnique(rooms, 'capacity');
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            onChange={handleChange}
            className="form-control"
            name="type"
            id="type"
            value={type}
          >
            {types}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            onChange={handleChange}
            className="form-control"
            name="capacity"
            id="capacity"
            value={capacity}
          >
            {people}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            className="form-control"
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">room size</label>
          <div className="size-inputs">
            <input
              className="size-input"
              onChange={handleChange}
              type="number"
              name="minSize"
              id="min_size"
              value={minSize}
            />
            <input
              className="size-input"
              onChange={handleChange}
              type="number"
              name="maxSize"
              id="max_size"
              value={maxSize}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="price">extras</label>
          <div className="extras_item">
            <div className="single-extra">
              <input
                type="checkbox"
                name="breakfast"
                id="breakfast"
                checked={breakfast}
                onChange={handleChange}
              />
              <label htmlFor="breakfast">breakfast</label>
            </div>
            <div className="single-extra">
              <input
                type="checkbox"
                name="pets"
                id="pets"
                checked={pets}
                onChange={handleChange}
              />
              <label htmlFor="pets">pets</label>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
