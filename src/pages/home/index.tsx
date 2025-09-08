import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import ProvenEngineSection from './components/provenEngineSection';
import NextUpSection from './components/NextUpSection';
import TrustedStartupsSection from './components/TrustedSection';
import TestimonialSection from './testimonials';
import OurPartnersSection from './components/OurPartners';

const HomePage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { lng } = useParams<{ lng: string }>();

    const changeLanguage = (newLng: string) => {
        navigate(`/${newLng}`);
    };

    //  return (
    //     <div>
    //        <h1>
    //           {t('welcome')} ({lng || 'en'})
    //        </h1>
    //        <button onClick={() => changeLanguage('en')}>English</button>
    //        <button onClick={() => changeLanguage('es')}>Español</button>
    //     </div>
    //  );

    return (
        <Box className="flex flex-col flex-1">
            <HeroSection />
            <ProvenEngineSection />

            <NextUpSection />
            <TrustedStartupsSection />
            <TestimonialSection />
            <OurPartnersSection />
        </Box>
    );
};

export default HomePage;
