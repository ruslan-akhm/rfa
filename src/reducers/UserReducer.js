import { LOGIN, LOGIN_SUCCESS } from "../actions/types";

export const initialState = {
  isAuthenticated: false,
  loading: false,
  profile: null,
  taxReturns: null,
  milestones: null,
  notifications: null,
};

export const UserReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return { ...state, loading: true };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        profile: payload.profile,
        taxReturns: payload.taxReturns,
        milestones: payload.milestones,
        notifications: payload.notifications,
      };

    default:
      return state;
  }
};
