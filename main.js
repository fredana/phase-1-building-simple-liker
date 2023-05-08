// Defining text characters for the empty and full hearts for you to use later.
// const EMPTY_HEART = '♡'
// const FULL_HEART = '♥'

// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

// function mimicServerCall(url="http://mimicServer.example.com", config={}) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       let isRandomFailure = Math.random() < .2
//       if (isRandomFailure) {
//         reject("Random server error. Try again.");
//       } else {
//         resolve("Pretend remote server notified of action!");
//       }
//     }, 300);
//   });
// }




//COMPLETE CODE

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Select the elements we need
const errorModal = document.querySelector('#modal');
const errorMessage = document.querySelector('#modal-message');

// Add the .hidden class to the error modal in the HTML so it does not appear when the page first loads
errorModal.classList.add('hidden');

// Add click event listeners to all the empty hearts on the page
const emptyHearts = document.querySelectorAll('.like-glyph');
emptyHearts.forEach(emptyHeart => {
  emptyHeart.addEventListener('click', function() {
    // Invoke mimicServerCall to simulate making a server request
    mimicServerCall()
      .then(() => {
        // When the "server" returns a success status:
        // Change the heart to a full heart
        emptyHeart.textContent = FULL_HEART;
        // Add the .activated-heart class to make the heart appear red
        emptyHeart.classList.add('activated-heart');
      })
      .catch((error) => {
        // When the "server" returns a failure status:
        // Display the error modal by removing the .hidden class
        errorModal.classList.remove('hidden');
        // Display the server error message in the modal
        errorMessage.textContent = error;
        // Use setTimeout to hide the modal after 3 seconds (add the .hidden class)
        setTimeout(() => {
          errorModal.classList.add('hidden');
        }, 3000);
      });
  });
});

// Add click event listeners to all the full hearts on the page
const fullHearts = document.querySelectorAll('.activated-heart');
fullHearts.forEach(fullHeart => {
  fullHeart.addEventListener('click', function() {
    // Change the heart back to an empty heart
    fullHeart.textContent = EMPTY_HEART;
    // Remove the .activated-heart class
    fullHeart.classList.remove('activated-heart');
  });
});

