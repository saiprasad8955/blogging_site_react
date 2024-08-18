import AccountPopover from "../../components/Account-Popover/account-popover";


const Header = () => {

    return (
        <div className='flex justify-end  w-full'>
            <div className='flex items-center'>

                <AccountPopover />
            </div>
        </div>
    )
};

export default Header;
