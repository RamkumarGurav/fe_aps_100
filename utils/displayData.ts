export interface ContactUsInt {
  [key: string]: any;
}
export let contactUs: ContactUsInt = {
  address:
    "# 320, 5th Cross, 5th Block, Banashankari, 3rd Stage, 3rd Phase, Bengaluru-560085",
  phoneNumbers: ["+918026698908/09", "+918792539589"],
  email: "appolopublicsch@gmail.com",
};
export let navLinks = {
  home: { name: "HOME", link: "https://www.appolopublicschool.com/index.html" },
  aboutUs: {
    name: "ABOUT US",
    dropDown: [
      {
        name: "Overview",
        link: "https://www.appolopublicschool.com/about-us.html",
      },
      {
        name: "Our Vision / Mission",
        link: "https://www.appolopublicschool.com/mission-vision.html",
      },
      {
        name: "Admission Procedure",
        link: "https://www.appolopublicschool.com/admission-procedure.html",
      },
    ],
  },

  messages: {
    name: "MESSAGES",
    dropDown: [
      {
        name: "Chairperson Message",
        link: "https://www.appolopublicschool.com/chairmans-message.html",
      },
      {
        name: "Vice Chairperson Message",
        link: "https://www.appolopublicschool.com/vice-chairmans-message.html",
      },
      {
        name: "Principal's Message",
        link: "https://www.appolopublicschool.com/principals-message.html",
      },
      {
        name: "Trustee's Message",
        link: "https://www.appolopublicschool.com/trustees-message.html",
      },
    ],
  },
  academics: {
    name: "ACADEMICS",
    dropDown: [
      {
        name: "Curriculum",
        link: "https://www.appolopublicschool.com/curriculum.html",
      },
      {
        name: "Co-Curricular Activities",
        link: "https://www.appolopublicschool.com/co-curricular-activities.html",
      },
      {
        name: "School Timings",
        link: "https://www.appolopublicschool.com/school-timings.html",
      },
      {
        name: "Academic Calender",
        link: "https://www.appolopublicschool.com/academic-calender.html",
      },
      {
        name: "List of Holidays",
        link: "https://www.appolopublicschool.com/holiday-list.html",
      },
    ],
  },
  facilities: {
    name: "FACILITIES",
    link: "https://www.appolopublicschool.com/facilities.html",
  },

  gallery: {
    name: "GALLERY",
    dropDown: [
      { name: "2023-24", link: "/gallery/2023-24" },
      { name: "2022-23", link: "/gallery/2022-23" },
    ],
  },
  newsandevents: {
    name: "NEWS & EVENTS",
    link: "https://www.appolopublicschool.com/news-events.html",
  },
};

//{--------------footer--------------

export interface FooterContactUsInt {
  [key: string]: any;
}

export let footerQuickLinks = [
  { text: "Home", link: "https://www.appolopublicschool.com" },
  {
    text: "About Us",
    link: "https://www.appolopublicschool.com/about-us.html",
  },
  {
    text: "Messages",
    link: "https://www.appolopublicschool.com/chairmans-message.html",
  },
  {
    text: "Academics",
    link: "https://www.appolopublicschool.com/curriculum.html",
  },
  {
    text: "News & Events",
    link: "https://www.appolopublicschool.com/news-events.html",
  },
  {
    text: "Facilities",
    link: "https://www.appolopublicschool.com/facilities.html",
  },
  {
    text: "Gallery",
    link: "https://www.appolopublicschool.com/gallery-2022-23.html",
  },
  {
    text: "Contact Us",
    link: "https://www.appolopublicschool.com/contact-us.html",
  },
];

export let footerContactUs: FooterContactUsInt = {
  address:
    "# 320, 5th Cross, 5th Block, Banashankari, 3rd Stage, 3rd Phase, Bengaluru-560085",
  phoneNumbers: ["8026698908/09", "8792539589"],
  email: "appolopublicsch@gmail.com",
};

//--------------------------------------------------}

