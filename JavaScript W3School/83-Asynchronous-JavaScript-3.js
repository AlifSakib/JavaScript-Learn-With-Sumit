// 83-Asynchronous-JavaScript-3.js

const paymentSuccess = true;
const marks = 90;

function enroll(callback) {
  console.log("Course enrollment is in progress");

  setTimeout(function () {
    if (paymentSuccess) {
      callback();
    } else {
      console.log("Payment Failed");
    }
  }, 2000);
}

function progress(callback) {
  console.log("Course on Progress...");

  setTimeout(function () {
    if (marks >= 80) {
      callback();
    } else {
      console.log("You could not get enough mark to get the certificate");
    }
  }, 3000);
}

function getCertificate() {
  console.log("Preparing Your Certificate");

  setTimeout(function () {
    console.log("Congrats ! ");
  }, 1000);
}
enroll(() => {
  progress(getCertificate);
});
