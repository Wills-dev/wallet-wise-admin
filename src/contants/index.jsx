import { AiOutlineAreaChart, AiOutlineBarChart } from "react-icons/ai";
import { BiSolidPlaneAlt, BiTransfer } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { IoHomeOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import { PiTelevisionSimple } from "react-icons/pi";
import { IoIosFootball } from "react-icons/io";
import { GoDatabase, GoGift, GoQuestion } from "react-icons/go";
import { FaRegLightbulb, FaRegUser } from "react-icons/fa";
import { MdOutlineStickyNote2, MdOutlineVerifiedUser } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { GrSecure } from "react-icons/gr";

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "overview",
        icon: <AiOutlineBarChart />,
      },
      {
        name: "analytics",
        icon: <AiOutlineAreaChart />,
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        name: "tickets",
        icon: <MdOutlineStickyNote2 />,
      },
      // {
      //   name: "message-center",
      //   icon: <FiMessageSquare />,
      // },
      {
        name: "faq",
        icon: <GoQuestion />,
      },
    ],
  },
  {
    title: "Services",
    links: [
      {
        name: "transfers",
        icon: <BiTransfer />,
      },
      {
        name: "airtime",
        icon: <IoPhonePortraitOutline />,
      },
      {
        name: "cable",
        icon: <PiTelevisionSimple />,
      },
      {
        name: "data",
        icon: <GoDatabase />,
      },
      {
        name: "betting",
        icon: <IoIosFootball />,
      },
      {
        name: "electricity",
        icon: <FaRegLightbulb />,
      },
      {
        name: "giftcards",
        icon: <GoGift />,
      },
      {
        name: "book-flight",
        icon: <BiSolidPlaneAlt />,
      },
      {
        name: "virtual-card",
        icon: <CiCreditCard1 />,
      },
      {
        name: "hotel-reservations",
        icon: <IoHomeOutline />,
      },
    ],
  },

  {
    title: "User Management",
    links: [
      {
        name: "manage-admin",
        icon: <FaRegUser />,
      },
      {
        name: "manage-user",
        icon: <FiUsers />,
      },
      {
        name: "roles",
        icon: <MdOutlineVerifiedUser />,
      },
      // {
      //   name: "permission",
      //   icon: <MdNotInterested />,
      // },
    ],
  },
  {
    title: "My Account",
    links: [
      {
        name: "profile",
        icon: <RiAccountCircleLine />,
      },
      {
        name: "security",
        icon: <GrSecure />,
      },
    ],
  },
];

export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#696cff",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "orange-theme",
  },
];

export const revenue = [
  { month: "January", revenue: 186 },
  { month: "February", revenue: 305 },
  { month: "March", revenue: 237 },
  { month: "April", revenue: 73 },
  { month: "May", revenue: 209 },
  { month: "June", revenue: 214 },
  { month: "July", revenue: 614 },
  { month: "August", revenue: 114 },
  { month: "September", revenue: 214 },
  { month: "October", revenue: 214 },
  { month: "November", revenue: 84 },
  { month: "December", revenue: 280 },
];

export const profit = [
  { month: "January", revenue: 16 },
  { month: "February", revenue: 35 },
  { month: "March", revenue: 97 },
  { month: "April", revenue: 73 },
  { month: "May", revenue: 129 },
  { month: "June", revenue: 24 },
  { month: "July", revenue: 64 },
  { month: "August", revenue: 54 },
  { month: "September", revenue: 74 },
  { month: "October", revenue: 25 },
  { month: "November", revenue: 84 },
  { month: "December", revenue: 20 },
];

