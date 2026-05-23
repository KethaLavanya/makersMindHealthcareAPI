import { handleError } from "./responseHandle.js";
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => {
      console.log("Error in asyncHandler:", err);
      handleError(
        res,
        err && err.message ? err.message : "An unexpected error occurred",
        500,
        null,
        err,
      );
    });
  };
};

export default asyncHandler;
