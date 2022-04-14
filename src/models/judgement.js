import { routerRedux } from "dva/router";
import { Alert } from "../components/Alert.components";

import {
  getReports,
  postReports,
  getSingleReport,
  putReports,
  deleteReport,
} from "../services/judgement";

const initialState = {
  judgementList: [],
  judgementTotal: 0,
  createJudgementModal: false,
  editMode: false,
  editData: {},
};
export default {
  namespace: "judgement",

  state: { ...initialState },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },

  effects: {
    *getAllJudgements({ payload }, { call, put }) {
      const { raw, success, message } = yield call(getReports, payload);
      if (success) {
        const list = raw?.data?.items;
        const total = raw?.data?.pagination?.total_record;
        yield put({
          type: "save",
          payload: { judgementList: list, judgementTotal: total },
        });
      } else {
        Alert.error(message);
      }
    },
    *createJudgement({ payload }, { call, put, select }) {
      const { raw, success, message } = yield call(postReports, payload);
      if (success) {
        const data = raw?.data;
        const oldList = yield select(
          ({ judgement }) => judgement.judgementList
        );
        const newList = [data, ...oldList];
        Alert.success("Successfully created a report.");
        yield put({
          type: "save",
          payload: { createJudgementModal: false, judgementList: newList },
        });
      } else {
        Alert.error(message);
      }
    },
    *editJudgement({ payload }, { call, put, select }) {
      const { raw, success, message } = yield call(putReports, payload);
      if (success) {
        let newPayload = {
          createJudgementModal: false,
        };
        console.log(raw);
        const data = raw?.data;
        console.log(raw);
        const oldList = yield select(
          ({ judgement }) => judgement.judgementList
        );
        let newList = [...oldList];

        const existIndex = newList.findIndex((item) => item.id === data.id);
        console.log("existIndex", existIndex);
        if (existIndex > -1) {
          newList = newList.splice(existIndex, 1, data);
          newPayload["judgementList"] = newList;
        }

        Alert.success("Successfully edited a report.");
        yield put({
          type: "save",
          payload: newPayload,
        });
      } else {
        Alert.error(message);
      }
    },
    *deleteJudgements({ payload }, { call, put, select }) {
      const { raw, success, message } = yield call(deleteReport, payload);
      if (success) {
        const oldList = yield select(
          ({ judgement }) => judgement.judgementList
        );
        let newList = [...oldList];
        const existIndex = newList.findIndex((item) => item.id === payload.id);
        if (existIndex > -1) {
          newList.splice(existIndex, 1);
          yield put({
            type: "save",
            payload: {
              judgementList: newList,
            },
          });
        }

        Alert.success("Successfully delete a report.");
      } else {
        Alert.error(message);
      }
    },
    *onRead({ payload }, { call, put }) {
      const { raw, success, message } = yield call(getSingleReport, payload);
      if (success) {
        const data = {
          summary: payload.summary,
          ...raw.data,
          name: raw?.data?.case_title,
        };
        const book = {
          id: `Report-${raw?.data?.id}`,
          type: `Report`,
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
