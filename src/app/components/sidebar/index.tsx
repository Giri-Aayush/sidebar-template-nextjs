import { BadgeDollarSign, CircleUserRound, HelpCircle, LayoutDashboard, LucideIcon, Settings, WalletCards } from 'lucide-react';
import React from 'react'
import Sidebaritem from './item';
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

const items: ISidebarItem[] = [
    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      name: "Transaction",
      path: "/transaction",
      icon: BadgeDollarSign,
    },
    {
      name: "Payment",
      path: "/payment",
      icon: WalletCards,
    },
    {
      name: "Accounts",
      path: "/accounts",
      icon: CircleUserRound,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
      items: [
        {
          name: "General",
          path: "/settings",
        },
        {
          name: "Security",
          path: "/settings/security",
        },
        {
          name: "Notifications",
          path: "/settings/notifications",
        },
      ],
    },
    {
        name: "Help",
        path: "/help",
        icon: HelpCircle,
        items: [
          {
            name: "Contact Us",
            path: "/help/contact-us",
          },
          {
            name: "Security",
            path: "/help/FAQ",
          },
          {
            name: "Notifications",
            path: "/help/support",
          },
        ],
      },
  ];
  
const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-10 p-4'>
        <div className='flex flex-col space-y-10 w-full'>
        <img src='/vercel.svg' alt='logo' className='h-10 w-fit'/>
        <div className='flex flex-col space-y-2'>
        {items.map(item => (
            <Sidebaritem key={item.path} item={item}/>
        ))}
        </div>
        </div>
    </div>
  )
}

export default Sidebar