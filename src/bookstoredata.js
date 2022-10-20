//this function getch a list of books.
export function getBookShopData() {
  return bookShopData;
}

//this funciton fetch a single book by its ID 
export function getBook(bookID) {
  return bookShopData.find(book => book.bookID == bookID);
}

//This array of object contains the books. Each book is an object with properties
const bookShopData = [
  {
    bookID: 1,
    title: "Designing User Experience",
    subTitle: "A Guide to Hci, UX and Interaction Design",
    desc: "Designing User Experience presents a comprehensive introduction to the practical issue of creating interactive systems, services and products from a human-centred perspective. It develops the principles and methods of human-computer interaction (HCI) and Interaction Design (ID) to deal with the design of twenty-first-century computing and the demands for improved user experience (UX). It brings together the key theoretical foundations of human experiences when people interact with and through technologies. It explores UX in a wide variety of environments and contexts.",
    image: "https://images-na.ssl-images-amazon.com/images/I/41B5mynRvDL._SX366_BO1,204,203,200_.jpg",
    author: "David Benyon",
    price: "500",
    category: "bestsellers",
    isFavourite: true,
    isAudioBook: false,
    isEbook: true,
    isPaperBook: true

  },
  {
    bookID: 2,
    title: "Interaction Design",
    subTitle: "Beyond Human-Computer Interaction",
    desc: "Hugely popular with students and professionals alike, the Fifth Edition of Interaction Design is an ideal resource for learning the interdisciplinary skills needed for interaction design, human-computer interaction, information design, web design, and ubiquitous computing. New to the fifth edition: a chapter on data at scale, which covers developments in the emerging fields of 'human data interaction' and data analytics. The chapter demonstrates the many ways organizations manipulate, analyze, and act upon the masses of data being collected with regards to human digital and physical behaviors, the environment, and society at large.",
    image: "https://images-na.ssl-images-amazon.com/images/I/51uPl9ue9LL._SX404_BO1,204,203,200_.jpg",
    author: "Helen Sharp, Jennifer Preece, Yvonne Rogers",
    price: "400",
    category: "news",
    isFavourite: true,
    isAudioBook: false,
    isEbook: true,
    isPaperBook: true
  },
  {
    bookID: 3,
    title: "Interaktionsdesign och UX",
    subTitle: "Om att skapa en god användarupplevelse",
    desc: "Interaktionsdesign och UX handlar om tekniker för att utforma nyskapande interaktiva produkter och tjänster med god användarupplevelse. God användarupplevelse, eller UX (eng. user experience), är det övergripande målet för designarbetet. Den här boken är tänkt som ett praktiskt stöd under hela designprocessen: från initiala insikter och formulerade avsikter, till konceptidéer och test av prototyper. Tyngdpunkten ligger på de tidiga faserna där designens inriktning fastställs.",
    image: "https://image.bokus.com/images/9789144122991_200x_interaktionsdesign-och-ux-om-att-skapa-en-god-anvandarupplevelse_haftad",
    author: "Mattias Arvola",
    price: "316",
    category: "news",
    isFavourite: false,
    isAudioBook: true,
    isEbook: false,
    isPaperBook: true

  },
  {
    bookID: 7,
    title: "Designing Interfaces",
    subTitle: "Patterns for Effective Interaction Design",
    desc: "By capturing UI best practices as design patterns, this best-selling book provides solutions to common design problems. You'll learn patterns for mobile apps, web applications, and desktop software.",
    image: "https://images-na.ssl-images-amazon.com/images/I/51CwskMLS5L._SX379_BO1,204,203,200_.jpg",
    author: "Aynne Valencia, Charles Brewer, Jenifer Tidwell",
    price: "376",
    category: "audiobook",
    isFavourite: false,
    isAudioBook: true,
    isEbook: false,
    isPaperBook: true


  },
  {
    bookID: 8,
    title: "Don't Make Me Think, Revisited",
    subTitle: "A Common Sense Approach to Web Usability",
    desc: "Since Don't Make Me Think was first published in 2000, hundreds of thousands of Web designers and developers have relied on usability guru Steve Krug's guide to help them understand the principles of intuitive navigation and information design. Witty, commonsensical, and eminently practical, it's one of the best-loved and most recommended books on the subject. Now Steve returns with fresh perspective to reexamine the principles that made Don't Make Me Think a classic-with updated examples and a new chapter on mobile usability. And it's still short, profusely illustrated...and best of all-fun to read.",
    image: "https://images-na.ssl-images-amazon.com/images/I/41MdP5Tn0wL._SX387_BO1,204,203,200_.jpg",
    author: "Steve Krug",
    price: "304",
    category: "audiobook",
    isFavourite: false,
    isAudioBook: false,
    isEbook: true,
    isPaperBook: true


  },
  {
    bookID: 9,
    title: "A Project Guide to UX Design",
    subTitle: "For User Experience Designers in the Field or in the Making",
    desc: "User experience design is the discipline of creating a useful and usable Web site or application that's easily navigated and meets the needs of the site owner and its users. There's a lot more to successful UX design than knowing the latest Web technologies or design trends: It takes diplomacy, management skills, and business savvy. That's where the updated edition of this important book comes in. With new information on design principles, mobile and gestural interactions, content strategy, remote research tools and more.",
    image: "https://images-na.ssl-images-amazon.com/images/I/414W43nzOUL._SX388_BO1,204,203,200_.jpg",
    author: "Carolyn Chandler, Russ Unger",
    price: "343",
    category: "audiobook",
    isFavourite: false,
    isAudioBook: false,
    isEbook: true,
    isPaperBook: false


  },
  {
    bookID: 10,
    title: "User Experience Design",
    subTitle: "A Practical Introduction",
    desc: "Applicable to a wide spectrum of design activity, this book offers an ideal first step, clearly explaining fundamental concepts and methods to apply when designing for the user experience.Covering essential topics from user research and experience design to aesthetics, standards and prototyping, User Experience Design explains why user-centered methods are now essential to ensuring the success of a wide range of design projects.This second edition includes important new topics including; digital service standards, onboarding and scenario mapping. There are now 12 hands-on activities designed to help you start exploring basic UX tasks such as visualising the user journey and recognising user interface patterns.Filled with straightforward explanations and examples from around the world, this book is an essential primer for students and non-designers needing an introduction to contemporary UX thinking and common approaches. Designed specifically for newcomers to UX Design, the companion website offers extra material for hands-on activities, templates, industry interviews, contributor notes and sources of guidance for those seeking to start a career in the industry.",
    image: "https://images-na.ssl-images-amazon.com/images/I/41ukL8etxsL._SX340_BO1,204,203,200_.jpg",
    author: "Allanwood, Gavin, Peter Beare",
    price: "266",
    category: "bestsellers",
    isFavourite: false,
    isAudioBook: false,
    isEbook: true,
    isPaperBook: false


  },
  {
    bookID: 11,
    title: "User Interface Design for Programmers",
    subTitle: "Pocketbok",
    desc: "Most programmers' fear of user interface (UI) programming comes from their fear of doing UI design. They think that UI design is like graphic design―the mysterious process by which creative, latte-drinking, all-black-wearing people produce cool-looking, artistic pieces. Most programmers see themselves as analytic, logical thinkers instead―strong at reasoning, weak on artistic judgment, and incapable of doing UI design.",
    image: "https://images-na.ssl-images-amazon.com/images/I/41Egb0W3JiL._SX404_BO1,204,203,200_.jpg",
    author: "Avram Joel Spolsky ",
    price: "399",
    category: "audiobook",
    isFavourite: false,
    isAudioBook: false,
    isEbook: false,
    isPaperBook: true

  },
  {
    bookID: 12,
    title: "UX / UI Design",
    subTitle: "Introduction Guide To Intuitive Design And User-Friendly Experience",
    desc: "Do you want to discover the secrets behind a great User Experience? UX Design skills are now essential: as a UX Designer you are the mind, the voice, and the heart of the user during the development of new products. Becoming User Friendly is a requested feature for every project, the key of many successful businesses, and a controversial argument because only when your product will be on sale, you can understand if it is actually easy and adapt to the users needs..",
    image: "https://images-na.ssl-images-amazon.com/images/I/41hmlMo3dhL._SX331_BO1,204,203,200_.jpg",
    author: "Steven Branson",
    price: "100",
    category: "bestsellers",
    isFavourite: false,
    isAudioBook: true,
    isEbook: true,
    isPaperBook: false


  },
  {
    bookID: 13,
    title: "User Interface Design",
    subTitle: "Study The Idea Of The Products And Design Requirements: Ux And Ui For Beginners",
    desc: "User experience (UX) design is the process design teams use to create products that provide meaningful and relevant experiences to users. The following are the basic procedural steps of user interface design.",
    image: "https://images-na.ssl-images-amazon.com/images/I/41t5ZWwOMYL._SX331_BO1,204,203,200_.jpg",
    author: " Woodrow Ito",
    price: "174",
    category: "bestsellers",
    isFavourite: false,
    isAudioBook: true,
    isEbook: false,
    isPaperBook: true


  },
  {
    bookID: 14,
    title: "The Essential Guide to User Interface Design",
    subTitle: "An Introduction to GUI Design Principles and Techniques",
    desc: "Bringing together the results of more than 300 new design studies, an understanding of people, knowledge of hardware and software capabilities, and the author's practical experience gained from 45 years of work with display-based systems, this book addresses interface and screen design from the user's perspective.",
    image: "https://images-na.ssl-images-amazon.com/images/I/41kEEU9EesL._SX404_BO1,204,203,200_.jpg",
    author: "Wilbert O. Galitz",
    price: "627",
    category: "news",
    isFavourite: false,
    isAudioBook: true,
    isEbook: false,
    isPaperBook: true


  },
  {
    bookID: 15,
    title: "User Interface Design and Evaluation",
    subTitle: "An Introduction to GUI Design",
    desc: "Illustrates the benefits of a user-centered approach to the design of software, computer systems and web sites, and provides a discussion of developing interaction design from user requirements, and user interface evaluation. This work covers the design of graphical user interfaces, web sites and interfaces for embedded systems.",
    image: "https://images-na.ssl-images-amazon.com/images/I/51ytZ9MiHyL._SX398_BO1,204,203,200_.jpg",
    author: "Jarrett, Caroline",
    price: "602",
    category: "bestsellers",
    isFavourite: false,
    isAudioBook: false,
    isEbook: true,
    isPaperBook: true



  }
]
