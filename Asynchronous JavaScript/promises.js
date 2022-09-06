//! Example 1
/* const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: "Technical Meeting",
      location: "Google Meet",
      time: "10:00 PM",
    };

    resolve(meetingDetails);
  } else {
    reject(new Error("Meeting already Scheduled !"));
  }
});

const addToCalender = (meetingDetails) => {
  const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;

  return Promise.resolve(calender);
};

meeting
  .then(addToCalender)
  .then((res) => {
    //resolved data
    console.log(JSON.stringify(res));
  })
  .catch((err) => {
    //rejected data
    console.log(err.message);
  }); */

//! Example 2

const promise1 = Promise.resolve(`Promise 1 resolved`);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Promise 2 Resolved`);
  }, 2000);
});

// promise1.then((res) => console.log(res));
// promise2.then((res) => console.log(res));

// To get all result in array

/* Promise.all([promise1, promise2]).then((res) => {
  console.log(res);
}); */

// Jeta age resolve hobe .
Promise.race([promise1, promise2]).then((res) => {
  console.log(res);
});
