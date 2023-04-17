import React from "react";
import { useSelector } from "react-redux";
import AlertsMUI from '@mui/material/Alert';

const Alert = () => {
  const alerts = useSelector(state => state.alert);
  return (
    alerts.length > 0 &&
    alerts.map(alert => (
      <AlertsMUI key={alert.id}>
        {alert.msg}{alert.alertType}
      </AlertsMUI>
    ))
  );
};

export default Alert;