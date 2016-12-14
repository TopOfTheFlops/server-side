const successMessage = (message) => {
  const obj = {
    success: message
  }
  return obj
}

const errorMessage = (message) => {
  const obj = {
    error: message
  }
  return obj
}

module.exports = {
  successMessage,
  errorMessage
}
