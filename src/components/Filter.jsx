import React from 'react';

const Filter = ({ filter, onChange, styles }) => (
  <div className={styles.formGroup}>
    <label htmlFor="filter">Find contacts by name</label>
    <input
      type="text"
      id="filter"
      name="filter"
      className={styles.filterInput}
      placeholder="Search contacts"
      value={filter}
      onChange={onChange}
    />
  </div>
);

export default Filter;

