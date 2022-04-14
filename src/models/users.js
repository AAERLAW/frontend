import { Alert } from "../components/Alert.components";

import { getUsers, postCreateUser, getRoles } from "../services/users";

const initialState = {
  usersTotal: 0,
  usersList: [],
  createUsersModal: false,

  rolesTotal: 0,
  rolesList: [],
};

export default {
  namespace: "users",

  state: { ...initialState },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },

  effects: {
    *getAllUsers({ payload }, { call, put }) {
      const { raw, success, message } = yield call(getUsers, payload);
      if (success) {
        const list = raw?.data?.items;
        const total = raw?.data?.pagination?.total_record;
        yield put({
          type: "save",
          payload: { usersList: list, usersTotal: total },
        });
      } else {
        Alert.error(message);
      }
    },
    *createUser({ payload }, { call, put, select }) {
      const { raw, success, message } = yield call(postCreateUser, payload);
      if (success) {
        const data = raw?.data;
        const oldList = yield select(({ users }) => users.usersList);
        const newList = [data, ...oldList];
        Alert.success("Successfully created regulation.");
        yield put({
          type: "save",
          payload: { createUsersModal: false, usersList: newList },
        });
      } else {
        Alert.error(message);
      }
    },

    *getAllRoles({ payload }, { call, put }) {
      const { raw, success, message } = yield call(getRoles, payload);
      if (success) {
        const data = raw?.data;
        const roles = data ? data.roles : [];
        yield put({ type: "save", payload: { rolesList: roles } });
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
