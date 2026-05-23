const handleSuccess = (res, message, statusCode, data = null) => {
  return res.status(statusCode).json({
    message,
    success: true,
    status: statusCode,
    data,
  });
};
const handleError = (res, message, statusCode = 500, data = null) => {
  return res.status(statusCode).json({
    message,
    success: false,
    status: statusCode,
    data,
  });
};
export { handleSuccess, handleError };
