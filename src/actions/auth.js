import { LOGIN, LOGIN_SUCCESS } from "./types";

import { profile, taxReturns, notifications, milestones } from "../data/data";

export const login = async dispatch => {
  try {
    const timeout = ms => {
      dispatch({ type: LOGIN });
      return new Promise(resolve => setTimeout(resolve, ms));
    };
    await timeout(800);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        profile: profile,
        taxReturns: taxReturns,
        notifications: notifications,
        milestones: milestones,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
