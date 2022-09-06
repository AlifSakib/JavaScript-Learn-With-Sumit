let hasMeeting = true;
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

async function myMeeting() {
  try {
    const meetingDetails = await meeting;
    const calender = await addToCalender(meetingDetails);
    console.log(calender);
  } catch {
    console.log(`Something Wrong Happend`);
  }
}

myMeeting();

// !Why Async Await

/* 
? 1 -> JavaScript er Best Performance er jonno amra async await use korbo  
? 2 -> Jokhon i kono expenseve opperation korte hobe amra async await way te run korabo jeno blocking behaviour na thake .
? 3 -> Choto choto async kaj gulor order maintain korte callback use korte pari.
*/