//{--------------HOME PAGE--------------
export const msgSlides = [
  {
    msg: "Appolo Public School is a school of more opportunities and develops the view of students and encourage them to develop good mannerism , good characters and best life skills. Our school Principal and teachers are very supportive, caring and passionate in moulding students. Our school motto stands for character,Conduct and culture. I love my school.",
    name: "Sumedha",
    type: "Student",
  },
  {
    msg: "I know the school from last 2002. My son studied here from pre-nursery to class 10 and presently my daughter is in class 10. The school academic results are very good and it's growing in positive direction. They are bringing out well cultured students. I am very thankful to management and team for maintaining high discipline and providing safety for girl students.",
    name: "B.S.Ravi Shankar",
    type: "Parent of Anjana",
  },
  {
    msg: "It gives me immense pleasure to talk about the school in which my daughter is studying. During this corona pandemic time with tight lockdown,  i don't think learning has stopped for my daughter and other children studying in the school. I see lot of commitment in all the teachers in taking classes for the children, keeping them engaged throughout the classes, asking questions etc. I have not seen any class being missed by any teacher and this has created lot of discipline in the children and interest to learn better and better. Thank you very much for all your sincere efforts to see that learning continues at Apollo no matter what the situation is.",
    name: "Renuka Prasad",
    type: "Father of Gowri TR",
  },
  {
    msg: "As a parent,I feel satisfied of my son being admitted to one the best school . The reasons are like *We can approach teachers to discuss about our children progress both in academics as well as in other school activities. *Teacher's identifies the students talent and encourage them to take part in co=curricular activities thus helping them to build team spirit, sportsmanship and many more good qualities. *The non-teaching staffs too creates hospitable environment in school. The most important thing is Apollo just does not create doctors or engineers but gives good citizens to our nation.",
    name: "Mahalingappa",
    type: "Father of Gagan",
  },
  {
    msg: "The school is trustworthy and has the best teachers who treats the students very well. It aims in developing a good character in students along with the students understand the subject properly. It also encourages other talents in students and has strict rules and regulations to follow. Encourages the students to participate in other activities and builds confidence. Overall the aschool and the teachers are the best.",
    name: "Gagan",
    type: "Student of Apollo",
  },
];
//--------------------------------------------------}

//{--------------CURRICULUM PAGE--------------
export interface curriculumDetailsInt {
  [key: string]: any;
}
export const curriculumDetails: curriculumDetailsInt = {
  curriculumData: {
    mainHeading: "Curriculum",
    list1: [
      "The Curriculum is Theme based",
      "Child Centered, focused on using a wide range of learning experiences",
      "Encourages an Integrated approach",
      "Provides scope for Contextualization",
      "Follows a Social Constructivist approach,encourages development of Life Skills",
    ],
    list2Heading: "The Curriculum document comprises of three parts:",
    list2: [
      "Part 1, Curriculum for Primary Classes (I-V)",
      "Part 2, Curriculum for Upper Primary Classes (VI-VIII)",
      "Part 3, Higher classes (IX & X)",
    ],
  },

  classSubjectsData: [
    {
      mainHeading: "PRIMARY",
      list1: [
        "English",
        "Kannada",
        "Hindi",
        "Mathematics",
        "Environmental science(I &II)",
        "Science(III –V)",
        "Social studies(III –V)",
        "Computer Studies",
        "Art education",
        "General Knowledge and value education",
      ],
    },
    {
      mainHeading: "UPPER PRIMARY",
      list1: [
        "English",
        "Kannada",
        "Hindi",
        "Mathematics",
        "History & Civics",
        "Geography",
        "Physics",
        "Chemistry",
        "Biology",
        "Computer Studies",
        "Art education",
        "Yoga",
        "General Knowledge and value education",
      ],
    },
    {
      mainHeading: "HIGHER CLASSES",
      list1: [
        "First Language(English)",
        "Second Language(Kannada)",
        "Mathematics",
        "History & Civics",
        "Geography",
        "Physics",
        "Chemistry",
        "Biology",
        "Computer Studies",
        "Art education",
        "Yoga",
        "General Knowledge and value education",
      ],
    },
  ],

  assessmentData: {
    mainHeading: "Assessment",
    mainTag: "The assessment for learning is done to",
    list1: [
      "Identify strengths ,weakness/learning gaps and problems faced by children;",
      "Provide timely ,corrective teaching-learning inputs to children to ensure their better learning in future;",
      "Monitor the progress of each child with reference to his/her previous performancd so as to develop every child to her/his full potential;",
      "Improve/modify teaching learning practices and methods and use of materials by teachers based on each child requirement and need;",
      "Monitor children’s learning and performance and;",
      "Provide data on children’s learning to each child/parents/school.",
    ],
  },

  toolsOfAssessmentData: {
    mainHeading: "Tools of Assessment",
    list1: [
      "Oral",
      "Written",
      "Teacher’s observation",
      "Child centered classroom activities such as discussion/dialogue, project work, model making/posters/charts, experimentation, group and individual activities, games/quizzes and maintaining every child’s portfolio, etc.",
    ],
  },
};

