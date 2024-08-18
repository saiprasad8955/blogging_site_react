import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import LinkItem from './link-item';

// ----------------------------------------------------------------------

export default function CustomBreadcrumbs({ links, action, heading, activeLast }) {

  const lastLink = links[links.length - 1].name;

  return (
    <div className='flex justify-between items-center w-full'>
      <div >
        {/* HEADING */}
        {heading && (
          <Typography variant="h4" gutterBottom>
            {heading}
          </Typography>
        )}

        {/* BREADCRUMBS */}
        {!!links.length && (
          <Breadcrumbs separator={<Separator />} >
            {links.map((link) => (
              <LinkItem
                key={link.name || ''}
                link={link}
                activeLast={activeLast}
                disabled={link.name === lastLink}
              />
            ))}
          </Breadcrumbs>
        )}
      </div>

      {action && <> {action} </>}
    </div>
  );
}

CustomBreadcrumbs.propTypes = {
  sx: PropTypes.object,
  action: PropTypes.node,
  links: PropTypes.array,
  heading: PropTypes.string,
  activeLast: PropTypes.bool,
};

// ----------------------------------------------------------------------

function Separator() {
  return (
    <Box
      component="span"
      sx={{
        width: 4,
        height: 4,
        borderRadius: '50%',
        bgcolor: 'text.disabled',
      }}
    />
  );
}
