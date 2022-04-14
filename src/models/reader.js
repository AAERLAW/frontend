import { routerRedux } from "dva/router";
import { storageReaderModel } from "../utils/constant";

const initialState = {
  bookList: [],
  activeTab: "",
  editFormModal: false,
  editFormData: {},
};

export default {
  namespace: "reader",

  state: {
    ...initialState,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
      try {
        let reader_model = localStorage.getItem(storageReaderModel);
        if (reader_model) {
          let data = JSON.parse(reader_model);
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
      return { ...state, ...action.payload };
    },
    addBook(state, action) {
      let newBookList = [...state.bookList];

      const existingIndex = newBookList.findIndex(
        (item) => item?.id === action?.payload?.id
      );

      !(existingIndex > -1) && newBookList.push(action.payload);

      const newPayload = {
        ...state,
        bookList: [...newBookList],
        activeTab: action?.payload?.id,
      };

      try {
        let data = JSON.stringify(newPayload);
        localStorage.setItem(storageReaderModel, data);
      } catch (err) {
        console.log(err);
      }

      return newPayload;
    },
    reset(state, action) {
      return { ...initialState };
    },
  },
};
