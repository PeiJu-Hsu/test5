export function userLogin(content) {
  return {
    type: "User/UserLogin",
    payload: {
      content,
    },
  };
}
