const b = document.createElement("div");
b.innerHTML = '<button id="btn"><h1>START</h1></button>';
b.setAttribute("id", "divi");
document.body.append(b);

document.getElementById("btn").addEventListener("click", function () {
  const a = document.body;
  let num = 10;

  const countdown = function () {
    if (num > 0) {
      a.innerHTML = "<h1>" + num + "</h1>";
      num--;
      setTimeout(countdown, 1000);
    } else {
      a.innerHTML = "<h1>Happy Independence Day</h1>";
    }
  };

  countdown();
});
