function handleErrors(res, error) {
  const errors = [];
  if (error.response) {
    res.json({
      errors: [
        ...errors,
        {
          msg: `Please try again to enter correct text`,
        },
      ],
    });
  } else if (error.request) {
    res.json({
      errors: [
        ...errors,
        {
          msg: 'Problem with request',
        },
      ],
    });
  } else {
    res.json({
      errors: [
        ...errors,
        {
          msg: `Error ${error.message}`,
        },
      ],
    });
  }
}

module.exports = handleErrors;
