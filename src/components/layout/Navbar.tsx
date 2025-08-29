import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import useNavMenus from '../../hooks/useNavMenus';
import { Button } from '@mui/material';
import theme from '../../theme';
import { cn } from '../../lib/utils';

export default function PrimarySearchAppBar() {
   const { navItems } = useNavMenus();

   return (
      <AppBar
         sx={{
            background: (theme) => theme.palette.secondary.main,
            p: 2,
         }}
      >
         <Box
            sx={{
               flex: 1,
               display: 'flex',
               alignItems: 'center',
               gap: 4,
            }}
            className="container mx-auto"
         >
            <Box
               component={'img'}
               alt=""
               src="/vite.svg"
               sx={{
                  width: 'fit-content',
                  height: '2rem',
               }}
            />
            {navItems?.map((items) => {
               if (items?.gap) {
                  return <Box sx={{ flex: 1 }} />;
               }
               return (
                  <Box
                     sx={{
                        color: (theme) => theme.palette.secondary.contrastText,
                        ':before': {
                           bgcolor: theme.palette.primary.main,
                        },
                     }}
                     className={cn(
                        'py-3 relative overflow-hidden ',
                        'before:absolute before:h-[1px] before:w-full  before:bottom-0 before:left-0 before:transform before:-translate-x-full hover:before:translate-x-0 before:duration-300 before:transition-all before:ease-in-out',
                     )}
                  >
                     {items.title}
                  </Box>
               );
            })}
            <Button
               className="!rounded-full !px-5"
               sx={{
                  background: (theme) => theme.palette.primary.main,
                  color: (theme) => theme.palette.getContrastText(theme.palette.primary.main),
               }}
            >
               Apply
            </Button>
         </Box>
      </AppBar>
   );
}
