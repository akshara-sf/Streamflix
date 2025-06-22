import { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';

function GenreTabs({ setGenre }) {
  const [value, setValue] = useState(0);
  const genres = ['All', 'Sci-Fi', 'Comedy', 'Thriller', 'Action', 'Romance'];

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setGenre(genres[newValue]);
  };

  return (
    <Box sx={{ mb: 4, px: 2 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          '& .MuiTab-root': {
            color: '#B8A7FF',
            fontWeight: 600,
            fontSize: '1rem',
            textTransform: 'none',
            transition: 'all 0.3s ease',
            '&:hover': {
              color: '#00E7FF',
              transform: 'scale(1.05)',
            },
          },
          '& .Mui-selected': {
            color: '#00E7FF !important',
          },
          '& .MuiTabs-indicator': {
            height: 3,
            background: 'linear-gradient(90deg, #FF5E78, #00E7FF)',
          },
        }}
      >
        {genres.map((genre) => (
          <Tab key={genre} label={genre} />
        ))}
      </Tabs>
    </Box>
  );
}

export default GenreTabs;