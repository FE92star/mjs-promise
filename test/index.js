const excutor = () => {
  return new Promise((resolve, reject) => {
    resolve(11)
  })
}

excutor().then(res => {
  console.log(res)
})
