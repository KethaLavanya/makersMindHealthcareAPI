import JsonWebToken from "jsonwebtoken";
import { handleError } from "../utils/responseHandle.js";
import asyncHandler from "../utils/asyncHandle.js";

const createJwtToken = (user) => {
  return JsonWebToken.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SEC_KEY,
    { expiresIn: process.env.JWT_EXPI },
  );
};
export default createJwtToken;
