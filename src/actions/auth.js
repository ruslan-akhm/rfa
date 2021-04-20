import { LOGIN, LOGIN_SUCCESS, WELCOME } from "./types";

import { profile, taxReturns, notifications, milestones } from "../data/data";

export const login = async dispatch => {
  try {
    const timeout = ms => {
      dispatch({ type: LOGIN });
      return new Promise(resolve => setTimeout(resolve, ms));
    };
    await timeout(600);

    const welcome = ms => {
      dispatch({
        type: WELCOME,
        payload: {
          profile: profile,
        },
      });
      return new Promise(resolve => setTimeout(resolve, ms));
    };
    await welcome(900);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        taxReturns: taxReturns,
        notifications: notifications,
        milestones: milestones,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