export const services = [
  {
    name: "Airtime",
    icon: <IoPhonePortraitOutline />,
    color: "rgb(239 68 68)",
    bgColor: "rgb(254 242 242)",
  },
  {
    name: "cable",
    icon: <PiTelevisionSimple />,
    color: "rgb(34 197 94)",
    bgColor: "rgb(240 253 244)",
  },
  {
    name: "data",
    icon: <GoDatabase />,
    color: "rgb(59 130 246)",
    bgColor: "rgb(239 246 255)",
  },
  {
    name: "betting",
    icon: <IoIosFootball />,
    color: "rgb(234 179 8)",
    bgColor: "rgb(254 252 232)",
  },
  {
    name: "electricity",
    icon: <FaRegLightbulb />,
    color: "rgb(236 72 153)",
    bgColor: "rgb(253 242 248)",
  },
  {
    name: "giftcards",
    icon: <GoGift />,
    color: "rgb(168 85 247)",
    bgColor: "rgb(250 245 255)",
  },
  {
    name: "book-flight",
    icon: <BiSolidPlaneAlt />,
    color: "rgb(100 116 139)",
    bgColor: "rgb(248 250 252)",
  },
  {
    name: "virtual-card",
    icon: <CiCreditCard1 />,
    color: "rgb(34 197 94)",
    bgColor: "rgb(240 253 244)",
  },
  {
    name: "hotel-reservations",
    icon: <IoHomeOutline />,
    color: "rgb(239 68 68)",
    bgColor: "rgb(254 242 242)",
  },
];

export const topServices = [
  {
    name: "Airtime",
    amount: 200000,
  },
  {
    name: "cable",
    amount: 4032000,
  },
  {
    name: "data",
    amount: 40200030,
  },
  {
    name: "betting",
    amount: 2013355555,
  },
  {
    name: "electricity",
    amount: 40000,
  },
  {
    name: "giftcards",
    amount: 2000,
  },
  {
    name: "book-flight",
    amount: 50000,
  },
  {
    name: "virtual-card",
    amount: 200000,
  },
  {
    name: "hotel-reservations",
    amount: 900,
  },
];

export const topTransactions = [
  {
    firstName: "Asewaju",
    lastName: "Bola",
    amount: 450000000,
    service: "betting",
  },
  {
    firstName: "Lydia",
    lastName: "Kelechi",
    amount: 30000000,
    service: "Cable",
  },
  {
    firstName: "Judah",
    lastName: "Onuegbu",
    amount: 2800000,
    service: "Electricity",
  },
  {
    firstName: "Big",
    lastName: "Head",
    amount: 2000000,
    service: "betting",
  },
  {
    firstName: "Tinubu",
    lastName: "Bola",
    amount: 1900000,
    service: "book flight",
  },
  {
    firstName: "Asewaju",
    lastName: "Bola",
    amount: 1500000,
    service: "betting",
  },
  {
    firstName: "Asewaju",
    lastName: "Bola",
    amount: 1250000,
    service: "betting",
  },
  {
    firstName: "Asewaju",
    lastName: "Bola",
    amount: 300000,
    service: "betting",
  },
];

export const data = [
  {
    id: "728ed52f",
    amount: 100,
    user: "Wills Chisom",
    status: "in progress",
    email: "m@example.com",
  },
  {
    id: "489e1d442",
    amount: 125,
    user: "Ola Wale",
    status: "pending",
    email: "lyth@gmail.com",
  },
  {
    id: "4839e1d42",
    amount: 125,
    user: "John Chisom",
    status: "resolved",
    email: "example@gmail.com",
  },
  {
    id: "489e1d422",
    amount: 125,
    user: "Nedz Chinedu",
    status: "in progress",
    email: "exam@gmail.com",
  },
  {
    id: "48922d42",
    amount: 125,
    user: "Tega Chisom",
    status: "in progress",
    email: "fly@gmail.com",
  },
  {
    id: "48931d4234",
    amount: 125,
    user: "Miracle Kelechi",
    status: "closed",
    email: "victor@gmail.com",
  },
  {
    id: "489e1d4244",
    amount: 125,
    user: "Michael Chisom",
    status: "closed",
    email: "zagadate@gmail.com",
  },
  {
    id: "489e1d4774",
    amount: 125,
    user: "Wills Victor",
    status: "in progress",
    email: "thole@gmail.com",
  },
  {
    id: "489e64244",
    amount: 125,
    user: "Uju Ojinnaka",
    status: "resolved",
    email: "gol@gmail.com",
  },
  {
    id: "48944d4244",
    amount: 125,
    status: "in progress",
    user: "Jaja Mildred",
    email: "sluu@gmail.com",
  },
  {
    id: "489443244",
    amount: 125,
    user: "Blessing  Igri",
    status: "in progress",
    email: "judah@gmail.com",
  },
  {
    id: "48244",
    amount: 125,
    user: "Favour Chudy",
    status: "escalated",
    email: "kelechi@gmail.com",
  },
];

