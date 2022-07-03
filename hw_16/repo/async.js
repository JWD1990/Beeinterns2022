const RESULT = {
  resolve: 'Promise fulfilled',
  reject: 'reject rejected',
};

const callPromise = () => new Promise((resolve, reject) => {
  const success = (Math.floor(Math.random() * 200) + 1 ) > 100;
  setTimeout(() => {
    if (success) {
      resolve(RESULT.resolve);
    } else {
      reject(new Error(RESULT.reject));
    }
  }, 900);
});

const task1 = () => {
    callPromise()
    .then(res => {
      console.log(res)
    })
    .catch((err) =>
    alert('Произошла ошибка')
    )
}
// task1()

const task2 = async () =>{
  try {
    let promise = await callPromise()
    if (promise === RESULT.resolve){
      console.log(promise)
    }
  }catch (err){
    alert('Произошла ошибка')
  }
}

// task2()