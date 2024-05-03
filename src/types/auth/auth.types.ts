import { IUser } from "../user/user.types";

export interface ISignIn extends Record<string, unknown> {
  email: string;
  password: string;
}

export interface IResetPassword extends Record<string, unknown> {
  email: string;
}

export interface ISetNewPassword extends Record<string, unknown> {
  password: string;
  repeatPassword: string;
}

export interface IRequestSetNewPassword extends Record<string, unknown> {
  newPassword: string;
  token: string;
}

export interface ICheckValidationToken extends Record<string, unknown> {
  token: string;
}

export interface IAuthResponse extends Record<string, unknown> {
  user: IUser;
  jwtToken: string;
}

export interface ISignUp extends ISignIn {
  fullName: string;
  phoneNumber: string;
}

export interface ISignUpForm extends ISignUp {
  agreement: boolean;
}