export const dataTransfer = [
  {
    id: "728ed52f",
    amount: 10000,
    user: "Wills Chisom",
    status: "completed",
    email: "m@example.com",
    type: "local bank",
  },
  {
    id: "489e1d442",
    amount: 125,
    user: "Ola Wale",
    status: "completed",
    email: "lyth@gmail.com",
    type: "walletwise",
  },
  {
    id: "4839e1d42",
    amount: 12005,
    user: "John Chisom",
    status: "cancelled",
    email: "example@gmail.com",
    type: "local bank",
  },
  {
    id: "489e1d422",
    amount: 2005,
    user: "Nedz Chinedu",
    status: "completed",
    email: "exam@gmail.com",
    type: "local bank",
  },
  {
    id: "48922d42",
    amount: 2225,
    user: "Tega Chisom",
    status: "completed",
    email: "fly@gmail.com",
    type: "local bank",
  },
  {
    id: "48931d4234",
    amount: 12005,
    user: "Miracle Kelechi",
    status: "cancelled",
    email: "victor@gmail.com",
    type: "local bank",
  },
  {
    id: "489e1d4244",
    amount: 125,
    user: "Michael Chisom",
    status: "cancelled",
    email: "zagadate@gmail.com",
    type: "walletwise",
  },
  {
    id: "489e1d4774",
    amount: 125,
    user: "Wills Victor",
    status: "completed",
    email: "thole@gmail.com",
    type: "walletwise",
  },
  {
    id: "489e64244",
    amount: 125,
    user: "Uju Ojinnaka",
    status: "cancelled",
    email: "gol@gmail.com",
    type: "walletwise",
  },
  {
    id: "48944d4244",
    amount: 125,
    status: "completed",
    user: "Jaja Mildred",
    email: "sluu@gmail.com",
    type: "walletwise",
  },
  {
    id: "489443244",
    amount: 125,
    user: "Blessing  Igri",
    status: "cancelled",
    email: "judah@gmail.com",
    type: "walletwise",
  },
  {
    id: "48244",
    amount: 125,
    user: "Favour Chudy",
    status: "cancelled",
    email: "kelechi@gmail.com",
    type: "walletwise",
  },
];

