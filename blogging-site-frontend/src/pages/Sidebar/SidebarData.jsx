
import React from 'react'
import Sidebar, { SidebarItem } from './Sidebar'
import { BarChart2, BarChart3Icon, Boxes, FileBarChart2, LayoutDashboard, LifeBuoy, Receipt, Settings, UserCircle } from 'lucide-react'

// Define a configuration array for the sidebar items
const sidebarItems = [
    {
        icon: <LayoutDashboard size={20} />,
        title: 'Home',
        path: '/home',
        active: true, // You can manage active state dynamically if needed
        alert: true   // Optional, if you have alert functionality
    },
    {
        icon: <FileBarChart2 size={20} />,
        title: 'Blog',
        path: '/blog'
    },
    {
        icon: <BarChart3Icon size={20} />,
        title: 'Add Blog',
        path: '/blog/add'
    }

    // Add more items as needed
];

const SidebarData = () => {
    return (
        <Sidebar>
            {sidebarItems.map((item, index) => (
                <SidebarItem
                    key={item.title + item.path}
                    icon={item.icon}
                    title={item.title}
                    path={item.path}
                // active={item.active}
                // alert={item.alert}
                />
            ))}
        </Sidebar>
    );
};

export default SidebarData;