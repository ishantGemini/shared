import React from "react";
import "tailwindcss/tailwind.css";

interface INavItem {
  iconSrc: string;
  text: string;
  route: string;
}

const navItems: INavItem[] = [
  { iconSrc: "ICON_White_Dashboard.svg", text: "Lead Management", route: "/lead" },
  { iconSrc: "ICON_White_All_Products.svg", text: "Event Management", route: "/event" },
  { iconSrc: "ICON_White_Search.svg", text: "Activity Tracker", route: "/activity" },
  { iconSrc: "ICON_White_Dashboard.svg", text: "Survey form", route: "/survey" },
  { iconSrc: "ICON_White_Search.svg", text: "KPI Tracker", route: "/kpi" },
  { iconSrc: "ICON_White_Policy_Serving.svg", text: "Giant Steps Module", route: "/giant-steps" },
  { iconSrc: "ICON_White_Policy_Serving.svg", text: "Agent Profile", route: "/agent-profile" }
];

function NavItem({ iconSrc, text, route }: INavItem) {
  return (
    <li className="flex justify-center items-center flex-col">
      <a href={`login${route}`} className="flex justify-center items-center flex-col">
        <img
          src={`https://uatbanca.tataaig.com/banca/common/assets/images/LINEAR ICONS/${iconSrc}`}
          alt=""
          className="w-6 h-6"
        />
        <span className="text-sm text-center text-white text-ellipsis leading-tight">{text}</span>
      </a>
    </li>
  );
}

// eslint-disable-next-line react/function-component-definition
const SideNav: React.FC = () => (
  <nav
    id="sidenav"
    className="fixed left-0 top-0 w-32 h-screen flex flex-col items-center justify-start bg-[#185aba]"
  >
    <div id="sidenavHeader" className="my-4">
      <img
        src="https://uatbanca.tataaig.com/banca/common/assets/images/LINEAR ICONS/logo.png"
        alt=""
        className="w-16 h-16"
      />
    </div>
    <div id="sidenavContent" className=" flex items-center flex-col justify-between">
      <ul id="list" className="space-y-6">
        {navItems.map((item) => (
          <NavItem
            key={`nav${item.route}`}
            iconSrc={item.iconSrc}
            text={item.text}
            route={item.route}
          />
        ))}
      </ul>
    </div>
    <div id="sidenavFooter" className="">
      <ul className="list">
        <li className="flex justify-center items-center flex-col mt-10">
          <img
            src="https://uatbanca.tataaig.com/banca/common/assets/images/LINEAR ICONS/ICON_White_Support.svg"
            alt=""
            className="w-6 h-6"
          />
          <span className="text-white">Support</span>
        </li>
      </ul>
    </div>
  </nav>
);

export default SideNav;
