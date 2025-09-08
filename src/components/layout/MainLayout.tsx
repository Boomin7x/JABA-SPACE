import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import PrimarySearchAppBar from './Navbar';

const MainLayout = () => {
    return (
        <Box className="min-h-screen flex flex-col overflow-x-hidden relative overflow-y-auto">
            <div className="z-50">
                <PrimarySearchAppBar />
            </div>
            <div className="flex-1 flex flex-col">
                <Outlet />
            </div>
            <Footer />
        </Box>
    );
};

export default MainLayout;