export const dataAdmin = [
  {
    id: "728ed52f",
    role: "administrator",
    user: "Wills Chisom",
    status: "active",
    email: "m@example.com",
  },
  {
    id: "489e1d442",
    role: "manager",
    user: "Ola Wale",
    status: "inactive",
    email: "lyth@gmail.com",
  },
  {
    id: "4839e1d42",
    role: "manager",
    user: "John Chisom",
    status: "active",
    email: "example@gmail.com",
  },
  {
    id: "489e1d422",
    role: "agent",
    user: "Nedz Chinedu",
    status: "suspended",
    email: "exam@gmail.com",
  },
  {
    id: "48922d42",
    role: "agent",
    user: "Tega Chisom",
    status: "active",
    email: "fly@gmail.com",
  },
  {
    id: "48931d4234",
    role: "manager",
    user: "Miracle Kelechi",
    status: "active",
    email: "victor@gmail.com",
  },
  {
    id: "489e1d4244",
    role: "super admin",
    user: "Michael Chisom",
    status: "active",
    email: "zagadate@gmail.com",
  },
];
export const dataFAQ = [
  {
    id: "728ed52f",
    category: "Cable payment",
    title: "How to pay for cable",
    details:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero qui corrupti saepe! Odit ab nulla qui necessitatibus explicabo sunt fugiat a exercitationem, libero aliquid eveniet repudiandae, neque reiciendis? Ea corrupti tempora molestiae quas blanditiis numquam facere nihil praesentium molestias odio nam autem, minus ad, illo quasi impedit cumque inventore atque.",
  },
  {
    id: "728ed52f",
    category: "Cable payment",
    title: "How to pay for cable",
    details:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero qui corrupti saepe! Odit ab nulla qui necessitatibus explicabo sunt fugiat a exercitationem, libero aliquid eveniet repudiandae, neque reiciendis? Ea corrupti tempora molestiae quas blanditiis numquam facere nihil praesentium molestias odio nam autem, minus ad, illo quasi impedit cumque inventore atque.",
  },
  {
    id: "728ed52f",
    category: "Cable payment",
    title: "How to pay for cable",
    details:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero qui corrupti saepe! Odit ab nulla qui necessitatibus explicabo sunt fugiat a exercitationem, libero aliquid eveniet repudiandae, neque reiciendis? Ea corrupti tempora molestiae quas blanditiis numquam facere nihil praesentium molestias odio nam autem, minus ad, illo quasi impedit cumque inventore atque.",
  },
  {
    id: "728ed52f",
    category: "Cable payment",
    title: "How to pay for cable",
    details:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero qui corrupti saepe! Odit ab nulla qui necessitatibus explicabo sunt fugiat a exercitationem, libero aliquid eveniet repudiandae, neque reiciendis? Ea corrupti tempora molestiae quas blanditiis numquam facere nihil praesentium molestias odio nam autem, minus ad, illo quasi impedit cumque inventore atque.",
  },
];

export const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+123456789",
    state: "Lagos",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+987654321",
    state: "Owerri",
    status: "Suspended",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "+192837465",
    state: "Warri",
    status: "Active",
  },
];

export const usersInfo = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+123456789",
    status: "Active",
    walletBalance: 120.5,
    lastLogin: "2024-08-16 14:22",
    createdAt: "2023-06-01 09:00",
    activities: [
      {
        description: "Paid for electricity bill",
        timestamp: "2024-08-15 14:30",
      },
      {
        description: "Bought data bundle",
        timestamp: "2024-08-14 12:15",
      },
    ],
    transactions: [
      {
        type: "Electricity",
        amount: 50.0,
        date: "2024-08-15 14:30",
      },
      {
        type: "Data",
        amount: 20.0,
        date: "2024-08-14 12:15",
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+987654321",
    status: "Suspended",
    walletBalance: 75.0,
    lastLogin: "2024-07-25 11:45",
    createdAt: "2023-05-21 16:22",
    activities: [
      {
        description: "Suspended by admin",
        timestamp: "2024-08-01 10:00",
      },
      {
        description: "Paid for cable TV subscription",
        timestamp: "2024-07-25 11:30",
      },
    ],
    transactions: [
      {
        type: "Cable TV",
        amount: 30.0,
        date: "2024-07-25 11:30",
      },
      {
        type: "Airtime",
        amount: 10.0,
        date: "2024-07-10 09:15",
      },
    ],
  },
];

export const ticketLinks = [
  "Tickets summary",
  "Assignee activity",
  "All tickets",
  "Efficiency",
];

