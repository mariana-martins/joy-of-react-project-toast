import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, handleDismiss }) {
  return (
    <>
      <ol className={styles.wrapper}>
        <li className={styles.toastWrapper}>
          {toasts?.map((toast) => (
            <Toast
              key={toast.id}
              variant={toast.variant}
              handleDismiss={handleDismiss}
              id={toast.id}
            >
              {toast.message}
            </Toast>
          ))}
        </li>
      </ol>
    </>
  );
}

export default ToastShelf;
