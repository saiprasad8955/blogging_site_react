import { MaterialDesignContent } from 'notistack';
// @mui
import { styled, alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export const StyledNotistack = styled(MaterialDesignContent)(() => {
  return {
    '& #notistack-snackbar': {
      fontWeight: 600, // Example static typography equivalent to `theme.typography.subtitle2`
      padding: 0,
      flexGrow: 1,
    },
    '&.notistack-MuiContent': {
      padding: '4px', // Replacing `theme.spacing(0.5)`
      paddingRight: '16px', // Replacing `theme.spacing(2)`
      color: '#000000', // Static color value, replace with your desired text color
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)', // Example static shadow value
      borderRadius: '8px', // Static border radius value
      backgroundColor: '#ffffff', // Static background color value
    },
    '&.notistack-MuiContent-default': {
      padding: '8px', // Replacing `theme.spacing(1)`
      color: '#ffffff', // Example static color for light mode
      backgroundColor: '#424242', // Static background color for dark mode, replace accordingly
    },
    // '&.notistack-MuiContent-info': {},
    // '&.notistack-MuiContent-success': {},
    // '&.notistack-MuiContent-warning': {},
    // '&.notistack-MuiContent-error': {},
  };
});

// ----------------------------------------------------------------------

export const StyledIcon = styled('span')(({ color }) => ({
  width: 44,
  height: 44,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '12px', // Replacing `theme.spacing(1.5)`
  color: color || '#000000', // Replace with a default color if needed
  borderRadius: '8px', // Static border radius value
  backgroundColor: alpha(color || '#000000', 0.16), // Adjust `alpha` usage if needed
}));
