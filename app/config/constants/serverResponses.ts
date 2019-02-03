import {
  SERVER_VALUES_QR_CODE_ASSIGNMENT_SUCCESS_MESSAGE,
  SERVER_VALUES_QR_CODE_FUNCTION_REMOVED,
  SERVER_VALUES_QR_CODE_RESTAURANT_REMOVED_FROM_TABLE
} from './serverValues';

enum ServerResponses {
  INVALID_CREDENTIALS = 'Unable to log in with provided credentials.',
  EMAIL_UNVERIFIED = 'E-mail is not verified.',
  NOT_YET_WORKING_ANYWHERE = 'You are not yet signed up as an employee for any restaurants yet.',
  /**
   * Assign: Es gibt bereits einen Tisch mit dieser Tischnummer für dieses Restaurant.
   */
  RESTAURANT_ALREADY_HAS_TABLE_ERROR = 'This table does already exist for this restaurant.',
  /**
   * Remove: Von diesem QR Code kann keine Funktion entfernt werden, weil er keine hat.
   */
  QR_CODE_HAS_NO_FUNCTION_ERROR = 'This QR code does not have a function.',
  /**
   * Remove: Dieser QR Code kann leute einchecken, aber nicht zum abgeschickten Restaurant.
   * Also darf dieser Kellner keine Funktion entfernen.
   */
  QR_CODE_BELONGS_TO_DIFFERENT_RESTAURANT_ERROR = 'This qr code does not belong to this restaurant.',
  /**
   * Assign: Dieser QR Code ist bereits einem Tisch zu gewiesen mit einer anderen Nummer als
   * der Geschickten.
   */
  QR_CODE_BELONGS_TO_DIFFERENT_TABLE_ERROR = 'This qr code belongs to another table.',
  /**
   * Assign: Der gescannte QR Code hat bereits eine Funktion und sie ist nicht checkin_user.
   */
  QR_CODE_ALREADY_HAS_FUNCTION_ERROR = 'This qr code already has a function.'
}

export type QRCodeDetails =
  /**
   * Assign: Der QRCode wurde erfolgreich dem Tisch und dem Restaurant zu gewiesen.
   */
  | SERVER_VALUES_QR_CODE_ASSIGNMENT_SUCCESS_MESSAGE
  /**
   * Remove: Die Funktion des QRCode wurde erfolgreich entfernt (er hat jetzt keine Funktion mehr).
   */
  | SERVER_VALUES_QR_CODE_FUNCTION_REMOVED
  /**
   * Remove: Das Restaurant wurde erfolgreich vom Tisch entfernt (es checkt aber immer noch für
   * andere Restaurants Gäste an dieser Tischnummer ein - der QR Code behielt die Tischnummer).
   */
  | SERVER_VALUES_QR_CODE_RESTAURANT_REMOVED_FROM_TABLE;

export default ServerResponses;
