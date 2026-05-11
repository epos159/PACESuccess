(function () {
  var el = document.getElementById("footer-email");
  if (!el) return;
  var local = String.fromCharCode(
    109, 121, 112, 97, 99, 101, 115, 117, 99, 99, 101, 115, 115
  );
  var host = String.fromCharCode(103, 109, 97, 105, 108);
  var tld = String.fromCharCode(99, 111, 109);
  el.textContent =
    "Questions: " + local + String.fromCharCode(64) + host + String.fromCharCode(46) + tld;
})();
