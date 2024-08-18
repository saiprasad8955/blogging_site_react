import SidebarData from '../pages/Sidebar/SidebarData';
import Header from '../pages/Header/Header';

const MainLayout = ({ children }) => {
    return (
        <div className='h-screen flex'>
            {/* Sidebar */}
            <SidebarData />

            {/* Main content area */}
            <div className='flex-1 h-full flex flex-col'>
                {/* Header */}
                <Header />

                {/* Content */}
                <main className='flex-1 p-5 h-full'>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
