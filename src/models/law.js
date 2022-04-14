import { routerRedux } from "dva/router";
import { Alert } from "../components/Alert.components";

import {
  getLaws,
  postCreateLaw,
  getSingleLaw,
  deleteLaw,
} from "../services/law";

export default {
  namespace: "law",

  state: {
    lawsList: [],
    lawsTotal: 0,
    createLawModal: false,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },

  effects: {
    *getAllLaws({ payload }, { call, put }) {
      const { raw, success, message } = yield call(getLaws, payload);
      if (success) {
        const list = raw?.data?.items;
        const total = raw?.data?.pagination?.total_record;
        yield put({
          type: "save",
          payload: { lawsList: list, lawsTotal: total },
        });
      } else {
        Alert.error(message);
      }
    },
    *createLaw({ payload }, { call, put, select }) {
      const { raw, success, message } = yield call(postCreateLaw, payload);
      if (success) {
        const data = raw?.data;
        const oldList = yield select(({ law }) => law.lawsList);
        const newList = [data, ...oldList];

        Alert.success("Successfully created a law file.");
        yield put({
          type: "save",
          payload: { createLawModal: false, lawsList: newList },
        });
      } else {
        Alert.error(message);
      }
    },
    *deleteLaw({ payload }, { call, put, select }) {
      const { raw, success, message } = yield call(deleteLaw, payload);
      if (success) {
        const oldList = yield select(({ law }) => law.lawsList);
        let newList = [...oldList];
        const existIndex = newList.findIndex((item) => item.id === payload.id);
        if (existIndex > -1) {
          newList.splice(existIndex, 1);
          yield put({
            type: "save",
            payload: {
              lawsList: newList,
            },
          });
        }

        Alert.success("Successfully delete a law.");
      } else {
        Alert.error(message);
      }
    },
    *readLaw({ payload }, { call, put }) {
      const { raw, success, message } = yield call(getSingleLaw, payload);
      if (success) {
        console.log(raw);
        const data = {
          id: `Law-${raw?.data?.id}`,
          type: `Law`,
          data: raw?.data,
        };
        yield put({ type: "reader/addBook", payload: data });
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
