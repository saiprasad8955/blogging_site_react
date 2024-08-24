import { m } from 'framer-motion';
// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// routes
// hooks
// auth
import useAuthContext from '../../auth/hook/use-context-hook';
// components
import { varHover } from '../animate';
import { useSnackbar } from '../Snackbar';
import CustomPopover, { usePopover } from '../custom-popover';

// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

export default function AccountPopover() {

    const { user, logout } = useAuthContext();


    const { enqueueSnackbar } = useSnackbar();

    const popover = usePopover();

    const handleLogout = async () => {
        try {
            await logout();
            popover.onClose();
            // router.replace('/');
        } catch (error) {
            console.error(error);
            enqueueSnackbar('Unable to logout!', { variant: 'error' });
        }
    };


    return (
        <>
            <div className='p-4'>

                <IconButton
                    component={m.button}
                    whileTap="tap"
                    whileHover="hover"
                    variants={varHover(1.05)}
                    onClick={popover.onOpen}
                    sx={{
                        width: 40,
                        height: 40,
                        background: (theme) => alpha(theme.palette.grey[500], 0.08),
                        ...(popover.open && {
                            background: (theme) =>
                                `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
                        }),
                    }}
                >
                    <Avatar
                        src={user?.photoURL}
                        alt={user?.fname}
                        sx={{
                            width: 36,
                            height: 36,
                            border: (theme) => `solid 2px ${theme.palette.background.default}`,
                        }}
                    />
                </IconButton>
            </div>


            <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 200, }}>
                <Box sx={{ p: 2, pb: 1.5 }}>
                    <Typography variant="subtitle2" noWrap>
                        {`${user?.fname} ${user?.lname}`}
                    </Typography>

                    <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                        {user?.email}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                        {user?.userType === 'ADMIN' ? user?.userType : user?.role?.name}
                    </Typography>
                </Box>


                <Divider sx={{ borderStyle: 'dashed' }} />

                <MenuItem
                    onClick={handleLogout}
                    sx={{ m: 1, fontWeight: 'fontWeightBold', color: 'error.main' }}
                >
                    Logout
                </MenuItem>
            </CustomPopover>
        </>
    );
}
