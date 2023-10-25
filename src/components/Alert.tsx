import React from 'react';
import { Alert as MuiAlert, AlertProps as MuiAlertProps } from '@material-ui/lab';

interface AlertProps extends MuiAlertProps {
  message: string;
}

const Alert: React.FC<AlertProps> = ({ message, ...props }) => {
  return <MuiAlert severity="success" {...props}>{message}</MuiAlert>;
};

export default Alert;