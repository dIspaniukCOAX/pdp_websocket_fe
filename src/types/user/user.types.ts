export interface IUser extends Record<string, unknown> {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  phoneNumber: string;
  fullName: string;
}
