import React, { useState, useRef, useEffect } from 'react';
import {
    Box,
    Typography,
    Avatar,
    Container,
    Card,
    CardContent,
    Chip,
    IconButton,
    useTheme,
    alpha,
    Fade,
    Grow,
    Zoom,
} from '@mui/material';
import {
    FormatQuoteRounded,
    StarRounded,
    BusinessCenterOutlined,
    TrendingUpOutlined,
    GroupsOutlined,
    PlayArrowRounded,
    LinkedIn,
    Twitter,
    LaunchOutlined,
    VerifiedOutlined,
    AutoAwesomeOutlined,
} from '@mui/icons-material';

interface FloatingElementProps {
    children: React.ReactNode;
    delay: number;
    direction: 'up' | 'down' | 'left' | 'right';
}

const FloatingElement: React.FC<FloatingElementProps> = ({ children, delay, direction }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    const getTransform = () => {
        switch (direction) {
            case 'up':
                return 'translateY(20px)';
            case 'down':
                return 'translateY(-20px)';
            case 'left':
                return 'translateX(20px)';
            case 'right':
                return 'translateX(-20px)';
            default:
                return 'translateY(20px)';
        }
    };

    return (
        <Box
            sx={{
                transform: isVisible ? 'translate(0)' : getTransform(),
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
        >
            {children}
        </Box>
    );
};

const TestimonialSection: React.FC = () => {
    const theme = useTheme();
    const [isInView, setIsInView] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.2 },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const testimonialData = {
        quote: "Building a startup is lonely. DMZ's community pulled me in, but the expert support—from marketing to accounting—is what's kept me here. The value is real.",
        speaker: 'Paul Crowe',
        title: 'Co-founder & CEO, Metronome',
        image: 'https://cdn.prod.website-files.com/6807ee25c911fd3e8fed0d2f/68655ef04164bbf8a14333f0_Paul%20Croawe_Metronome.webp',
        company: 'Metronome',
        industry: 'Technology',
        rating: 5,
    };

    return (
        <Box
            component="section"
            ref={sectionRef}
            sx={{
                position: 'relative',
                py: { xs: 8, md: 12 },
                overflow: 'hidden',
                minHeight: { xs: 'auto', md: '100vh' },
                display: 'flex',
                alignItems: 'center',
            }}
        >
            {/* Floating Background Elements removed to avoid overflow on mobile */}

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
                <Box
                    display="grid"
                    gridTemplateColumns={{ xs: '1fr', lg: '1fr 1fr' }}
                    gap={{ xs: 4, md: 8 }}
                    alignItems="center"
                    minHeight={{ xs: 'auto', md: '80vh' }}
                >
                    {/* Left Side - Testimonial Content */}
                    <Box>
                        {/* Section Badge */}
                        <Fade in={isInView} timeout={800}>
                            <Box mb={{ xs: 3, md: 4 }}>
                                <Chip
                                    label="Success Story"
                                    icon={<AutoAwesomeOutlined />}
                                    sx={{
                                        py: 1,
                                        px: 3,
                                        fontSize: { xs: '12px', md: '14px' },
                                        fontWeight: 600,
                                        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.secondary.main, 0.1)})`,
                                        color: theme.palette.primary.main,
                                        border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                                        backdropFilter: 'blur(10px)',
                                        '& .MuiChip-icon': {
                                            color: theme.palette.primary.main,
                                        },
                                    }}
                                />
                            </Box>
                        </Fade>

                        {/* Quote Icon */}
                        <Zoom in={isInView} timeout={1000}>
                            <Box mb={{ xs: 2, md: 3 }}>
                                <FormatQuoteRounded
                                    sx={{
                                        fontSize: { xs: 56, md: 80 },
                                        color: alpha(theme.palette.primary.main, 0.2),
                                        transform: 'rotate(180deg)',
                                    }}
                                />
                            </Box>
                        </Zoom>

                        {/* Main Quote */}
                        <Fade in={isInView} timeout={1200}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontSize: { xs: '1.4rem', md: '2.2rem', lg: '2.6rem' },
                                    fontWeight: 600,
                                    lineHeight: 1.4,
                                    mb: { xs: 3, md: 4 },
                                    color: theme.palette.text.primary,
                                    position: 'relative',
                                    pr: { xs: 0, md: 6 },
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: -8,
                                        left: 0,
                                        width: 60,
                                        height: 4,
                                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                        borderRadius: 2,
                                    },
                                }}
                            >
                                "{testimonialData.quote}"
                            </Typography>
                        </Fade>

                        {/* Rating Stars */}
                        <Grow in={isInView} timeout={1400}>
                            <Box display="flex" gap={0.5} mb={{ xs: 2, md: 3 }}>
                                {[...Array(testimonialData.rating)].map((_, i) => (
                                    <StarRounded
                                        key={i}
                                        sx={{
                                            color: '#FFD700',
                                            fontSize: { xs: 20, md: 26 },
                                            filter: 'drop-shadow(0 2px 4px rgba(255, 215, 0, 0.3))',
                                            animation: `sparkle 2s ease-in-out infinite ${i * 0.2}s`,
                                            '@keyframes sparkle': {
                                                '0%, 100%': { transform: 'scale(1)' },
                                                '50%': { transform: 'scale(1.1)' },
                                            },
                                        }}
                                    />
                                ))}
                            </Box>
                        </Grow>

                        {/* Speaker Info */}
                        <Fade in={isInView} timeout={1600}>
                            <Box display="flex" alignItems="center" gap={2} mb={{ xs: 3, md: 4 }}>
                                <Box>
                                    <Typography
                                        variant="h6"
                                        fontWeight={700}
                                        sx={{
                                            color: theme.palette.text.primary,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                        }}
                                    >
                                        {testimonialData.speaker}
                                        <VerifiedOutlined
                                            sx={{
                                                fontSize: { xs: 18, md: 20 },
                                                color: theme.palette.primary.main,
                                            }}
                                        />
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        fontWeight={500}
                                        sx={{ fontSize: { xs: '0.95rem', md: '1rem' } }}
                                    >
                                        {testimonialData.title}
                                    </Typography>
                                </Box>
                            </Box>
                        </Fade>

                        {/* Company Tags */}
                        <Grow in={isInView} timeout={1800}>
                            <Box display="flex" flexWrap="wrap" gap={2}>
                                <Chip
                                    icon={
                                        <BusinessCenterOutlined
                                            sx={{
                                                fontSize: { xs: '1rem', md: '1.1rem' },
                                            }}
                                        />
                                    }
                                    label={testimonialData.company}
                                    variant="outlined"
                                    sx={{
                                        borderColor: alpha(theme.palette.primary.main, 0.3),
                                        color: theme.palette.primary.main,
                                        background: theme.palette.secondary.main,
                                        '& .MuiChip-icon': {
                                            color: theme.palette.primary.main,
                                        },
                                        px: 1,
                                    }}
                                />
                                <Chip
                                    icon={
                                        <TrendingUpOutlined
                                            sx={{
                                                fontSize: { xs: '1rem', md: '1.1rem' },
                                            }}
                                        />
                                    }
                                    label={testimonialData.industry}
                                    variant="outlined"
                                    sx={{
                                        borderColor: alpha(theme.palette.secondary.main, 0.3),
                                        color: theme.palette.secondary.main,
                                        '& .MuiChip-icon': {
                                            color: theme.palette.secondary.main,
                                        },
                                        px: 1,
                                    }}
                                />
                            </Box>
                        </Grow>
                    </Box>

                    {/* Right Side - Image and Interactive Elements */}
                    <Box
                        position="relative"
                        display="flex"
                        justifyContent="center"
                        sx={{ overflow: 'hidden' }}
                    >
                        {/* Main Profile Card */}
                        <Zoom in={isInView} timeout={1000}>
                            <Card
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                sx={{
                                    maxWidth: 800,
                                    width: '100%',
                                    background: `linear-gradient(145deg, 
                                        ${alpha(theme.palette.background.paper, 0.9)}, 
                                        ${alpha(theme.palette.background.paper, 0.7)}
                                    )`,
                                    backdropFilter: 'blur(20px)',
                                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                                    borderRadius: '3px',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                                    transform: isHovered
                                        ? 'translateY(-12px) scale(1.02)'
                                        : 'translateY(0) scale(1)',
                                    boxShadow: 'none',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: 6,
                                        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                        opacity: isHovered ? 1 : 0.7,
                                        transition: 'opacity 0.3s ease',
                                    },
                                }}
                            >
                                <CardContent sx={{ p: 0 }}>
                                    {/* Profile Image Container */}
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            height: { xs: 360, sm: 420, md: 560 },
                                            maxHeight: '75vh',
                                            overflow: 'hidden',
                                            background: `linear-gradient(135deg, 
                                                ${alpha(theme.palette.primary.main, 0.1)}, 
                                                ${alpha(theme.palette.secondary.main, 0.1)}
                                            )`,
                                        }}
                                    >
                                        <Avatar
                                            src={testimonialData.image}
                                            alt={testimonialData.speaker}
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: 0,
                                                transition: 'transform 0.6s ease',
                                                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                                                '& img': {
                                                    objectFit: 'cover',
                                                },
                                            }}
                                        />

                                        {/* Overlay Gradient */}
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                height: '40%',
                                                background: `linear-gradient(transparent, ${alpha(theme.palette.background.paper, 0.9)})`,
                                            }}
                                        />

                                        {/* Play Button Overlay */}
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                opacity: isHovered ? 1 : 0,
                                                transition: 'opacity 0.3s ease',
                                            }}
                                        >
                                            <IconButton
                                                sx={{
                                                    width: { xs: 64, md: 80 },
                                                    height: { xs: 64, md: 80 },
                                                    background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.9)}, ${alpha(theme.palette.secondary.main, 0.9)})`,
                                                    backdropFilter: 'blur(10px)',
                                                    color: 'white',
                                                    '&:hover': {
                                                        transform: 'scale(1.1)',
                                                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                                    },
                                                }}
                                            >
                                                <PlayArrowRounded
                                                    sx={{ fontSize: { xs: 30, md: 36 } }}
                                                />
                                            </IconButton>
                                        </Box>
                                    </Box>

                                    {/* Card Footer */}
                                    <Box p={{ xs: 2, md: 3 }}>
                                        <Box
                                            display="flex"
                                            justifyContent="between"
                                            alignItems="center"
                                            flexWrap="wrap"
                                            gap={1.5}
                                        >
                                            <Box>
                                                <Typography
                                                    variant="h6"
                                                    fontWeight={700}
                                                    sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}
                                                >
                                                    {testimonialData.speaker}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {testimonialData.title}
                                                </Typography>
                                            </Box>
                                            <Box display="flex" gap={1}>
                                                <IconButton
                                                    size="small"
                                                    sx={{
                                                        color: theme.palette.primary.main,
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                            transform: 'translateY(-2px)',
                                                            color: theme.palette.secondary.main,
                                                        },
                                                    }}
                                                >
                                                    <LinkedIn />
                                                </IconButton>
                                                <IconButton
                                                    size="small"
                                                    sx={{
                                                        color: theme.palette.primary.main,
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                            transform: 'translateY(-2px)',
                                                            color: theme.palette.secondary.main,
                                                        },
                                                    }}
                                                >
                                                    <LaunchOutlined />
                                                </IconButton>
                                            </Box>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Zoom>

                        {/* Floating Stat Cards - constrained within parent */}
                        <FloatingElement delay={2000} direction="left">
                            <Card
                                sx={{
                                    position: 'absolute',
                                    top: { xs: 12, md: 20 },
                                    right: { xs: 12, md: 12 },
                                    p: 2,
                                    background: `white`,
                                    backdropFilter: 'blur(20px)',
                                    borderRadius: 3,
                                    border: `1px solid ${alpha(theme.palette.success.main, 0.2)}`,
                                    minWidth: 120,
                                    boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                                }}
                            >
                                <Box display="flex" alignItems="center" gap={1}>
                                    <TrendingUpOutlined
                                        sx={{
                                            color: theme.palette.success.main,
                                            fontSize: { xs: 18, md: 20 },
                                        }}
                                    />
                                    <Box>
                                        <Typography
                                            variant="h6"
                                            fontWeight={700}
                                            color="success.main"
                                            sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}
                                        >
                                            +150%
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            Growth
                                        </Typography>
                                    </Box>
                                </Box>
                            </Card>
                        </FloatingElement>

                        <FloatingElement delay={2200} direction="right">
                            <Card
                                sx={{
                                    position: 'absolute',
                                    bottom: { xs: 12, md: 60 },
                                    left: { xs: 12, md: 12 },
                                    p: 2,
                                    background: `white`,
                                    backdropFilter: 'blur(20px)',
                                    borderRadius: 3,
                                    border: `1px solid ${alpha(theme.palette.secondary.main, 0.1)}`,
                                    minWidth: 120,
                                    boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                                }}
                            >
                                <Box display="flex" alignItems="center" gap={1}>
                                    <GroupsOutlined
                                        sx={{
                                            color: theme.palette.info.main,
                                            fontSize: { xs: 18, md: 20 },
                                        }}
                                    />
                                    <Box>
                                        <Typography
                                            variant="h6"
                                            fontWeight={700}
                                            color="info.main"
                                            sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}
                                        >
                                            500+
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            Network
                                        </Typography>
                                    </Box>
                                </Box>
                            </Card>
                        </FloatingElement>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default TestimonialSection;
