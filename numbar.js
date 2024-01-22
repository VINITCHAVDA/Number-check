function clack() {
  var data = document.getElementById("data").value;
  if (data > 0) {
    btn = "is positive number";
  } else if (data < 0) {
    btn = " is nagative Number";
  } else if (data == 0) {
    btn = "is Zero";
  }
  document.getElementById("btn").innerText = data + btn;
}
