import { ChevronDown, LucideIcon } from "lucide-react";
import React from "react";
interface ISidebarItem {
  name: string;
  path: string;
  icon: LucideIcon;
  items?: ISubItem[];
}
interface ISubItem {
  name: string;
  path: string;
}

const Sidebaritem = ({ item }: { item: ISidebarItem }) => {
  const { name, icon: Icon, items } = item;
  return (
    <div className="flex items-center p-3 hover:bg-sidebar-background rounded-lg cursor-pointer hover:text-sidebar-active justify-between text-sidebar-iconColor">
      <div className="flex items-center space-x-2">
        <Icon size={20} />
        <p className="text-sm font-semibold">{name}</p>
      </div>
      {items && items.length > 0 && <ChevronDown size={18} />}
    </div>
  );
};

export default Sidebaritem;
