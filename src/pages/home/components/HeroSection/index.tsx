import { Box, Button, Typography } from '@mui/material';

const HeroSection = () => {
   return (
      <Box
         component="section"
         sx={{
            background: (theme) => theme.palette.secondary.main,
            color: (theme) => theme.palette.getContrastText(theme.palette.secondary.main),
         }}
         className="h-[90vh] w-full flex flex-col"
      >
         <Box className="container flex-1 mx-auto grid gap-8 grid-cols-2">
            <Box className="size-full flex flex-col justify-center gap-8">
               <Typography variant="h1" className="tracking-wide">
                  You{' '}
                  <Typography
                     component="span"
                     variant="h1"
                     sx={{ color: (theme) => theme.palette.primary.main }}
                  >
                     Build
                  </Typography>
                  . <br />
                  We've got your back.
               </Typography>
               <Typography className="!text-lg tracking-wide">
                  From first prototype to global traction, we help tech founders grow with
                  mentorship, investment and world-class startup support — so you can scale with
                  clarity and confidence.
               </Typography>
               <Box className="flex items-center gap-6">
                  <Button
                     sx={{
                        p: '1rem 2rem',
                        fontSize: '1.1rem',
                        bgcolor: (theme) => theme.palette.primary.main,
                        color: (theme) => theme.palette.primary.contrastText,
                     }}
                  >
                     Scale your startup
                  </Button>
                  <Button
                     sx={{
                        p: '1rem 2rem',
                        fontSize: '1.1rem',
                        letterSpacing: '0.025em',
                        border: '2px solid',
                        borderColor: (theme) => theme.palette.primary.main,
                        color: (theme) => theme.palette.primary.main,
                     }}
                  >
                     Learn Startup skills
                  </Button>
               </Box>
            </Box>
            <Box className="size-full flex flex-col justify-center gap-8 relative overflow-hidden">
               <Box className="h-3/4 w-full rounded-2xl relative overflow-hidden">
                  <video
                     src="/vidoe.mp4"
                     className=" absolute inset-0 size-full object-cover"
                     loop
                     autoPlay
                     muted
                  ></video>
               </Box>
            </Box>
         </Box>
      </Box>
   );
};

export default HeroSection;