//--------------------------------------------------}

//{--------------CO CURRICULAR ACTIVITIES PAGE--------------
export interface cocurricularActivitiesDetailsInt {
  [key: string]: any;
}
export const cocurricularActivitiesDetails: cocurricularActivitiesDetailsInt = {
  cocurricularActivitiesData: {
    mainHeading: "Co-Curricular Activities",
    subHeading1:
      "Apart from the regular school exams the belw exams are conducted for the students every year.",
    list1: [
      "All India GK Exam by CHRD",
      "Science Olympiad",
      "Math Olympiad",
      "English Olympiad",
      "Reasoning and Aptitude Olympiad",
    ],
    subHeading2:
      "Appolo Public School is pride itself in offering the students a wide range of co-curricular activities to enhance the student’s life skill.",
  },
  listOfCocurricularActivitiesData: {
    mainHeading: "List of co-curricular activities",
    lists: [
      ["Music", "Dance", "Drama", "Yoga", "Karate"],
      [
        "Work education",
        "Gardening",
        "Science club",
        "Mathematics club",
        "Literary club",
      ],
      [
        "Heritage club",
        "Educational excursion",
        "Community service, volunteering activities",
        "NIE programs",
        "Scouts & Guides",
      ],
    ],
  },
};

//--------------------------------------------------}

//{--------------SCHOOL TIMINGS PAGE--------------
export const schoolTimingsDetails = {
  mainHeading: ["School", "Timings"],
  mondayToFridayTimingsData: {
    mainHeading: "MONDAY TO FRIDAY",
    list1: [
      { period: "ASSEMBLY", timing: "8:25am to 8:40am" },
      { period: "1st period", timing: "8:40am to 9:10am" },
      { period: "2nd period", timing: "9:10am to 10:00am" },
      { period: "Short break", timing: "10:00am to 10:10am" },
      { period: "3rd period", timing: "10:10am to 10:50am" },
      { period: "4th period", timing: "10:50am to 11:30am" },
      { period: "5th period", timing: "11:30am to 12:10pm" },
      { period: "Lunch Break", timing: "12:10pm to 12:50pm" },
      { period: "6th period", timing: "12:50pm to 1:30pm" },
      { period: "7th period", timing: "1:30pm to 2:10pm" },
      { period: "8th period", timing: "2:10pm to 2:50pm" },
    ],
  },
  saturdayTimingsData: {
    mainHeading: "SATURDAY (Class 6 -10)",
    list1: [
      { period: "ASSEMBLY", timing: "8:25am to 8:40am" },
      { period: "1st period", timing: "8:40am to 9:10am" },
      { period: "2nd period", timing: "9:10am to 10:00am" },
      { period: "Short break", timing: "10:00am to 10:10am" },
      { period: "3rd period", timing: "10:10am to 10:50am" },
      { period: "4th period", timing: "10:50am to 11:30am" },
      { period: "5th period", timing: "11:30am to 12:10pm" },
    ],
  },
};
//--------------------------------------------------}

