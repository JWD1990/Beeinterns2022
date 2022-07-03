// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('into promise');
//     reject({ r: 'reject' })
//   }, 1500);
// });

// promise
//   .then((v) => {
//     return { x: v }
//   })
//   .catch((err) => {
//     console.log('catch 1');
//     throw new Error('new Error');
//   })
//   .then((v) => {
//     return v.x
//   })
//   .then((v) => {
//     console.log(v);
//   })
//   .catch((e) => {
//     console.log(e);
//     console.log('catch 2');
//   })


// const asyncFn = async () => {
//   try {
//     // await promise
//     await Promise.resolve('resolve 1')
//     console.log('after await');
//
//     return { s: 'async fn' }
//   } catch (e) {
//     console.log('catch into async fn');
//     return 88
//   }
// }
//
// asyncFn()
//   .then((v) => { console.log(v); })