export const chartData = [
  { date: "2024-04-01", createdTickets: 222, solvedTickets: 150 },
  { date: "2024-04-02", createdTickets: 97, solvedTickets: 180 },
  { date: "2024-04-03", createdTickets: 167, solvedTickets: 120 },
  { date: "2024-04-04", createdTickets: 242, solvedTickets: 260 },
  { date: "2024-04-05", createdTickets: 373, solvedTickets: 290 },
  { date: "2024-04-06", createdTickets: 301, solvedTickets: 340 },
  { date: "2024-04-07", createdTickets: 245, solvedTickets: 180 },
  { date: "2024-04-08", createdTickets: 409, solvedTickets: 320 },
  { date: "2024-04-09", createdTickets: 59, solvedTickets: 110 },
  { date: "2024-04-10", createdTickets: 261, solvedTickets: 190 },
  { date: "2024-04-11", createdTickets: 327, solvedTickets: 350 },
  { date: "2024-04-12", createdTickets: 292, solvedTickets: 210 },
  { date: "2024-04-13", createdTickets: 342, solvedTickets: 380 },
  { date: "2024-04-14", createdTickets: 137, solvedTickets: 220 },
  { date: "2024-04-15", createdTickets: 120, solvedTickets: 170 },
  { date: "2024-04-16", createdTickets: 138, solvedTickets: 190 },
  { date: "2024-04-17", createdTickets: 446, solvedTickets: 360 },
  { date: "2024-04-18", createdTickets: 364, solvedTickets: 410 },
  { date: "2024-04-19", createdTickets: 243, solvedTickets: 180 },
  { date: "2024-04-20", createdTickets: 89, solvedTickets: 150 },
  { date: "2024-04-21", createdTickets: 137, solvedTickets: 200 },
  { date: "2024-04-22", createdTickets: 224, solvedTickets: 170 },
  { date: "2024-04-23", createdTickets: 138, solvedTickets: 230 },
  { date: "2024-04-24", createdTickets: 387, solvedTickets: 290 },
  { date: "2024-04-25", createdTickets: 215, solvedTickets: 250 },
  { date: "2024-04-26", createdTickets: 75, solvedTickets: 130 },
  { date: "2024-04-27", createdTickets: 383, solvedTickets: 420 },
  { date: "2024-04-28", createdTickets: 122, solvedTickets: 180 },
  { date: "2024-04-29", createdTickets: 315, solvedTickets: 240 },
  { date: "2024-04-30", createdTickets: 454, solvedTickets: 380 },
  { date: "2024-05-01", createdTickets: 165, solvedTickets: 220 },
  { date: "2024-05-02", createdTickets: 293, solvedTickets: 310 },
  { date: "2024-05-03", createdTickets: 247, solvedTickets: 190 },
  { date: "2024-05-04", createdTickets: 385, solvedTickets: 420 },
  { date: "2024-05-05", createdTickets: 481, solvedTickets: 390 },
  { date: "2024-05-06", createdTickets: 498, solvedTickets: 520 },
  { date: "2024-05-07", createdTickets: 388, solvedTickets: 300 },
  { date: "2024-05-08", createdTickets: 149, solvedTickets: 210 },
  { date: "2024-05-09", createdTickets: 227, solvedTickets: 180 },
  { date: "2024-05-10", createdTickets: 293, solvedTickets: 330 },
  { date: "2024-05-11", createdTickets: 335, solvedTickets: 270 },
  { date: "2024-05-12", createdTickets: 197, solvedTickets: 240 },
  { date: "2024-05-13", createdTickets: 197, solvedTickets: 160 },
  { date: "2024-05-14", createdTickets: 448, solvedTickets: 490 },
  { date: "2024-05-15", createdTickets: 473, solvedTickets: 380 },
  { date: "2024-05-16", createdTickets: 338, solvedTickets: 400 },
  { date: "2024-05-17", createdTickets: 499, solvedTickets: 420 },
  { date: "2024-05-18", createdTickets: 315, solvedTickets: 350 },
  { date: "2024-05-19", createdTickets: 235, solvedTickets: 180 },
  { date: "2024-05-20", createdTickets: 177, solvedTickets: 230 },
  { date: "2024-05-21", createdTickets: 82, solvedTickets: 140 },
  { date: "2024-05-22", createdTickets: 81, solvedTickets: 120 },
  { date: "2024-05-23", createdTickets: 252, solvedTickets: 290 },
  { date: "2024-05-24", createdTickets: 294, solvedTickets: 220 },
  { date: "2024-05-25", createdTickets: 201, solvedTickets: 250 },
  { date: "2024-05-26", createdTickets: 213, solvedTickets: 170 },
  { date: "2024-05-27", createdTickets: 420, solvedTickets: 460 },
  { date: "2024-05-28", createdTickets: 233, solvedTickets: 190 },
  { date: "2024-05-29", createdTickets: 78, solvedTickets: 130 },
  { date: "2024-05-30", createdTickets: 340, solvedTickets: 280 },
  { date: "2024-05-31", createdTickets: 178, solvedTickets: 230 },
  { date: "2024-06-01", createdTickets: 178, solvedTickets: 200 },
  { date: "2024-06-02", createdTickets: 470, solvedTickets: 410 },
  { date: "2024-06-03", createdTickets: 103, solvedTickets: 160 },
  { date: "2024-06-04", createdTickets: 439, solvedTickets: 380 },
  { date: "2024-06-05", createdTickets: 88, solvedTickets: 140 },
  { date: "2024-06-06", createdTickets: 294, solvedTickets: 250 },
  { date: "2024-06-07", createdTickets: 323, solvedTickets: 370 },
  { date: "2024-06-08", createdTickets: 385, solvedTickets: 320 },
  { date: "2024-06-09", createdTickets: 438, solvedTickets: 480 },
  { date: "2024-06-10", createdTickets: 155, solvedTickets: 200 },
  { date: "2024-06-11", createdTickets: 92, solvedTickets: 150 },
  { date: "2024-06-12", createdTickets: 492, solvedTickets: 420 },
  { date: "2024-06-13", createdTickets: 81, solvedTickets: 130 },
  { date: "2024-06-14", createdTickets: 426, solvedTickets: 380 },
  { date: "2024-06-15", createdTickets: 307, solvedTickets: 350 },
  { date: "2024-06-16", createdTickets: 371, solvedTickets: 310 },
  { date: "2024-06-17", createdTickets: 475, solvedTickets: 520 },
  { date: "2024-06-18", createdTickets: 107, solvedTickets: 170 },
  { date: "2024-06-19", createdTickets: 341, solvedTickets: 290 },
  { date: "2024-06-20", createdTickets: 408, solvedTickets: 450 },
  { date: "2024-06-21", createdTickets: 169, solvedTickets: 210 },
  { date: "2024-06-22", createdTickets: 317, solvedTickets: 270 },
  { date: "2024-06-23", createdTickets: 480, solvedTickets: 530 },
  { date: "2024-06-24", createdTickets: 132, solvedTickets: 180 },
  { date: "2024-06-25", createdTickets: 141, solvedTickets: 190 },
  { date: "2024-06-26", createdTickets: 434, solvedTickets: 380 },
  { date: "2024-06-27", createdTickets: 448, solvedTickets: 490 },
  { date: "2024-06-28", createdTickets: 149, solvedTickets: 200 },
  { date: "2024-06-29", createdTickets: 103, solvedTickets: 160 },
  { date: "2024-06-30", createdTickets: 446, solvedTickets: 400 },
];

