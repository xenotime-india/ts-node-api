/**
 * User objects allow you to associate actions performed
 * in the system with the user that performed them.
 * The User object contains common information across
 * every user in the system regardless of status and role.
 */
export interface User {
  id: number;
  /**
   * The email the user used to register his account
   */
  email: string;
  name: string;
  status?: 'Happy' | 'Sad';
  phoneNumbers: string[];
}
