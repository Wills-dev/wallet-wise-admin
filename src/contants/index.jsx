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
import { GoDatabase, GoGift } from "react-icons/go";
import { FaQuestion, FaRegLightbulb, FaRegUser } from "react-icons/fa";
import { MdNotInterested, MdOutlineStickyNote2 } from "react-icons/md";
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
        icon: <FaQuestion />,
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
        icon: <AiOutlineSecurityScan />,
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
