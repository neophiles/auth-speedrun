import api from './axios';

export const getUser = async (token) => {
  const res = await api.get("/auth/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