export const chartData4 = [
  { date: "2024-04-01", walletwiseAccount: 222, localAccount: 150 },
  { date: "2024-04-02", walletwiseAccount: 97, localAccount: 180 },
  { date: "2024-04-03", walletwiseAccount: 167, localAccount: 120 },
  { date: "2024-04-04", walletwiseAccount: 242, localAccount: 260 },
  { date: "2024-04-05", walletwiseAccount: 373, localAccount: 290 },
  { date: "2024-04-06", walletwiseAccount: 301, localAccount: 340 },
  { date: "2024-04-07", walletwiseAccount: 245, localAccount: 180 },
  { date: "2024-04-08", walletwiseAccount: 409, localAccount: 320 },
  { date: "2024-04-09", walletwiseAccount: 59, localAccount: 110 },
  { date: "2024-04-10", walletwiseAccount: 261, localAccount: 190 },
  { date: "2024-04-11", walletwiseAccount: 327, localAccount: 350 },
  { date: "2024-04-12", walletwiseAccount: 292, localAccount: 210 },
  { date: "2024-04-13", walletwiseAccount: 342, localAccount: 380 },
  { date: "2024-04-14", walletwiseAccount: 137, localAccount: 220 },
  { date: "2024-04-15", walletwiseAccount: 120, localAccount: 170 },
  { date: "2024-04-16", walletwiseAccount: 138, localAccount: 190 },
  { date: "2024-04-17", walletwiseAccount: 446, localAccount: 360 },
  { date: "2024-04-18", walletwiseAccount: 364, localAccount: 410 },
  { date: "2024-04-19", walletwiseAccount: 243, localAccount: 180 },
  { date: "2024-04-20", walletwiseAccount: 89, localAccount: 150 },
  { date: "2024-04-21", walletwiseAccount: 137, localAccount: 200 },
  { date: "2024-04-22", walletwiseAccount: 224, localAccount: 170 },
  { date: "2024-04-23", walletwiseAccount: 138, localAccount: 230 },
  { date: "2024-04-24", walletwiseAccount: 387, localAccount: 290 },
  { date: "2024-04-25", walletwiseAccount: 215, localAccount: 250 },
  { date: "2024-04-26", walletwiseAccount: 75, localAccount: 130 },
  { date: "2024-04-27", walletwiseAccount: 383, localAccount: 420 },
  { date: "2024-04-28", walletwiseAccount: 122, localAccount: 180 },
  { date: "2024-04-29", walletwiseAccount: 315, localAccount: 240 },
  { date: "2024-04-30", walletwiseAccount: 454, localAccount: 380 },
  { date: "2024-05-01", walletwiseAccount: 165, localAccount: 220 },
  { date: "2024-05-02", walletwiseAccount: 293, localAccount: 310 },
  { date: "2024-05-03", walletwiseAccount: 247, localAccount: 190 },
  { date: "2024-05-04", walletwiseAccount: 385, localAccount: 420 },
  { date: "2024-05-05", walletwiseAccount: 481, localAccount: 390 },
  { date: "2024-05-06", walletwiseAccount: 498, localAccount: 520 },
  { date: "2024-05-07", walletwiseAccount: 388, localAccount: 300 },
  { date: "2024-05-08", walletwiseAccount: 149, localAccount: 210 },
  { date: "2024-05-09", walletwiseAccount: 227, localAccount: 180 },
  { date: "2024-05-10", walletwiseAccount: 293, localAccount: 330 },
  { date: "2024-05-11", walletwiseAccount: 335, localAccount: 270 },
  { date: "2024-05-12", walletwiseAccount: 197, localAccount: 240 },
  { date: "2024-05-13", walletwiseAccount: 197, localAccount: 160 },
  { date: "2024-05-14", walletwiseAccount: 448, localAccount: 490 },
  { date: "2024-05-15", walletwiseAccount: 473, localAccount: 380 },
  { date: "2024-05-16", walletwiseAccount: 338, localAccount: 400 },
  { date: "2024-05-17", walletwiseAccount: 499, localAccount: 420 },
  { date: "2024-05-18", walletwiseAccount: 315, localAccount: 350 },
  { date: "2024-05-19", walletwiseAccount: 235, localAccount: 180 },
  { date: "2024-05-20", walletwiseAccount: 177, localAccount: 230 },
  { date: "2024-05-21", walletwiseAccount: 82, localAccount: 140 },
];

