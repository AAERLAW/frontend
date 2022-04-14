import { routerRedux } from "dva/router";
import axios from "axios";
import {
  postLogin,
  postForgotPassword,
  postResetPassword,
  postEmailConfirmation,
  postResendActivation,
  postRegistration,
  postCompleteRegistration,
  getSubscriptionPlans,
  getPaymentReference,
  getPaymentURL,
  getVerifyPayment,
  getProfile,
  postLogOut,
  getDashboardStats,
  postPayStack,
} from "../services/authentication";
import { Alert } from "../components/Alert.components";

import {
  storageToken,
  storageRefeshToken,
  storageProfile,
} from "../utils/constant";

const initialState = {
  profile: {},
  emailVerified: false,
  subscriptionDetail: {},
  subcriptionPlan: {},
  openPaymentModal: false,
  dashboardStats: {},
  subscription_plans: [],
  paymentDetail: {},
};

export default {
  namespace: "authentication",

  state: { ...initialState },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
      //Persist token details logic
      try {
        let profile = localStorage.getItem(storageProfile);
        if (profile) {
          let profileData = JSON.parse(profile);
          dispatch({
            type: "save",
            payload: { profile: profileData },
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
  },

  effects: {
    *login({ payload }, { call, put }) {
      const { raw, success, message } = yield call(postLogin, payload);
      if (success) {
        const { data } = raw;
        const isAdmin = data?.roles?.includes("ADMIN");
        if (isAdmin) {
          // If account is an admin
          yield put({
            type: "authentication/postLogin",
            payload: { data: data },
          });
        } else {
          // Normal user account
          const isExpiredSubscribe = data?.subscription?.expired;
          if (!isExpiredSubscribe) {
            // Subscribed User
            yield put({
              type: "authentication/postLogin",
              payload: { data: data },
            });
          } else {
            // Non Subscribed User
            yield put({ type: "save", payload: { subscriptionDetail: data } });
            yield put(routerRedux.push({ pathname: "/subscription" }));
          }
        }
      } else {
        Alert.error(message);
      }
    },

    *socialLogin({ payload }, { call, put }) {
      const { access_token } = payload;
      access_token &&
        (axios.defaults.headers.common.Authorization = `Bearer ${access_token}`);
      const { success, raw, message } = yield call(getProfile);
      if (success) {
        // login user into postLogin Effect
        let data = raw?.data ? raw?.data : {};
        data["username"] = `${data.email}`;
        const isAdmin = data?.roles?.includes("ADMIN");
        if (isAdmin) {
          // If account is an admin
          yield put({
            type: "authentication/postLogin",
            payload: { data: data },
          });
        } else {
          // Normal user account
          const isExpiredSubscribe = data?.subscription?.expired;
          if (!isExpiredSubscribe) {
            // Subscribed User
            yield put({
              type: "authentication/postLogin",
              payload: { data: data },
            });
          } else {
            // Non Subscribed User
            yield put({ type: "save", payload: { subscriptionDetail: data } });
            yield put(routerRedux.push({ pathname: "/subscription" }));
          }
        }
      } else {
        Alert.error(message);
        // yield put(routerRedux.push({ pathname: "/login" }));
      }
    },

    *postLogin({ payload }, { put }) {
      const { data } = payload;
      const { access_token, refresh_token } = data;

      const subscription = data.subscription ? data.subscription : {};
      const title = subscription.title ? subscription.title : "";
      const isBASIC = title ? title.slice(0, 5) === "BASIC" : false;
      const profile = { ...data, isBASIC };
      localStorage.setItem(storageToken, access_token);
      localStorage.setItem(storageRefeshToken, refresh_token);
      localStorage.setItem(storageProfile, JSON.stringify(profile));

      yield put({ type: "save", payload: { profile: profile } });
      // yield put(routerRedux.push("/law-reports"));
      yield put(routerRedux.push({ pathname: "/dashboard" }));
    },

    *getDashboardStats({ payload }, { call, put }) {
      const { success, raw, message } = yield call(getDashboardStats, payload);
      if (success) {
        const data = raw?.data;
        yield put({ type: "save", payload: { dashboardStats: data } });
      } else {
        Alert.error(message);
      }
    },

    *register({ payload }, { call, put }) {
      const { raw, success, message } = yield call(postRegistration, payload);
      if (success) {
        let responseMessage = raw?.meta?.info;
        Alert.success(responseMessage);
        yield put(routerRedux.push("/login"));
      } else {
        Alert.error(message);
      }
    },
    *forgotPassword({ payload }, { call, put }) {
      const { raw, success, message } = yield call(postForgotPassword, payload);
      if (success) {
        Alert.success(
          "Password reset initiated successfully. An email has been sent to your mail"
        );
        yield put(routerRedux.push({ pathname: "/login" }));
      } else {
        Alert.error(message);
      }
    },
    *resetPassword({ payload }, { call, put }) {
      const { raw, success, message } = yield call(postResetPassword, payload);
      if (success) {
        Alert.success("Password reset successfully. Please proceed to login");
        yield put(routerRedux.push({ pathname: "/login" }));
      } else {
        Alert.error(message);
      }
    },
    *emailConfirmation({ payload }, { call, put }) {
      const { raw, success, message } = yield call(
        postEmailConfirmation,
        payload
      );
      if (success) {
        yield put({
          type: "save",
          payload: { emailVerified: true },
        });
      } else {
        Alert.error(message);
      }
    },
    *resendActivation({ payload }, { call, put }) {
      const { raw, success, message } = yield call(
        postResendActivation,
        payload
      );
      if (success) {
        Alert.success("A new activation link has been sent to your mail.");
      } else {
        Alert.error(message);
      }
    },
    *completeRegistration({ payload }, { call, put }) {
      const { raw, success, message } = yield call(
        postCompleteRegistration,
        payload
      );
      if (success) {
        raw?.meta?.info && Alert.success(raw?.meta?.info);
        yield put(routerRedux.push("/"));
      } else {
        Alert.error(message);
      }
    },
    *getAllSubscriptionPlans({ payload }, { call, put }) {
      const { access_token } = payload;

      axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;

      const { raw, success, message } = yield call(
        getSubscriptionPlans,
        payload
      );
      if (success) {
        const data = raw.data;
        const subscription_plans = data ? data.subscription_plans : [];
        yield put({
          type: "save",
          payload: { subscription_plans: subscription_plans },
        });
      } else {
        Alert.error(message);
      }
    },
    *initiatePayment({ payload }, { call, put }) {
      const { access_token } = payload;
      axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
      const { raw, success, message } = yield call(
        getPaymentReference,
        payload
      );

      if (success) {
        const data = raw?.data;
        const response_2 = yield call(getPaymentURL, data);
        if (response_2.success) {
          const data_2 = response_2?.raw?.data;

          const payload_2 = {
            reference: data_2.payment_reference,
            amount: data_2.amount * 100,
            email: data_2.email,
          };

          // const response_3 = yield call(postPayStack, {
          //   data: payload_2,
          //   token: data_2.key,
          // });

          // if (response_3.success) {
          //   window.location.replace(response_3?.data?.authorization_url);
          // } else {
          //   Alert.error(response_3.message);
          // }

          const paymentDetail = {
            ...data,
            ...payload_2,
          };

          yield put({
            type: "save",
            payload: { openPaymentModal: true, paymentDetail: paymentDetail },
          });
        } else {
          Alert.error(response_2.message);
        }
      } else {
        Alert.error(message);
      }
    },

    *verifyPayment({ payload }, { call, put }) {
      const { access_token, reference } = payload;
      access_token &&
        (axios.defaults.headers.common.Authorization = `Bearer ${access_token}`);
      const { raw, success, message } = yield call(getVerifyPayment, reference);

      if (success) {
        Alert.success("Payment verified successfully.");
        yield put({
          type: "authentication/postLogin",
          payload: { data: payload.subscriptionDetail },
        });

        yield put({
          type: "save",
          payload: {
            subscriptionDetail: {},
            subcriptionPlan: {},
            openPaymentModal: false,
          },
        });

        // yield put(routerRedux.push("/login"));
      } else {
        Alert.error(message);
      }
    },
    *logOut({ payload }, { call, put }) {
      const { refresh_token } = payload;
      call(postLogOut, { refresh_token });
      localStorage.clear();
      yield put({ type: "reader/reset" });
      yield put(routerRedux.push("/login"));
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
