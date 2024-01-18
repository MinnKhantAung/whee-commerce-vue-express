const USER_PREFIX = import.meta.env.VITE_PREFIX + "user";
const TOKEN_PREFIX = import.meta.env.VITE_PREFIX + "token";

export const storeUser = (user, token) => {
  console.log(user,token);
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
