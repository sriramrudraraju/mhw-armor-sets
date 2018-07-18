// simulate all armor sets api

import set_1 from "../data/sets/1";
import set_20 from "../data/sets/20";

// hard coding api response
const success = {
  status: 200,
  message: "success armor sets fetching",
  data: [{ ...set_1 }, { ...set_20 }]
};

// hard coding error response
const error = {
  status: 500,
  message: "error armor sets fetching"
};

export default (status: string = "success"): Promise<{} | string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === "success") {
        return resolve(success);
      } else {
        return reject(error);
      }
    }, 1000);
  });
};
