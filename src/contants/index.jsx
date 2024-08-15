import {
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineCalendar,
  AiOutlineSecurityScan,
  AiOutlineStock,
} from "react-icons/ai";
import { BiColorFill, BiSolidPlaneAlt } from "react-icons/bi";
import { BsBarChart, BsKanban } from "react-icons/bs";
import { FiEdit, FiMessageSquare, FiPieChart, FiUsers } from "react-icons/fi";
import { GiLouvrePyramid } from "react-icons/gi";
import { IoHomeOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { RiAccountCircleLine, RiStockLine } from "react-icons/ri";
import { PiTelevisionSimple } from "react-icons/pi";
import { IoIosFootball } from "react-icons/io";
import { GoDatabase, GoGift, GoQuestion } from "react-icons/go";
import { FaQuestion, FaRegLightbulb, FaRegUser } from "react-icons/fa";
import {
  MdNotInterested,
  MdOutlineStickyNote2,
  MdOutlineVerifiedUser,
} from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
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
      {
        name: "message-center",
        icon: <FiMessageSquare />,
      },
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
        name: "Airtime",
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
      {
        name: "permission",
        icon: <MdNotInterested />,
      },
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
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "July", desktop: 614 },
  { month: "August", desktop: 114 },
  { month: "Semptember", desktop: 214 },
  { month: "October", desktop: 214 },
  { month: "November", desktop: 84 },
  { month: "December", desktop: 280 },
];
export const profit = [
  { month: "January", desktop: 16 },
  { month: "February", desktop: 35 },
  { month: "March", desktop: 97 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 129 },
  { month: "June", desktop: 24 },
  { month: "July", desktop: 64 },
  { month: "August", desktop: 54 },
  { month: "Semptember", desktop: 74 },
  { month: "October", desktop: 25 },
  { month: "November", desktop: 84 },
  { month: "December", desktop: 20 },
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

export const ticketLinks = [
  "Tickets summary",
  "Efficiency",
  "Assignee activity",
  "All tickets",
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

export const chartData2 = [
  { day: "Sunday", averageTickets: 186 },
  { day: "Monday", averageTickets: 305 },
  { day: "Tuesday", averageTickets: 237 },
  { day: "Wednesday", averageTickets: 73 },
  { day: "Thursday", averageTickets: 209 },
  { day: "Friday", averageTickets: 214 },
  { day: "Saturday", averageTickets: 237 },
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
