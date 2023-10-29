const initialState = {
  profile: {
    name: "",
    age: 0,
    email: "",
    login: false,
  },
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "User/UserLogin": {
      return {
        profile: {
          name: action.payload.content.name,
          age: action.payload.content.age,
          email: action.payload.content.email,
          login: true,
        },
      };
    }
    case "User/UserLogout": {
      return {
        profile: initialState,
      };
    }
  }
  return state;
}
