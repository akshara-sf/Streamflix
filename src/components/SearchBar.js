import { Box, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ setSearchTerm }) {
  return (
    <Box sx={{ my: 4, px: 2 }}>
      <TextField
        placeholder="Search movies and TV shows..."
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: '#B8A7FF' }} />
            </InputAdornment>
          ),
        }}
        sx={{
          width: { xs: '100%', sm: '50%' },
          mx: 'auto',
          '& .MuiInputBase-root': {
            bgcolor: '#1A0B4F',
            color: '#B8A7FF',
            borderRadius: '24px',
            pl: 2,
            fontSize: '1rem',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#00E7FF',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FF5E78',
          },
          '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FF5E78',
            boxShadow: '0 0 12px rgba(255, 94, 120, 0.5)',
          },
        }}
      />
    </Box>
  );
}

export default SearchBar;