const taxReturns = [
  {
    taxYear: "2019",
    dateSubmitted: "16 December 2020",
    potentialEarning: "1000",
    transactions: [
      {
        date: "01 May 2020",
        amount: "240.50",
        name: "BM",
        periodFrom: "2019",
        periodTo: "2019",
      },
      {
        date: "07 May 2020",
        amount: "600.00",
        name: "JR",
        periodFrom: "2019",
        periodTo: "2019",
      },
      {
        date: "16 May 2020",
        amount: "10520.00",
        name: "DB",
        periodFrom: "2016",
        periodTo: "2019",
      },
    ],
  },
];

export const profile = {
  id: "1",
  lastName: "Black",
  firstName: "Annette",
  avatar: "",
  rating: "5.0",
  certificates: "6",
  projects: "45",
  taxReturns: taxReturns,
  location: "New York, NY",
  title: "Certified Public Accountant",
  type: "Professional",
  employment: "Employed",
  citizenship: "Nonresident alien",
  maritalStatus: "Single",
};

//Milestones projects and rating should be combined with projects and rating reflected at bottom-left card, if
//those are the same data. (I considered they are not since there are different projects amount reflected)

export const isOnline = true;
