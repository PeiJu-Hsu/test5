export function userLogin(content) {
  return {
    type: "User/UserLogin",
    payload: {
      content,
    },
  };
}
export function userLogout() {
  return {
    type: "User/UserLogout",
  };
}
