export const handleLogout = async () => {

  await fetch("http://localhost:3000/auth/logout", {
    method: "GET",
    credentials: "include",
  });

};

export const getCurrentUser = async () => {

  const response = await fetch("http://localhost:3000/auth/me", {
    method: "GET",
    credentials: "include",
  });

  return response

};