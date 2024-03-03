export const SET_NAME = "SET_NAME";
export const SET_GENDER = "SET_GENDER";
export const SET_AGE = "SET_AGE";
export const SET_HEIGHT = "SET_HEIGHT";
export const SET_WEIGHT = "SET_WEIGHT";

export const setName = (name) => ({
  type: SET_NAME,
  payload: name,
});

export const setGender = (gender) => ({
  type: SET_GENDER,
  payload: gender,
});

export const setAge = (age) => ({
  type: SET_AGE,
  payload: age,
});

export const setHeight = (height) => ({
  type: SET_HEIGHT,
  payload: height,
});

export const setWeight = (weight) => ({
  type: SET_WEIGHT,
  payload: weight,
});
