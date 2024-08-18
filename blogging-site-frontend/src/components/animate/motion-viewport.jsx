import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';


import { varContainer } from './variants';

// ----------------------------------------------------------------------

export default function MotionViewport({ children, disableAnimatedMobile = true, ...other }) {


  return (
    <Box
      component={m.div}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={varContainer()}
      {...other}
    >
      {children}
    </Box>
  );
}

MotionViewport.propTypes = {
  children: PropTypes.node,
  disableAnimatedMobile: PropTypes.bool,
};
