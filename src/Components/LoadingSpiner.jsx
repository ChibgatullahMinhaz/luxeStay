import { CircularProgress, Box } from '@mui/material';

export default function LoadingSpinner() {
  return (
   <div className='dark:bg-gray-900'>
     <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh" 
      
    >
      <CircularProgress  color="secondary" size={60} thickness={40}/>
    </Box>
   </div>
  );
}
