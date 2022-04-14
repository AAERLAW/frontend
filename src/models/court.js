import { routerRedux } from "dva/router";
import { Alert } from "../components/Alert.components";
import {
  getRules,
  getSingleRule,
  postRule,
  deleteRule,
  getCourts,
  postCourts,
  deleteCourt,
  getCourtForms,
  postCourtForms,
  deleteCourtForm,
  getCourtFormsItem,
  postCourtFormsItem,
  deleteCourtFormItem,
  getForms,
  getSingleForm,
  postForms,
  deleteForm,
} from "../services/court";

const initialState = {
  rules: [],
  rulesTotal: 0,
  createRuleModal: false,
  courts: [],
  courtsTotal: 0,
  createCourtModal: false,
  courtFormsList: [],
  courtFormsTotal: 0,
  createCourtFormModal: false,
  courtFormsItemList: [],
  courtFormsItemTotal: 0,
  createCourtFormItemModal: false,
  formList: [],
  formTotal: 0,
  createFormModal: false,
};
export default {
  namespace: "court",

  state: { ...initialState },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },

  effects: {
    *getAllRules({ payload }, { call, put }) {
      const { raw, success, message } = yield call(getRules, payload);
      if (success) {
        const list = raw?.data?.items;
        const total = raw?.data?.pagination?.total_record;
        yield put({
          type: "save",
          payload: { rules: list, rulesTotal: total },
        });
      }
    },
    *createRule({ payload }, { call, put, select }) {
      const { raw, success, message } = yield call(postRule, payload);
      if (success) {
        const data = raw?.data;
        const oldList = yield select(({ court }) => court.rules);
        const newList = [data, ...oldList];
        Alert.success("Successfully created court rule.");
        yield put({
          type: "save",
          payload: { createRuleModal: false, rules: newList },
        });
      } else {
        Alert.error(message);
      }
    },
    *deleteCourtRule({ payload }, { call, put, select }) {
      const { raw, success, message } = yield call(deleteRule, payload);
      if (success) {
        const oldList = yield select(({ court }) => court.rules);
        let newList = [...oldList];
        const existIndex = newList.findIndex((item) => item.id === payload.id);
        if (existIndex > -1) {
          newList.splice(existIndex, 1);
          yield put({
            type: "save",
            payload: {
              rules: newList,
            },
          });
        }
        Alert.success("Successfully delete a rule.");
      } else {
        Alert.error(message);
      }
    },

    *getAllCourts({ payload }, { call, put }) {
      const { raw, success, message } = yield call(getCourts, payload);
      if (success) {
        const list = raw?.data?.items;
        const total = raw?.data?.pagination?.total_record;
        yield put({
          type: "save",
          payload: { courts: list, courtsTotal: total },
        });
      }
    },
    *createCourt({ payload }, { call, put, select }) {
      const { raw, success, message } = yield call(postCourts, payload);
      if (success) {
        const data = raw?.data;
        const oldList = yield select(({ court }) => court.courts);
        const newList = [data, ...oldList];
        Alert.success("Successfully created court.");
        yield put({
          type: "save",
          payload: { createCourtModal: false, courts: newList },
        });
      } else {
        Alert.error(message);
      }
    },
    *deleteCourt({ payload }, { call, put, select }) {
      const { raw, success, message } = yield call(deleteCourt, payload);
      if (success) {
        const oldList = yield select(({ court }) => court.courts);
        let newList = [...oldList];
        const existIndex = newList.findIndex((item) => item.id === payload.id);
        if (existIndex > -1) {
          newList.splice(existIndex, 1);
          yield put({
            type: "save",
            payload: {
              courts: newList,
            },
          });
        }

        Alert.success("Successfully delete a court form.");
      } else {
        Alert.error(message);
      }
    },

    *getAllCourtForms({ payload }, { call, put }) {
      const { raw, success, message } = yield call(getCourtForms, payload);
      if (success) {
        const list = raw?.data?.items;
        const total = raw?.data?.pagination?.total_record;
        yield put({
          type: "save",
          payload: { courtFormsList: list, courtFormsTotal: total },
        });
      } else {
        Alert.error(message);
      }
    },
    *createCourtForm({ payload }, { call, put, select }) {
      const { raw, success, message } = yield call(postCourtForms, payload);
      if (success) {
        const data = raw?.data;
        const oldList = yield select(({ court }) => court.courtFormsList);
        const newList = [data, ...oldList];
        Alert.success("Successfully created a court form.");
        yield put({
          type: "save",
          payload: { createCourtFormModal: false, courtFormsList: newList },
        });
      } else {
        Alert.error(message);
      }
    },
    *deleteCourtForm({ payload }, { call, put, select }) {
      const { raw, success, message } = yield call(deleteCourtForm, payload);
      if (success) {
        const oldList = yield select(({ court }) => court.courtFormsList);
        let newList = [...oldList];
        const existIndex = newList.findIndex((item) => item.id === payload.id);
        if (existIndex > -1) {
          newList.splice(existIndex, 1);
          yield put({
            type: "save",
            payload: {
              courtFormsList: newList,
            },
          });
        }

        Alert.success("Successfully delete a court form.");
      } else {
        Alert.error(message);
      }
    },

    *getAllCourtFormsItem({ payload }, { call, put }) {
      const { raw, success, message } = yield call(getCourtFormsItem, payload);
      if (success) {
        const list = raw?.data?.items;
        const total = raw?.data?.pagination?.total_record;
        yield put({
          type: "save",
          payload: { courtFormsItemList: list, courtFormsItemTotal: total },
        });
      } else {
        Alert.error(message);
      }
    },
    *createCourtFormsItem({ payload }, { call, put, select }) {
      const { raw, success, message } = yield call(postCourtFormsItem, payload);
      if (success) {
        const data = raw?.data;
        const oldList = yield select(({ court }) => court.courtFormsItemList);
        const newList = [data, ...oldList];
        Alert.success("Successfully created court form item.");

        yield put({
          type: "save",
          payload: {
            createCourtFormItemModal: false,
            courtFormsItemList: newList,
          },
        });
      } else {
        Alert.error(message);
      }
    },
    *deleteCourtFormItem({ payload }, { call, put, select }) {
      const { raw, success, message } = yield call(
        deleteCourtFormItem,
        payload
      );
      if (success) {
        const oldList = yield select(({ court }) => court.courtFormsItemList);
        let newList = [...oldList];
        const existIndex = newList.findIndex((item) => item.id === payload.id);
        if (existIndex > -1) {
          newList.splice(existIndex, 1);
          yield put({
            type: "save",
            payload: {
              courtFormsItemList: newList,
            },
          });
        }

        Alert.success("Successfully delete a court form item.");
      } else {
        Alert.error(message);
      }
    },

    *getAllForms({ payload }, { call, put }) {
      const { raw, success, message } = yield call(getForms, payload);
      if (success) {
        const list = raw?.data?.items;
        const total = raw?.data?.pagination?.total_record;
        yield put({
          type: "save",
          payload: { formList: list, formTotal: total },
        });
      } else {
        Alert.error(message);
      }
    },
    *createForms({ payload }, { call, put, select }) {
      const { raw, success, message } = yield call(postForms, payload);
      if (success) {
        const data = raw?.data;
        const oldList = yield select(({ court }) => court.formList);
        const newList = [data, ...oldList];
        Alert.success("Successfully created a form.");
        yield put({
          type: "save",
          payload: { createFormModal: false, formList: newList },
        });
      } else {
        Alert.error(message);
      }
    },
    *deleteForm({ payload }, { call, put, select }) {
      const { raw, success, message } = yield call(deleteForm, payload);
      if (success) {
        const oldList = yield select(({ court }) => court.formList);
        let newList = [...oldList];
        const existIndex = newList.findIndex((item) => item.id === payload.id);
        if (existIndex > -1) {
          newList.splice(existIndex, 1);
          yield put({
            type: "save",
            payload: {
              formList: newList,
            },
          });
        }

        Alert.success("Successfully delete a form.");
      } else {
        Alert.error(message);
      }
    },

    *onRead({ payload }, { call, put }) {
      const { raw, success, message } = yield call(getSingleForm, payload);
      if (success) {
        console.log({ raw });
        const data = { ...raw.data, name: raw?.data?.title };
        const book = {
          id: `Form-${raw?.data?.id}`,
          type: `word`,
          data: data,
        };
        console.log({ book });
        yield put({ type: "reader/addBook", payload: book });
        yield put(routerRedux.push("/reader"));
      } else {
        Alert.error(message);
      }
    },

    *onReadRule({ payload }, { call, put }) {
      const { raw, success, message } = yield call(getSingleRule, payload);
      if (success) {
        const data = { ...raw.data, name: raw?.data?.title };
        const book = {
          id: `Court_Rule-${raw?.data?.id}`,
          type: `Court Rule`,
          data: data,
        };
        yield put({ type: "reader/addBook", payload: book });
        yield put(routerRedux.push("/reader"));
      } else {
        Alert.error(message);
      }
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
