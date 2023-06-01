import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./styles/Toast.css";

const Toaster = (props) => {
  console.log("console test react-toast-test");

  const { position, autoDeleteTime } = props;
  const [toasts, setToasts] = useState([]);

  const showToast = (toastProps) => {
    setToasts((prevToasts) => [...prevToasts, toastProps]);
  };

  const removeToast = (id) => {
    toasts.splice(id, 1);
    setToasts([...toasts]);
  };

  useEffect(() => {
    const interval = setTimeout(deleteTimer, autoDeleteTime);
    return () => {
      clearTimeout(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toasts, autoDeleteTime]);

  const deleteTimer = () => {
    if (autoDeleteTime > 0 && toasts.length) {
      removeToast(toasts[0].id);
    }
  };

  useEffect(() => {
    const handleShowToast = (event) => {
      showToast(event.detail);
    };

    const toaster = document.getElementById("toaster");
    if (toaster) {
      toaster.addEventListener("showToast", handleShowToast);
    }

    return () => {
      if (toaster) {
        toaster.removeEventListener("showToast", handleShowToast);
      }
    };
  }, []);

  return (
    <div id="toaster" className={`notification-container ${position}`}>
      {toasts.map((toast, index) => (
        <div
          className={`notification toast ${toast.type} ${
            toast.position ? toast.position : "bottom-right"
          }`}
          key={index}
          style={{ backgroundColor: toast.backgroundColor }}
        >
          <button onClick={() => removeToast(index)}>X</button>
          <div className="notification-image">
            <span className="icon"></span>
          </div>
          <div>
            <p className="notification-title">{toast.title}</p>
            <p className="notification-message">{toast.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const toast = (props) => {
  const toaster = document.getElementById("toaster");
  if (toaster) {
    const showToastEvent = new CustomEvent("showToast", {
      detail: props,
    });
    toaster.dispatchEvent(showToastEvent);
  }
};

Toaster.defaultProps = {
  position: "bottom-right",
  autoDeleteTime: 0,
};

Toaster.propTypes = {
  position: PropTypes.string,
  autoDelete: PropTypes.bool,
  autoDeleteTime: PropTypes.number,
};

export default Toaster;
