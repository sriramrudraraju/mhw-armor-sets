// simulate all decorations api

import decoration_1 from "../data/decorations/1";
import decoration_70 from "../data/decorations/70";

// hard coding api response
const success = {
  status: 200,
  message: "success decorations fetching",
  data: [{ ...decoration_1 }, { ...decoration_70 }]
};

// hard coding error response
const error = {
  status: 500,
  message: "error decorations fetching"
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
