import alert from './alert';

export interface AlertContent {
  titleText: string;
  messageText: string;
  buttonText: string;
}

export interface ServerAlertsNonFieldErrors {
  non_field_errors: [string];
}

export interface ServerAlertsDetail {
  detail: string;
}

export interface ServerAlertsEmail {
  email: [string];
}

export type ServerAlerts = ServerAlertsNonFieldErrors | ServerAlertsDetail | ServerAlertsEmail;

export default alert;
