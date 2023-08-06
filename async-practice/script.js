// const button = document.querySelector("button");

// const eventPromise = addEventListenerPromise("click", button);

// eventPromise.then(e => {
//   console.log("clicked");
//   console.log(e);
// });

// function addEventListenerPromise(method, element) {
//   return new Promise((resolve, reject) => {
//     element.addEventListener(method, resolve);
//   });
// }

// function getValueWithDelayError(value, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(value);
//     }, delay);
//   });
// }

// function getValueWithDelay(value, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(value);
//     }, delay);
//   });
// }

// async function promiseFunc() {
//   try {
//     const message1 = await getValueWithDelay("Yay!", 500);
//     console.log(message1);
//     const message2 = await getValueWithDelay("Yay again!", 500);
//     console.log(message2);
//     const message3 = await getValueWithDelayError("Does this work?", 250);
//     console.log(message3);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     console.log("end");
//   }
// }

// promiseFunc();

const button = document.querySelector("button");

addEventListenerPromise("click", button).then(e => {
  console.log("hi from then");
  console.log(e);
});

function addEventListenerPromise(method, element) {
  return new Promise((resolve, reject) => {
    element.addEventListener(method, resolve);
  });
}

function getValueWithDelay(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

function getValueWithDelayError(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error");
    }, delay);
  });
}

async function doStuff() {
  for (let i = 0; i < 10; i++) {
    const value = await getValueWithDelay(i, 1000);
    console.log(value);
  }
}
doStuff();

// async function func() {
//   try {
//     const message1 = await getValueWithDelay("hi", 250);
//     console.log(message1);
//     const message2 = await getValueWithDelay("hi again", 250);
//     console.log(message2);
//     const message3 = await getValueWithDelayError("does this work?", 250);
//     console.log(message3);
//   } catch (e) {
//     console.error(e);
//   }
// }

// func();

//Fetch

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => {
//     return response.json();
//   })
//   .then(data =>
//     data.forEach(user => {
//       console.log(user.name);
//     })
//   );

async function fetchJson(url) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "New post",
      }),
    });
    if (response.ok) {
      const post = await response.json();
      console.log(post);
      // data.forEach(user => {
      //   console.log(user.name);
      // });
    } else {
      console.log("response.ok is " + response.ok);
    }
  } catch (e) {
    console.log(e);
  }
}
fetchJson("https://jsonplaceholder.typicode.com/posts");

const URL = "https://jsonplaceholder.typicode.com/comments?postId=1";

// Async Await
async function getComments(url) {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
}
getComments();

// Promise
fetch(URL)
  .then(res => {
    return res.json();
  })
  .then(data => {
    console.log(data);
  });
