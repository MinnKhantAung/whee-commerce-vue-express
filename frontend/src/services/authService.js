const USER_PREFIX = import.meta.env.PREFIX + "user";
const TOKEN_PREFIX = import.meta.env.PREFIX + "token";

export const storeUser = (user, token) => {
  if (!user || !token) return null;
  localStorage.setItem(USER_PREFIX, JSON.stringify(user));
  localStorage.setItem(TOKEN_PREFIX, token);
};

export const getAuthUser = () => {
  const user = localStorage.getItem(USER_PREFIX);
  return JSON.parse(user);
};

export const isAuth = () => {
  if (!getAuthUser() && !getBarear()) return false;
  return true;
};

export const getBarear = () => {
  const token = localStorage.getItem(TOKEN_PREFIX);
  if (!token) return null;
  return "Bearer " + token;
};

export const clearAuth = () => {
  localStorage.removeItem(USER_PREFIX);
  localStorage.removeItem(TOKEN_PREFIX);
};
