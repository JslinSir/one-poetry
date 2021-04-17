 

const promisify = wxFn => options =>
new Promise((resolve, reject) => {
  wxFn({
    ...options,
    success: resolve,
    fail: reject
  })
})

module.exports = promisify