
import React from 'react'
import Sidebar, { SidebarItem } from './Sidebar'
import { FileBarChart2, LayoutDashboard } from 'lucide-react'
import useAuthContext from '../../auth/hook/use-context-hook';

// Define a configuration array for the sidebar items
const sidebarItems = [
    {
        icon: <LayoutDashboard size={20} />,
        title: 'Home',
        path: '/home',
        requiredPermissions: ['home.r'],
        userTypes: ['USER'],
    },
    {
        icon: <FileBarChart2 size={20} />,
        title: 'Blog',
        path: '/blog',
        requiredPermissions: ['blog.r'], // Permissions needed for Blog
        userTypes: ['USER'],
    },
    {
        icon: <FileBarChart2 size={20} />,
        title: 'User Management',
        path: '/user-management',
        requiredPermissions: [], // Assuming no specific permissions required beyond userType
        userTypes: ['ADMIN'], // Only accessible to ADMIN
    },
    {
        icon: <FileBarChart2 size={20} />,
        title: 'Role Management',
        path: '/role-management',
        requiredPermissions: [], // Assuming no specific permissions required beyond userType
        userTypes: ['ADMIN'], // Only accessible to ADMIN
    },

];

const SidebarData = () => {

    let { user } = useAuthContext();

    // Helper function to check if the user has the required permissions
    const hasPermission = (requiredPermissions) => {
        if (!requiredPermissions || requiredPermissions.length === 0) return true;
        return requiredPermissions.every(permission => {
            const [section, action] = permission.split('.');
            return user?.role?.permissions[section]?.[action];
        });
    };

    // Filter sidebar items based on the user's permissions
    const filteredItems = sidebarItems.filter(item =>
        hasPermission(item.requiredPermissions) &&
        item.userTypes.includes(user?.userType)
    );

    return (
        <Sidebar>
            {filteredItems.map((item, index) => (
                <SidebarItem
                    key={item.title + item.path}
                    icon={item.icon}
                    title={item.title}
                    path={item.path}
                />
            ))}
        </Sidebar>
    );
};

export default SidebarData;