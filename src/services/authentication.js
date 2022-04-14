import request from "../utils/request";
import { endpoint } from "../utils/config";

export async function postLogin(data) {
  const url = `${endpoint}/auth`;
  return await request({
    url,
    method: "post",
    data,
    formatData: true,
  });
}

export async function postForgotPassword(data) {
  const url = `${endpoint}/password-reset/initiate`;
  return await request({ url, method: "POST", data, formatData: true });
}

export async function postResetPassword(data) {
  const url = `${endpoint}/password-reset/complete`;
  return await request({ url, method: "POST", data, formatData: true });
}

export async function postEmailConfirmation(data) {
  const url = `${endpoint}/signup/validate`;
  return await request({ url, method: "POST", data, formatData: true });
}

export async function postRegistration(data) {
  const url = `${endpoint}/signup`;
  return await request({ url, method: "POST", data, formatData: true });
}

export async function postCompleteRegistration(data) {
  const url = `${endpoint}/signup/complete`;
  return await request({ url, method: "POST", data, formatData: true });
}

export async function postResendActivation(data) {
  const url = `${endpoint}/signup/resend`;
  return await request({ url, method: "POST", data, formatData: true });
}
export async function postLogOut(data) {
  const url = `${endpoint}/auth/logout`;
  return await request({ url, method: "POST", data, formatData: true });
}

export async function getProfile() {
  const url = `${endpoint}/users/profile`;
  return await request({ url, method: "GET" });
}

export async function getDashboardStats(data) {
  const url = `${endpoint}/dashboard`;
  return await request({ url, method: "GET" });
}

export async function getSubscriptionPlans(data) {
  const url = `${endpoint}/subscription/plans`;
  return await request({ url, method: "GET" });
}

export async function getPaymentReference(data) {
  const url = `${endpoint}/subscription/fee?plan_id=${data.id}&month_count=1`;
  return await request({ url, method: "GET" });
}

export async function getPaymentURL(data) {
  const url = `${endpoint}/payment/reference/${data.fee_id}`;
  return await request({ url, method: "GET" });
}

export async function postPayStack({ data, token }) {
  console.log({ data });
  const url = `https://api.paystack.co/transaction/initialize`;
  return await request({ url, method: "POST", data, token });
}

export async function getVerifyPayment(reference) {
  const url = `${endpoint}/payment/verify/${reference}`;
  return await request({ url, method: "POST" });
}
