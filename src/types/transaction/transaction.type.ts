export interface ITransaction {
  id?: number,
  userId?: number;
  bikeId?: number;
  amount?: number;
  expiresIn?: string;
  expiresOut?: string;
}
