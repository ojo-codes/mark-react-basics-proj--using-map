import { appointmentReminder } from "./1-appointment-reminder";

test("appointmentReminder - reports on appointments and when they are scheduled", () => {
  const input = [
    { event: "breakfast", time: "9am" },
    { event: "standup", time: "9.30am" },
    { event: "book club", time: "12pm" },
    { event: "office hour", time: "2pm" },
    { event: "reflections", time: "5.30pm" },
  ];
  expect(appointmentReminder(input)).toStrictEqual([
    "Reminder: you have breakfast starting at 9am",
    "Reminder: you have standup starting at 9.30am",
    "Reminder: you have book club starting at 12pm",
    "Reminder: you have office hour starting at 2pm",
    "Reminder: you have reflections starting at 5.30pm",
  ]);
});
