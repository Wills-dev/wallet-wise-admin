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
