// Firebase Config
var firebaseConfig = {
  apiKey: "AIzaSyAJjvlFmv4zdnCPSyu7QE1THcHezbkosME",
  authDomain: "qiu-database.firebaseapp.com",
  databaseURL: "https://qiu-database.firebaseio.com",
  projectId: "qiu-database",
  storageBucket: "qiu-database.appspot.com",
  messagingSenderId: "467537428588",
  appId: "1:467537428588:web:9994175cbc82354d96d849"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let postCollection = document.querySelector("#posts-collection");

const db = firebase.firestore();

function createPost(title, time, content) {
  let div = document.createElement("div");
  div.setAttribute("class", "col-md-4");

  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let small = document.createElement("small");

  h2.textContent = title;
  small.textContent = time;
  p.textContent = content;

  div.appendChild(h2);
  div.appendChild(small);
  div.appendChild(p);

  postCollection.appendChild(div);
}

// Get Posts
function getPosts() {
  db.collection("posts")
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(docs => {
        createPost(
          docs.data().postName,
          docs.data().createdAt,
          docs.data().postContent
        );
      });
    })
    .catch(err => {
      console.log(err);
    });
}

getPosts();
