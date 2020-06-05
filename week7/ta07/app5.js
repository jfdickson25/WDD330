import Hikes from './hikes.js';
import {
  Comment
} from './comments.js';

let commentArray = [];

//on load grab the array and insert it into the page
const myHikes = new Hikes('hikes');
window.addEventListener('load', () => {
  myHikes.showHikeList();

  document.getElementById('commentSection').innerHTML =  `<label for="hike">Hike</label>
  <br>
  <select name="hike" id="hike">
    <option value="1">Bechler Falls</option>
    <option value="2">Teton Canyon</option>
    <option value="3">Denanda Falls</option>
  </select>
  <br>
  <label for="comment">Comment:</label>
  <br>
  <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
  <br>
  <button style='margin-bottom: 20px' id='button' type='button'>Submit Comment</button>`;




  // Check if the local comment array is empty (new session)
  if (commentArray.length == 0) {
    if (localStorage.AllComments) {
      // If there are comments in local storage set the local comment to the local storage array
      commentArray = JSON.parse(localStorage.AllComments);
      commentArray.forEach(comment => {
        displayAllComments(comment);
      });
    }
  }

  // New comment appended to comment list
  document.getElementById('button').addEventListener('touchend', () => {
    displayNewComments();
  });


  document.getElementById('back').addEventListener('touchend', allHikeEventListener);

  // Hike 1 event listener
  document.getElementById('hike1').addEventListener('touchend', hike1EventListener);

  // Hike 2 event listener
  document.getElementById('hike2').addEventListener('touchend', hike2EventListener);

  // Hike 3 event listener
  document.getElementById('hike3').addEventListener('touchend', hike3EventListener);
});

function hike1EventListener() {
  console.log("Get comments for hike 1");
  document.getElementById('commentList').innerHTML = '';
  commentArray = JSON.parse(localStorage.AllComments);
  commentArray.forEach(comment => {
    if (comment.hikeId == '1') {
      displayHikeComments(comment);
    }
  });
   document.getElementById('commentSection').innerHTML = '';
}

function hike2EventListener() {
  console.log("Get comments for hike 2");
    document.getElementById('commentList').innerHTML = '';
    commentArray = JSON.parse(localStorage.AllComments);
      commentArray.forEach(comment => {
        if(comment.hikeId == '2') {
          displayHikeComments(comment);
        }
      });
       document.getElementById('commentSection').innerHTML = '';

}

function hike3EventListener() {
  console.log("Get comments for hike 3");
    document.getElementById('commentList').innerHTML = '';
    commentArray = JSON.parse(localStorage.AllComments);
      commentArray.forEach(comment => {
        if(comment.hikeId == '3') {
          displayHikeComments(comment);
        }
      });
       document.getElementById('commentSection').innerHTML = '';

}

function allHikeEventListener() {
  document.getElementById('commentList').innerHTML = '';
  commentArray = JSON.parse(localStorage.AllComments);
      commentArray.forEach(comment => {
        displayAllComments(comment);
      });
  
      document.getElementById('commentSection').innerHTML =  `<label for="hike">Hike</label>
      <br>
      <select name="hike" id="hike">
        <option value="1">Bechler Falls</option>
        <option value="2">Teton Canyon</option>
        <option value="3">Denanda Falls</option>
      </select>
      <br>
      <label for="comment">Comment:</label>
      <br>
      <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
      <br>
      <button style='margin-bottom: 20px' id='button' type='button'>Submit Comment</button>`;
      document.getElementById('button').addEventListener('touchend', displayNewComments);
}








function displayNewComments() {
  // Get the values
  let hike = document.getElementById('hike').value;
  let comment = document.getElementById('comment').value;


  // Create a new comment list item
  const commentToAdd = document.createElement('li');
  commentToAdd.style.listStyle = 'none';
  commentToAdd.style.border = '2px solid';
  commentToAdd.style.padding = '15px';
  commentToAdd.style.marginTop = '10px';
  commentToAdd.style.width = '80%';

  // Create new comment object from comment class
  let newComment = new Comment(hike, comment);

  // Push new comment onto array
  commentArray.push(newComment);

  // Save all comments back into local storage
  localStorage.AllComments = JSON.stringify(commentArray);

  let hikeName;

  switch (newComment.hikeId) {
    case '1':
      hikeName = "Bechler Falls";
      break;
    case '2':
      hikeName = "Teton Canyon";
      break;
    case '3':
      hikeName = "Denanda Falls";
  }

  // Define inner html of new comment to add
  commentToAdd.innerHTML = `<h3>${hikeName}</h3><p>${newComment.comment}</p><p><b>${newComment.createdDate}</b></p>`;

  // Append new comment to comment list
  let commentList = document.getElementById('commentList');
  commentList.appendChild(commentToAdd);
}

function displayAllComments(comment) {
  console.log("Here is the comment!: ", comment);
  const commentToAdd = document.createElement('li');
  commentToAdd.style.listStyle = 'none';
  commentToAdd.style.border = '2px solid';
  commentToAdd.style.padding = '15px';
  commentToAdd.style.marginTop = '10px';
  commentToAdd.style.width = '80%';
  let hikeName;
  switch (comment.hikeId) {
    case '1':
      hikeName = "Bechler Falls";
      break;
    case '2':
      hikeName = "Teton Canyon";
      break;
    case '3':
      hikeName = "Denanda Falls";
  }

  commentToAdd.innerHTML = `<h3>${hikeName}</h3><p>${comment.comment}</p><p><b>${comment.createdDate}</b></p>`;
  let commentList = document.getElementById('commentList');
  commentList.appendChild(commentToAdd);

  // Hike 1 event listener
  document.getElementById('hike1').addEventListener('touchend', hike1EventListener);

  // Hike 2 event listener
  document.getElementById('hike2').addEventListener('touchend', hike2EventListener);

  // Hike 3 event listener
  document.getElementById('hike3').addEventListener('touchend', hike3EventListener);
}



function displayHikeComments(comment) {
  console.log("Comments for a specific Hike: ", comment);
  const commentToAdd = document.createElement('li');
  commentToAdd.style.listStyle = 'none';
  commentToAdd.style.border = '2px solid';
  commentToAdd.style.padding = '15px';
  commentToAdd.style.marginTop = '10px';
  commentToAdd.style.width = '80%';

  commentToAdd.innerHTML = `<p>${comment.comment}</p><p><b>${comment.createdDate}</b></p>`;
  let commentList = document.getElementById('commentList');
  commentList.appendChild(commentToAdd);

  document.getElementById('back').addEventListener('touchend', allHikeEventListener);
}