//{---------------ACADEMIC CALENDER PAGE-------------
export const academicCalendarDetails = {
  mainHeadingList: ["Tentative Academic", "Calender 2021-22"],
  monthsList: [
    { month: "MAY", eventsList: ["Bridge Course"] },
    {
      month: "JUNE",
      eventsList: ["Orientation Programme", "Environmental Day"],
    },
    { month: "JULY", eventsList: ["Colors Day", "First assessment"] },
    { month: "AUGUST", eventsList: ["Independence Day Celebration"] },
    {
      month: "SEPTEMBER",
      eventsList: [
        "Presentation",
        "Grandparents Day",
        "Mid Term Examination",
        "Teacher’s Day",
      ],
    },
    { month: "OCTOBER", eventsList: ["Dasara"] },
    {
      month: "NOVEMBER",
      eventsList: ["Children’s Day", "Fruits and vegetables day"],
    },
    { month: "DECEMBER", eventsList: ["Christmas", "Second Assessment"] },
    {
      month: "JANUARY",
      eventsList: ["Presentation", "Republic Day", "Prize distribution"],
    },
    { month: "FEBRUARY", eventsList: ["Annual day/Sports Day"] },
    { month: "MARCH", eventsList: ["Annual Assessment"] },
    { month: "APRIL", eventsList: ["Result Announcement"] },
  ],
};

//--------------------------------------------------}

//----------------------HOLIDAYS-LIST PAGE----------------------------}
export const holidayCalendarDetails = {
  mainHeadingList: ["List of Holidays", "For the Academic Year 2021-22"],
  holidaysList: [
    { date: "12th May 2021", day: "Wednesday", event: "Eid ul Fitr" },
    { date: "21th July 2021", day: "Wednesday", event: "Bakrid" },
    {
      date: "15th August 2021",
      day: "Sunday",
      event: "Independence day (CELEBRATION)",
    },
    { date: "19th August 2021", day: "Thursday", event: "Muharram" },
    {
      date: "20th August 2021",
      day: "Friday",
      event: "Varamahalakshmi Festival",
    },
    { date: "30th August 2021", day: "Monday", event: "Krishnajanmashtami" },
    { date: "9th September 2021", day: "Thursday", event: "Gowri festival" },
    { date: "10th September 2021", day: "Friday", event: "Ganesha festival" },
    {
      date: "2nd October 2021",
      day: "Saturday",
      event: "Gandhi Jayanthi (CELEBRATION)",
    },
    {
      date: "14th October to 23rd October 2021",
      day: "Thursday to Saturday",
      event: "Dussehra holidays",
    },
    { date: "19th October 2021", day: "Tuesday", event: "Eid-Milad" },
    { date: "20th October 2021", day: "Wednesday", event: "Valmiki Jayanthi" },
    {
      date: "1st November 2021",
      day: "Monday",
      event: "Kannada Rajyothsava(CELEBRATION)",
    },
    {
      date: "4th November to 6th November 2021",
      day: "Thursday to Saturday",
      event: "Deepavali",
    },
    {
      date: "3rd December 2021",
      day: "Friday",
      event: "Kanakadasara Jayanthi",
    },
    { date: "24th December 2021", day: "Saturday", event: "Christmas" },
    { date: "14th January 2022", day: "Friday", event: "Makara sankranthi" },
    {
      date: "26th January 2022",
      day: "Wednesday",
      event: "Republic Day (CELEBRATION)",
    },
    { date: "1st March 2022", day: "Tuesday", event: "Mahashivarathri" },
    { date: "13th April 2022", day: "Wednesday", event: "Ugadi" },
    { date: "14th April 2022", day: "Thursday", event: "Ambedkar Jayanthi" },
    { date: "15th April 2022", day: "Friday", event: "Good Friday" },
  ],
};
