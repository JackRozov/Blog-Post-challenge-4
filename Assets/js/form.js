function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  //- Using a function pointer:
document.getElementById("clickMe").onclick = doFunction;

//- Using an anonymous function:
document.getElementById("clickMe").onclick = function () { alert('hello!'); };

var el = document.getElementById("clickMe");
if (el.addEventListener)
    el.addEventListener("click", doFunction, false);
else if (el.attachEvent)
    el.attachEvent('onclick', doFunction);