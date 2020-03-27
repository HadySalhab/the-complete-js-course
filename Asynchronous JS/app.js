//Synchronous Code

// const first = () => {
//   console.log("Hey There");
//   second();
//   console.log("The End");
// };
// const second = () => {
//   console.log("second");
// };
// first();

//Asynchronous Code
// const first = () => {
//   console.log("Hey There");
//   second();
//   console.log("The End");
// };
// const second = () => {
//   setTimeout(() => {
//     console.log("Async Hey There");
//   }, 2000);
// };
// first();

//Callback Hell
// function getRecipe() {
//   setTimeout(() => {
//     const recipeID = [523, 883, 432, 974];
//     console.log(recipeID);

//     setTimeout(
//       id => {
//         const recipe = { title: "recipe", publisher: "Jonas" };
//         console.log(`${id}: ${recipe.title}`);

//         setTimeout(
//           author => {
//             const recipe2 = { title: "Pizza", publisher: "Jonas" };
//             console.log(recipe2);
//           },
//           1000,
//           recipe.publisher
//         );
//       },
//       1000,
//       recipeID[2]
//     );
//   }, 1500);
// }
// getRecipe();

//Promises

// function getRecipe() {
//   setTimeout(() => {
//     const recipeID = [523, 883, 432, 974];
//     console.log(recipeID);
//   }, 1500);
// }

const getIdsPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([523, 883, 432, 974]);
    }, 1500);
  });
};

const getRecipe = recID => {
  return new Promise((resolve, reject) => {
    setTimeout(
      ID => {
        const recipe = { title: "recipe", publisher: "Jonas" };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      recID
    );
  });
};

const getRelated = publisher => {
  return new Promise((resolve, reject) => {
    setTimeout(
      pub => {
        const recipe = { title: `pizza`, publisher: `Jonas` };
        resolve(recipe);
      },
      1500,
      publisher
    );
  });
};

//Consumtion with promises
getIdsPromise()
  //data is the return promise from getIdsPromise
  .then(data => {
    console.log(data);
    return getRecipe(data); //return new promise
  })
  //recipeDetail is the return promise from getRecipe
  .then(recipeDetail => {
    console.log(recipeDetail);
    return getRelated(recipeDetail);
  })
  //recipe is the return promise from getRelated
  .then(recipe => console.log(recipe))
  .catch(err => console.log(err));

//Async await

async function getRecipeAW() {
  const IDs = await getIdsPromise(); //will wait for the promise to resolve and returns.
  const recipeDetail = await getRecipe(IDs);
  const related = await getRelated(recipeDetail);
  return recipeDetail;
}

getRecipeAW();
