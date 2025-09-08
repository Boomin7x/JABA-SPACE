import React from 'react';
import {
    Box,
    Typography,
    Button,
    Container,
    Chip,
    styled,
    keyframes,
    useTheme,
    alpha,
} from '@mui/material';
import { ArrowForward, BusinessCenter, Handshake, TrendingUp } from '@mui/icons-material';

// Keyframe animations
const marquee = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const marqueeReverse = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const pulseGlow = keyframes`
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
`;

// Styled Components
const StyledSection = styled(Box)(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    background: `linear-gradient(135deg, 
    ${theme.palette.grey[50]} 0%, 
    ${alpha(theme.palette.primary.light, 0.08)} 50%,
    ${alpha(theme.palette.secondary.light, 0.05)} 100%)`,
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
      radial-gradient(circle at 20% 20%, ${alpha(theme.palette.primary.main, 0.08)} 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, ${alpha(theme.palette.secondary.main, 0.06)} 0%, transparent 50%)
    `,
        pointerEvents: 'none',
    },
}));

const BadgeChip = styled(Chip)(({ theme }) => ({
    background: alpha(theme.palette.primary.main, 0.1),
    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
    color: theme.palette.primary.dark,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    '& .MuiChip-icon': {
        color: theme.palette.primary.main,
    },
}));

const GradientTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 900,
    background: `linear-gradient(135deg, 
    ${theme.palette.text.primary} 0%, 
    ${theme.palette.primary.main} 50%,
    ${theme.palette.secondary.main} 100%)`,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    lineHeight: 1.1,
}));

const MarqueeContainer = styled(Box)(({ theme }) => ({
    overflow: 'hidden',
    position: 'relative',
    maskImage: `linear-gradient(to right, transparent 0, black 40px, black calc(100% - 40px), transparent 100%)`,
    WebkitMaskImage: `linear-gradient(to right, transparent 0, black 40px, black calc(100% - 40px), transparent 100%)`,
    '@media (min-width:600px)': {
        maskImage: `linear-gradient(to right, transparent 0, black 80px, black calc(100% - 80px), transparent 100%)`,
        WebkitMaskImage: `linear-gradient(to right, transparent 0, black 80px, black calc(100% - 80px), transparent 100%)`,
    },
}));

const MarqueeTrack = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'reverse' && prop !== 'speed',
})<{ reverse?: boolean; speed?: number }>(({ reverse, speed = 60 }) => ({
    display: 'flex',
    animation: `${reverse ? marqueeReverse : marquee} ${speed}s linear infinite`,
    willChange: 'transform',
}));

const PartnerChip = styled(Chip)(({ theme }) => ({
    margin: theme.spacing(0, 2),
    padding: theme.spacing(1.25, 2.5),
    fontSize: '0.95rem',
    fontWeight: 700,
    backgroundColor: alpha(theme.palette.common.white, 0.9),
    backdropFilter: 'blur(12px)',
    border: `1.5px solid ${alpha(theme.palette.primary.main, 0.15)}`,
    color: theme.palette.text.primary,
    boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.1)}`,
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    whiteSpace: 'nowrap',
    '@media (min-width:600px)': {
        padding: theme.spacing(1.5, 3),
        fontSize: '1rem',
    },
    '&:hover': {
        backgroundColor: alpha(theme.palette.primary.main, 0.08),
        borderColor: alpha(theme.palette.primary.main, 0.4),
        transform: 'translateY(-2px) scale(1.01)',
        boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.25)}`,
        '& .MuiChip-icon': {
            transform: 'rotate(360deg)',
            color: theme.palette.primary.main,
        },
    },
    '& .MuiChip-icon': {
        color: theme.palette.primary.light,
        fontSize: 20,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    },
}));

const PremiumButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(1.5, 4),
    fontSize: '1.05rem',
    fontWeight: 700,
    borderRadius: 50,
    textTransform: 'none',
    color: theme.palette.secondary.contrastText,
    background: theme.palette.secondary.main,
    boxShadow: `none`,
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '@media (min-width:900px)': {
        padding: theme.spacing(2, 5),
        fontSize: '1.2rem',
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        background: `linear-gradient(90deg, 
      transparent, 
      ${alpha(theme.palette.common.white, 0.2)}, 
      transparent)`,
        transition: 'left 0.6s',
    },
    '&:hover': {
        transform: 'translateY(-3px) scale(1.02)',
        boxShadow: `0 16px 48px ${alpha(theme.palette.primary.main, 0.5)}`,
        '&::before': {
            left: '100%',
        },
        '& .MuiSvgIcon-root': {
            transform: 'translateX(4px)',
        },
    },
    '& .MuiSvgIcon-root': {
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
}));

const PulsingDot = styled(Box)(({ theme }) => ({
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    animation: `${pulseGlow} 2s infinite`,
    '&:nth-of-type(2)': {
        width: 6,
        height: 6,
        backgroundColor: theme.palette.primary.light,
        animationDelay: '0.3s',
    },
    '&:nth-of-type(3)': {
        width: 4,
        height: 4,
        backgroundColor: alpha(theme.palette.primary.main, 0.7),
        animationDelay: '0.6s',
    },
}));

const OurPartnersSection: React.FC = () => {
    const theme = useTheme();

    const partners = [
        'Scotiabank',
        'TELUS Ventures',
        'Unilever',
        'P&G',
        'pennyappeal canada',
        'FedEx',
        'Desjardins',
        'Accenture',
        'Pariveda',
        'Toronto',
        'DMZ',
        'Torys',
        'Shopify',
        'Magna',
        'TorQuest',
    ];

    const duplicatedPartners = [...partners, ...partners];

    const MarqueeRow: React.FC<{ reverse?: boolean; speed?: number }> = ({
        reverse = false,
        speed = 60,
    }) => (
        <MarqueeContainer>
            <MarqueeTrack reverse={reverse} speed={speed}>
                {duplicatedPartners.map((partner, index) => (
                    <PartnerChip
                        key={index}
                        label={partner}
                        icon={<BusinessCenter />}
                        variant="outlined"
                    />
                ))}
            </MarqueeTrack>
        </MarqueeContainer>
    );

    return (
        <StyledSection sx={{ py: { xs: 8, md: 16 } }}>
            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Header Section */}
                <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 12 } }}>
                    {/* Animated Badge */}
                    <Box sx={{ mb: 3 }}>
                        <BadgeChip
                            size="small"
                            icon={<Handshake />}
                            label={
                                <Typography fontSize="12px" fontWeight="bold">
                                    Partnerships
                                </Typography>
                            }
                            sx={{
                                px: 3,
                                py: 1.2,
                                fontSize: '8px',
                            }}
                        />
                    </Box>

                    {/* Main Title */}
                    <GradientTitle
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2.2rem', sm: '3rem', md: '4.5rem', lg: '6rem' },
                            mb: 3,
                            maxWidth: { xs: 700, md: 'none' },
                            mx: 'auto',
                        }}
                    >
                        Our Partners
                    </GradientTitle>

                    {/* Subtitle */}
                    <Typography
                        variant="h4"
                        sx={{
                            color: 'text.secondary',
                            fontWeight: 400,
                            maxWidth: 640,
                            mx: 'auto',
                            fontSize: { xs: '1.05rem', md: '1.5rem' },
                            lineHeight: 1.6,
                            mb: 2,
                            px: { xs: 2, md: 0 },
                        }}
                    >
                        An ecosystem built on value-driven partnerships
                    </Typography>
                </Box>

                {/* Marquee Section */}
                <Box sx={{ mb: { xs: 6, md: 12 } }}>
                    <Box sx={{ mb: 3 }}>
                        <MarqueeRow speed={80} />
                    </Box>

                    <Box sx={{ mb: 3 }}>
                        <MarqueeRow reverse speed={80} />
                    </Box>
                </Box>

                {/* CTA Section */}
                <Box sx={{ textAlign: 'center' }}>
                    <PremiumButton variant="contained" size="large" endIcon={<ArrowForward />}>
                        Explore Partners
                    </PremiumButton>

                    <Typography
                        variant="body2"
                        sx={{
                            mt: 3,
                            color: 'text.secondary',
                            fontSize: { xs: '0.95rem', md: '1rem' },
                            maxWidth: 420,
                            mx: 'auto',
                            px: { xs: 2, md: 0 },
                        }}
                    >
                        Discover how our strategic partnerships drive innovation and create lasting
                        value for our ecosystem
                    </Typography>
                </Box>
            </Container>
        </StyledSection>
    );
};

export default OurPartnersSection;
