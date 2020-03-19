// function getData(url) {
//   fetch(url)
//     .then(result => {
//       console.log(result);
//       return result.json(); //to convert the result to json
//     })
//     .then(data => {
//       data.forEach(post => {
//         console.log(post.title);
//       });
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }
// getData("https://jsonplaceholder.typicode.com/poxts");

async function getData(url) {
  try {
    const result = await fetch(url);
    const data = await result.json();
    data.forEach(post => {
      console.log(post.title);
    });
    return data;
  } catch (exception) {
    console.log(exception);
  }
}

getData("https://jsonplaceholder.typicode.com/poxts")
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
