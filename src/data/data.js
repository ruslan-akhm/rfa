import person from "../img/person.jpg";

//Data separated into several objects for easier understanding
// + also mocking separate API calls to retrieve only required data

export const taxReturns = {
  taxYear: "2019",
  dateSubmitted: "16 December 2020",
  potentialEarning: "1000",
  transactions: [
    {
      id: "1",
      date: "01 May 2020",
      amount: "240.50",
      name: "BM",
      periodFrom: "2019",
      periodTo: "2019",
    },
    {
      id: "2",
      date: "07 May 2020",
      amount: "600.00",
      name: "JR",
      periodFrom: "2019",
      periodTo: "2019",
    },
    {
      id: "3",
      date: "16 May 2020",
      amount: "10520.00",
      name: "DB",
      periodFrom: "2016",
      periodTo: "2019",
    },
  ],
};

export const milestones = {
  rating: {
    current: 5.0,
    max: 5.0,
  },
  projects: {
    completed: 4,
    total: 8,
  },
  dataPoints: [1000, 1250, 1000, 1000, 1000, 750, 800, 750],
};

export const profile = {
  id: "1",
  lastName: "Black",
  firstName: "Annette",
  avatar: person,
  rating: "5.0",
  certificates: "6",
  projects: "45",
  taxReturns: taxReturns,
  milestones: milestones,
  location: "New York, NY",
  title: "Certified Public Accountant",
  type: "Professional",
  employment: "Employed",
  citizenship: "Nonresident alien",
  maritalStatus: "Single",
};

//Milestones projects and rating should be combined with projects and rating reflected at bottom-left card, if
//those are the same data. (I considered they are not since there are different number of projects reflected)

export const notifications = {
  new: [
    {
      text: "Lorem Ipsum",
      time: "hh:mm, mm/dd/yyyy",
    },
  ],
  past: [
    {
      text: "Loremed Ipsumed...",
      time: "hh:mm, mm/dd/yyyy",
    },
  ],
};
