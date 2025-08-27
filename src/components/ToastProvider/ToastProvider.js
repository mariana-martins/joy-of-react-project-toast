import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const handleAddNewToast = (variant, message) => {
    setToasts((prev) => [
      ...prev,
      { variant, message, id: crypto.randomUUID() },
    ]);
  };

  const handleDismiss = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const value = {
    toasts,
    handleDismiss,
    handleCreateNewToast,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
