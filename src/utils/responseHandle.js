const handleAccess = (res, message, statusCode, data = null) => {
  return res.status(statusCode).json({
    message,
    success: true,
    status: statusCode,
    data,
  });
};

const handleError = (res, message, statusCode = 500) => {
  return res.status(statusCode).json({
    message,
    success: false,
    status: statusCode,
    data,
  });
};

export { handleAccess, handleError };
