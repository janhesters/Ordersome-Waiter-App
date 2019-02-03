const token = "abcdefghijklmnopqrstuvwxyz0123456789";
const credentials = {
  username: "session",
  password: token
};

export const setGenericPassword = jest.fn(
  (username, password) => new Promise((resolve, reject) => resolve(true)) // eslint-disable-line no-unused-vars
);

export const getGenericPassword = jest.fn(
  () => new Promise((resolve, reject) => resolve(credentials)) // eslint-disable-line no-unused-vars
);

export const resetGenericPassword = jest.fn(() => new Promise((resolve, reject) => resolve(true))); // eslint-disable-line no-unused-vars
