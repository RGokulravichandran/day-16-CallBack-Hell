var b = document.createElement("div");
b.innerHTML =
  '<button id = "btn" onclick="mainFunction()"><h1>START</h1></button>';
b.setAttribute("id", "divi");
document.body.append(b);

function mainFunction() {
  var a = document.body;
  setTimeout((f1) => {
    a.innerHTML = '<img  width="300" height="300" src="./gif/9.gif">';
    setTimeout((f2) => {
      a.innerHTML = '<img width="300" height="300" src="./gif/8.gif">';
      setTimeout((f3) => {
        a.innerHTML = '<img width="300" height="300" src="./gif/7.gif">';
        setTimeout((f4) => {
          a.innerHTML = '<img width="300" height="300" src="./gif/6.gif">';
          setTimeout((f5) => {
            a.innerHTML = '<img width="300" height="300" src="./gif/5.gif">';
            setTimeout((f6) => {
              a.innerHTML = '<img width="300" height="300" src="./gif/4.gif">';
              setTimeout((f7) => {
                a.innerHTML =
                  '<img width="300" height="300" src="./gif/3.gif">';
                setTimeout((f8) => {
                  a.innerHTML =
                    '<img width="300" height="300" src="./gif/2.gif">';
                  setTimeout((f8) => {
                    a.innerHTML =
                      '<img width="300" height="300" src="./gif/1.gif">';
                    setTimeout((f10) => {
                      a.innerHTML =
                        '<img width="300" height="300" src="./gif/hid1.gif">';
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}
