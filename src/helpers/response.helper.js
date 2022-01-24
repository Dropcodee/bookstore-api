export function ResponseHelper(
  resData,
  totalRecords,
  message,
  statusCode,
  res
) {
  if (Array.isArray(resData)) {
    return res.status(statusCode).json({
      data: resData,
      totalRecords,
      message,
    });
  }
  return res.status(statusCode).json({
    ...resData._doc,
    totalRecords,
    message,
  });
}