export const chartData2 = [
  { day: "Sunday", averageTickets: 186 },
  { day: "Monday", averageTickets: 305 },
  { day: "Tuesday", averageTickets: 237 },
  { day: "Wednesday", averageTickets: 73 },
  { day: "Thursday", averageTickets: 209 },
  { day: "Friday", averageTickets: 214 },
  { day: "Saturday", averageTickets: 237 },
];

export const chartData3 = [
  { day: "Sunday", averageTransfer: 186 },
  { day: "Monday", averageTransfer: 305 },
  { day: "Tuesday", averageTransfer: 237 },
  { day: "Wednesday", averageTransfer: 73 },
  { day: "Thursday", averageTransfer: 209 },
  { day: "Friday", averageTransfer: 214 },
  { day: "Saturday", averageTransfer: 237 },
];

export const chartDataTickets = [
  { status: "open", tickets: 275, fill: "#1F316F" },
  { status: "closed", tickets: 187, fill: "#478CCF" },
  { status: "resolved", tickets: 173, fill: "#36C2CE" },
  { status: "escalated", tickets: 90, fill: "#B4D6CD" },
  { status: "inProgress", tickets: 200, fill: "#9CDBA6" },
];

export const chartConfigTickets = {
  tickets: {
    label: "No of tickets",
  },
  open: {
    label: "Open",
  },

  closed: {
    label: "Closed",
  },
  resolved: {
    label: "Resolved",
  },
  escalated: {
    label: "Escalated",
  },
  inProgress: {
    label: "In Progress",
  },
};

