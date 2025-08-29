import { Box, Typography } from '@mui/material';
import ListGrid from './listGrid';

const ProvenEngineSection = () => {
   const founderArray = [
      {
         label: 'One-on-one and customized mentorship',
         isButton: false,
      },
      {
         label: 'Investor access and global scaling',
         isButton: false,
      },
      {
         label: 'Community and networking',
         isButton: false,
      },
      {
         label: 'Explore Startup Programs',
         isButton: true,
      },
   ];
   const studentArray = [
      {
         label: 'Learn industry relevant skills',
         isButton: false,
      },
      {
         label: 'Network with industry pros',
         isButton: false,
      },
      {
         label: 'Get certified and earn badges',
         isButton: false,
      },
      {
         label: 'Explore Upskilling Programs',
         isButton: true,
      },
   ];
   return (
      <section>
         <Box className="flex flex-col w-full container mx-auto my-20">
            <Typography variant="h1">
               A proven{' '}
               <Typography
                  variant="h1"
                  component="span"
                  sx={{
                     color: (theme) => theme.palette.primary.main,
                  }}
               >
                  engine
               </Typography>{' '}
               for startup <br /> & professional growth.
            </Typography>
            <Box className=" grid grid-cols-2 mt-12 gap-12">
               <Box>
                  <Typography variant="h5" fontWeight={700}>
                     For Founders
                  </Typography>

                  {founderArray.map((items, i) => {
                     return <ListGrid key={'founderArray' + i} {...items} />;
                  })}
               </Box>
               <Box>
                  <Typography fontWeight={700} variant="h5">
                     For students & professionals
                  </Typography>

                  {studentArray.map((items, i) => {
                     return <ListGrid key={'founderArray' + i} {...items} />;
                  })}
               </Box>
            </Box>
         </Box>
      </section>
   );
};

export default ProvenEngineSection;
