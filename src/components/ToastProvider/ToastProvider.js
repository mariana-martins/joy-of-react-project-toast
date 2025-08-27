import React from 'react';
import useKeyDown from '../../hooks/use-keydown';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
  ]);

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, [setToasts]);

  useKeyDown('Escape', handleEscape);

  const handleAddNewToast = (variant, message) => {
    setToasts((prev) => [
      ...prev,
      { variant, message, id: crypto.randomUUID() },
    ]);
  };

  const handleDismiss = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, handleDismiss, handleAddNewToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
