document.getElementById("startButton").addEventListener("click", function () {
  // Define the countdown function
  function countdown(num, callback) {
    if (num > 0) {
      // Display the countdown number on the webpage
      document.getElementById("countdown").innerText = num;
      // Hide the message
      document.getElementById("message").style.display = "none";
      // Show the countdown
      document.getElementById("countdown").style.display = "block";
      setTimeout(function () {
        countdown(num - 1, callback);
      }, 1000);
    } else {
      // Display "Happy Independence Day" on the webpage after countdown
      document.getElementById("message").innerText = "Happy Independence Day";
      // Hide the countdown
      document.getElementById("countdown").style.display = "none";
      // Show the message
      document.getElementById("message").style.display = "block";
      callback();
    }
  }

  // Start the countdown from 10
  countdown(10, function () {
    // Optional: Do something after the countdown finishes
  });
});
