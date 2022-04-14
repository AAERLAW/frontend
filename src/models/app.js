import { storageAppModel } from "../utils/constant";

let initialState = {
  collaspe: false,
  float: false,
  pageTitle: "",
  nightMode: false,
};

export default {
  namespace: "app",

  state: { ...initialState },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
      try {
        let app_model = localStorage.getItem(storageAppModel);
        if (app_model) {
          let data = JSON.parse(app_model);
          dispatch({
            type: "save",
            payload: data,
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
  },

  effects: {},

  reducers: {
    save(state, action) {
      const newPayload = { ...state, ...action.payload };
      try {
        let data = JSON.stringify(newPayload);
        localStorage.setItem(storageAppModel, data);
      } catch (err) {
        console.log(err);
      }
      return newPayload;
    },
    reset(state, action) {
      return { ...state, ...initialState };
    },
  },
};
