export type ContactStatus = "NEW" | "READ" | "ARCHIVED";

export interface ContactMessageData {
  id?: string;
  name: string;
  email: string;
  message: string;
  status?: ContactStatus;
  createdAt?: string;
}
