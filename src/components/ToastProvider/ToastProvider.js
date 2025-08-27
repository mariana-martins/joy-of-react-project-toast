import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        setToasts([]);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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
