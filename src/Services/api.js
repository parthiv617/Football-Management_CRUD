import baseurl from "./baseurl";
import commonApi from "./commonapi";

// get all players
export const fetchPlayers = async () => {
  return await commonApi("GET", `${baseurl}/players`, {});
};

// create new player
export const createPlayer = async (data) => {
  return await commonApi("POST", `${baseurl}/players`, data);
};

// update player
export const updatePlayer = async (id, data) => {
  return await commonApi("PUT", `${baseurl}/players/${id}`, data);
};

// delete player
export const deletePlayer = async (id) => {
  return await commonApi("DELETE", `${baseurl}/players/${id}`, {});
};
