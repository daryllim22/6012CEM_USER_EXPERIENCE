import React from 'react';
import styles from './BookingComponent.module.css';

function BookingForm() {
  return (
    <form className={styles.bookingForm}>
      <div className={styles.formGroup}>
        <label htmlFor="destination" className={styles.formLabel}>Destination:</label>
        <input type="text" id="destination" className={styles.formInput} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="checkInDate" className={styles.formLabel}>Check in date:</label>
        <input type="date" id="checkInDate" className={styles.formInput} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="checkOutDate" className={styles.formLabel}>Check out date:</label>
        <input type="date" id="checkOutDate" className={styles.formInput} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="guestCount" className={styles.formLabel}>Number of guests:</label>
        <input type="number" id="guestCount" className={styles.formInput} min="1" />
      </div>
      <button type="submit" className={styles.bookNowButton}>Book Now</button>
    </form>
  );
}

export default BookingForm;