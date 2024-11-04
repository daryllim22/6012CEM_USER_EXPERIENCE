import React from 'react';
import styles from './BookingComponent.module.css';

const menuItems = ['Booking', 'Deals', 'Destinations', 'Trips', 'Reviews'];

function MenuBar() {
  return (
    <nav className={styles.menuBar}>
      {menuItems.map((item, index) => (
        <button key={index} className={styles.menuButton}>
          {item}
        </button>
      ))}
    </nav>
  );
}

export default MenuBar;