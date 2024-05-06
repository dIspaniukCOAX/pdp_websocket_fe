import { PaymentMethodResult } from "@stripe/stripe-js";

export interface IPayment {
    userId: number;
    amount: number;
    paymentMethod: PaymentMethodResult
}