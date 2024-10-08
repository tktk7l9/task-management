import NabItem from "@/app/components/SideMenu/NavList/NabItem/NabItem";
import { FaRegCheckSquare, FaRegClock, FaTasks } from "react-icons/fa";

interface NavItemType {
  id: number;
  label: string;
  link: string;
  icon: React.ReactNode;
}

const NavList = () => {
  const navList: NavItemType[] = [
    {
      id: 1,
      label: "All Tasks",
      link: "/",
      icon: <FaTasks className="size-5" />,
    },
    {
      id: 2,
      label: "Completed Tasks",
      link: "/completed",
      icon: <FaRegCheckSquare className="size-5" />,
    },
    {
      id: 3,
      label: "Expired Tasks",
      link: "/expired",
      icon: <FaRegClock className="size-5" />,
    },
  ];
  return (
    <div className="mt-24">
      {navList.map((item) => {
        return (
          <NabItem
            key={item.id}
            label={item.label}
            link={item.link}
            icon={item.icon}
          />
        );
      })}
    </div>
  );
};

export default NavList;
