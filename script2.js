var b = document.createElement("div");
b.innerHTML = '<button id="btn"><h1>Start countdown</h1></button>';
b.setAttribute("id", "divi");
document.body.append(b);

document.getElementById("btn").addEventListener("click", function () {
  var a = document.body;
  var num = 10;

  var countdown = function () {
    if (num > 0) {
      a.innerHTML = '<div id="countdown"><h1>' + num + "</h1></div>"; // Set id for countdown div
      num--;
      setTimeout(countdown, 1000);
    } else {
      a.innerHTML = '<div id="countdown"><h1>Happy Independence Day</h1></div>'; // Set id for countdown div
    }
  };

  countdown();
});