export const chartDataTicketsPriority = [
  { priority: "low", tickets: 275, fill: "#1F316F" },
  { priority: "medium", tickets: 187, fill: "#478CCF" },
  { priority: "high", tickets: 173, fill: "#36C2CE" },
  { priority: "urgent", tickets: 90, fill: "#9CDBA6" },
];

export const chartConfigTicketsPriority = {
  tickets: {
    label: "No of tickets",
  },
  low: {
    label: "Low",
  },

  medium: {
    label: "Medium",
  },
  high: {
    label: "High",
  },
  urgent: {
    label: "Urgent",
  },
};

export const generalAnalytics = [
  {
    title: "Created tickets",
    value: "50",
  },
  {
    title: "Unsolved tickets",
    value: "20",
  },
  {
    title: "Solved tickets",
    value: "30",
  },
  {
    title: "Reopened tickets",
    value: "5",
  },
];

export const AdminSummary = [
  {
    title: "Total admin",
    value: "14",
  },
  {
    title: "Administrators",
    value: "3",
  },
  {
    title: "Managers",
    value: "1",
  },
  {
    title: "Support agents",
    value: "10",
  },
];
export const FaqSummary = [
  {
    title: "Total FAQ",
    value: "14",
  },
  {
    title: "FAQ category",
    value: "3",
  },
];

export const userSummary = [
  {
    title: "Total users",
    value: "14",
  },
  {
    title: "Active users",
    value: "3",
  },
  {
    title: "Suspended users",
    value: "1",
  },
];

export const dataAssignee = [
  {
    id: "728ed52f",
    agent: "Wills Chisom",
    noOfEscalated: 6,
    reopened: 2,
    pending: 8,
    closed: 2,
    resolved: 5,
    totalAssignedTicket: 100,
    customerRating: 7,
  },
  {
    id: "489e1d442",
    agent: "Ola Wale",
    noOfEscalated: 0,
    reopened: 2,
    pending: 8,
    closed: 2,
    resolved: 5,
    totalAssignedTicket: 100,
    customerRating: 7,
  },
  {
    id: "4839e1d42",
    agent: "John Chisom",
    noOfEscalated: 16,
    reopened: 2,
    pending: 8,
    closed: 2,
    resolved: 5,
    totalAssignedTicket: 100,
    customerRating: 7,
  },
  {
    id: "489e1d422",
    agent: "Nedz Chinedu",
    noOfEscalated: 6,
    reopened: 2,
    pending: 8,
    closed: 2,
    resolved: 5,
    totalAssignedTicket: 100,
    customerRating: 7,
  },
  {
    id: "48922d42",
    agent: "Tega Chisom",
    noOfEscalated: 60,
    reopened: 2,
    pending: 8,
    closed: 2,
    resolved: 5,
    totalAssignedTicket: 100,
    customerRating: 7,
  },
  {
    id: "48931d4234",
    agent: "Miracle Kelechi",
    noOfEscalated: 20,
    reopened: 2,
    pending: 8,
    closed: 2,
    resolved: 5,
    totalAssignedTicket: 100,
    customerRating: 7,
  },
  {
    id: "489e1d4244",
    agent: "Michael Chisom",
    noOfEscalated: 4,
    reopened: 2,
    pending: 8,
    closed: 2,
    resolved: 5,
    totalAssignedTicket: 100,
    customerRating: 7,
  },
];
