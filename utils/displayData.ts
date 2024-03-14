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
