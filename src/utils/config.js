let BASE_URL = `https://www.aaerlawapp.com`;
let SERVER = `/api`;

// PAYSTACK DETAILS DEMO
// let PAYSTACK_KEY = `pk_test_e54eee45276d2070cae3c28ba2e9ec0c255c347a`;
// let PAYSTACK_BASIC = `PLN_1wo3wx9oqh1pva9`;
// let PAYSTACK_BASIC_YEARLY = `PLN_rhsv979y7vsyvzl`;
// let PAYSTACK_PROF = `PLN_3u0wfrsnvelhfes`;
// let PAYSTACK_PROF_YEARLY = `PLN_8bcu2b8b7x106yp`;

// PAYSTACK DETAILS LIVE
let PAYSTACK_KEY = `pk_live_c356a8c846ccb3fbd05f71b2240e874c2531a9d6`;
let PAYSTACK_BASIC = `PLN_z3o30mdshhiahdq`;
let PAYSTACK_BASIC_YEARLY = `PLN_9hwm54svjh4ud5f`;
let PAYSTACK_PROF = `PLN_1nscvuqx394to86`;
let PAYSTACK_PROF_YEARLY = `PLN_3lupdof7km8qih5`;

module.exports = {
  endpoint: `${BASE_URL}${SERVER}`,
  BASE_URL,
  SERVER,
  PAYSTACK_KEY,
  PAYSTACK_BASIC,
  PAYSTACK_BASIC_YEARLY,
  PAYSTACK_PROF,
  PAYSTACK_PROF_YEARLY,
};
