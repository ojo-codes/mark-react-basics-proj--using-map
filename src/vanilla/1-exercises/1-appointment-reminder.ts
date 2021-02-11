import { create } from "domain";

interface appointmentInt {
  event: string,
  time: string,
};

function appointmentReminder(listOfAppointment: appointmentInt[]) {
  return listOfAppointment.map(({event, time}: appointmentInt) => `Reminder: you have ${event} starting at ${time}`);
};


// const createSentence = ({event, time}: appointmentInt) => `Reminder: you have ${event} starting at ${time}`;

export { appointmentReminder };
