import apiClient from '@/lib/apiClient';

interface PaypalTransaction {
  orderID: string;
}

export const stripeCharge = async (paymentMethodId: string) => {
  try {
    const url = `/checkout/create-stripe-charge`;
    const { data } = await apiClient.post(url, { paymentMethodId });
    return data.data;
  } catch (error) {}
};

export const createPaypalTransaction = async (
  total: string
): Promise<PaypalTransaction> => {
  try {
    const url = `/checkout/create-paypal-transaction`;
    const { data } = await apiClient.post(url, { total });

    const paypalTransaction: PaypalTransaction = {
      orderID: data.data.orderID,
    };

    return paypalTransaction;
  } catch (error) {}
};

export const capturePaypalTransaction = async (
  orderID: string
): Promise<void> => {
  try {
    const url = `/checkout/capture-paypal-transaction`;
    return await apiClient.post(url, { orderID });
  } catch (error) {}
};

const CheckOutService = {
  createPaypalTransaction,
  capturePaypalTransaction,
  stripeCharge,
};

export default CheckOutService;
