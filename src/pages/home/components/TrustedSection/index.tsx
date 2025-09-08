import { Groups, Public, TrendingUp, Work } from '@mui/icons-material';
import {
    Box,
    Card,
    CardContent,
    Container,
    Fade,
    Grid,
    Grow,
    Typography,
    type SxProps,
    type Theme,
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import type { IconType } from '../../../../utils/types';

interface AnimatedNumberProps {
    value: string;
    suffix?: string;
    prefix?: string;
    duration?: number;
}

interface StatCardProps {
    icon: IconType;
    value: string;
    label: string;
    delay?: number;
    index: number;
}

interface StatData {
    icon: IconType;
    value: string;
    label: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
    value,
    suffix = '',
    prefix = '',
    duration = 2000,
}) => {
    const [displayValue, setDisplayValue] = useState<number>(0);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const elementRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 },
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [isVisible]);

    useEffect(() => {
        if (isVisible) {
            let startValue = 0;
            const numValue = parseFloat(value.replace(/[^0-9.]/g, ''));
            const increment = numValue / (duration / 50);

            const timer = setInterval(() => {
                startValue += increment;
                if (startValue >= numValue) {
                    startValue = numValue;
                    clearInterval(timer);
                }
                setDisplayValue(startValue);
            }, 50);

            return () => clearInterval(timer);
        }
    }, [isVisible, value, duration]);

    const formatNumber = (num: number): string => {
        if (value.includes('B')) {
            return (num / 1000).toFixed(2) + 'B';
        }
        if (num >= 1000) {
            return Math.floor(num).toLocaleString();
        }
        return Math.floor(num).toString();
    };

    return (
        <span ref={elementRef}>
            {prefix}
            {formatNumber(displayValue)}
            {suffix}
        </span>
    );
};

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, delay = 0, index }) => {
    const [hovered, setHovered] = useState<boolean>(false);

    const cardSx: SxProps<Theme> = {
        height: '100%',
        background:
            'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: 1,
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transform: hovered ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: hovered
            ? '0 25px 50px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.3)'
            : '0 10px 30px rgba(0,0,0,0.1)',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
            zIndex: 0,
        },
    };

    const iconContainerSx: SxProps<Theme> = {
        width: { xs: 64, sm: 72, md: 80 },
        height: { xs: 64, sm: 72, md: 80 },
        borderRadius: '50%',
        background: hovered
            ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            : 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: hovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
        boxShadow: hovered
            ? '0 15px 30px rgba(102, 126, 234, 0.4)'
            : '0 8px 20px rgba(102, 126, 234, 0.2)',
        '&::after': {
            content: '""',
            position: 'absolute',
            top: -2,
            left: -2,
            right: -2,
            bottom: -2,
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #FFD700, #FFA500)',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
            zIndex: -1,
        },
    };

    const valueSx: SxProps<Theme> = {
        fontWeight: 900,
        mb: { xs: 1.5, md: 2 },
        background: hovered
            ? 'linear-gradient(45deg, #FFD700 0%, #FFA500 100%)'
            : 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: { xs: '2rem', sm: '2.6rem', md: '3.2rem' },
        transition: 'all 0.3s ease',
        textShadow: hovered ? '0 0 20px rgba(255, 215, 0, 0.3)' : 'none',
    };

    const labelSx: SxProps<Theme> = {
        color: hovered ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.8)',
        fontWeight: 600,
        fontSize: { xs: '0.95rem', sm: '1.05rem' },
        textTransform: 'capitalize',
        transition: 'color 0.3s ease',
        letterSpacing: '0.5px',
    };

    const Icon = icon;

    return (
        <Grow
            in={true}
            timeout={1000}
            style={{
                transitionDelay: `${delay}ms`,
                transformOrigin: 'center',
            }}
        >
            <Card
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                sx={cardSx}
            >
                <CardContent
                    sx={{
                        textAlign: 'center',
                        p: { xs: 3, md: 4 },
                        position: 'relative',
                        zIndex: 1,
                        '&:last-child': { pb: { xs: 3, md: 4 } },
                    }}
                >
                    <Box
                        sx={{
                            mb: { xs: 2.5, md: 3 },
                            display: 'flex',
                            justifyContent: 'center',
                            position: 'relative',
                        }}
                    >
                        <Box sx={iconContainerSx}>
                            <Icon
                                sx={{
                                    fontSize: { xs: 28, md: 32 },
                                    color: 'white',
                                    transition: 'all 0.3s ease',
                                    transform: hovered ? 'scale(1.1)' : 'scale(1)',
                                }}
                            />
                        </Box>
                    </Box>

                    <Typography variant="h3" sx={valueSx}>
                        <AnimatedNumber value={value} />
                    </Typography>

                    <Typography variant="body1" sx={labelSx}>
                        {label}
                    </Typography>
                </CardContent>
            </Card>
        </Grow>
    );
};

const TrustedStartupsSection: React.FC = () => {
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);

    const stats: StatData[] = [
        {
            icon: TrendingUp,
            value: '$2.95B+',
            label: 'raised by DMZ startups',
        },
        {
            icon: Public,
            value: '15+',
            label: 'countries with DMZ programs',
        },
        {
            icon: Groups,
            value: '3,000',
            label: 'investors & mentors in your corner',
        },
        {
            icon: Work,
            value: '25,000+',
            label: 'jobs created',
        },
    ];

    const containerSx: SxProps<Theme> = {
        minHeight: { xs: 'auto', md: '100vh' },
        background: (theme) =>
            `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, black 100%)`,
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 6, md: 12 },
        display: 'flex',
        alignItems: 'center',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
        radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)
      `,
            animation: 'float 6s ease-in-out infinite',
            pointerEvents: 'none',
        },
        '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
            '50%': { transform: 'translateY(-20px) rotate(1deg)' },
        },
    };

    const titleSx: SxProps<Theme> = {
        fontWeight: 900,
        mb: { xs: 3, md: 6 },
        color: 'white',
        fontSize: { xs: '2.2rem', sm: '3.2rem', md: '4rem', lg: '4.5rem' },
        lineHeight: 1.1,
        textShadow: '0 4px 30px rgba(0,0,0,0.2)',
        letterSpacing: '-0.02em',
    };

    const highlightSx: SxProps<Theme> = {
        background: 'linear-gradient(45deg, #FFD700 20%, #FFA500 80%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: 'none',
        position: 'relative',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -8,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(45deg, #FFD700, #FFA500)',
            borderRadius: 2,
            opacity: 0.6,
        },
    };

    const imageContainerSx: SxProps<Theme> = {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 2,
        boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
        transform: {
            xs: 'none',
            lg: 'perspective(1200px) rotateY(-8deg) rotateX(5deg)',
        },
        transition: 'all 0.6s ',
        '&:hover': {
            transform: {
                xs: 'translateY(-8px) scale(1.015)',
                lg: 'perspective(1200px) rotateY(0deg) rotateX(0deg) translateY(-15px) scale(1.02)',
            },
            boxShadow: '0 40px 80px rgba(0,0,0,0.4)',
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
                'linear-gradient(45deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15))',
            borderRadius: 2,
            opacity: 0,
            transition: 'opacity 0.4s ease',
            zIndex: 2,
            pointerEvents: 'none',
        },
        '&:hover::after': {
            opacity: 1,
        },
    };

    const imageSx: SxProps<Theme> = {
        width: '100%',
        height: 'auto',
        display: 'block',
        borderRadius: 2,
        transition: 'transform 0.6s ',
        transform: imageLoaded ? 'scale(1)' : 'scale(1.05)',
        opacity: imageLoaded ? 1 : 0,
    };

    const overlayGradientSx: SxProps<Theme> = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(45deg, rgba(0,0,0,0.1), transparent 40%)',
        borderRadius: 6,
        zIndex: 1,
    };

    return (
        <Box sx={containerSx}>
            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={{ xs: 4, lg: 6 }} alignItems="center">
                    {/* Left side - Content */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box sx={{ pr: { lg: 4 } }}>
                            <Fade in={true} timeout={1200}>
                                <Typography variant="h1" sx={titleSx}>
                                    Trusted by{' '}
                                    <Box component="span" sx={highlightSx}>
                                        2400+
                                    </Box>
                                    <br />
                                    startups.
                                </Typography>
                            </Fade>

                            <Grid container spacing={3}>
                                {stats.map((stat: StatData, index: number) => (
                                    <Grid size={{ xs: 12, sm: 6 }} key={index}>
                                        <StatCard {...stat} delay={index * 200} index={index} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Grid>

                    {/* Right side - Image */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Fade in={true} timeout={1500} style={{ transitionDelay: '400ms' }}>
                            <Box sx={imageContainerSx}>
                                <Box
                                    component="img"
                                    src="https://cdn.prod.website-files.com/6807ee25c911fd3e8fed0d2f/684c5da798d93d2fb9fc1047_homepage.webp"
                                    alt="DMZ Startups Community"
                                    loading="lazy"
                                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 600px"
                                    onLoad={() => setImageLoaded(true)}
                                    sx={imageSx}
                                />

                                {/* Gradient overlay for better contrast */}
                                <Box sx={overlayGradientSx} />
                            </Box>
                        </Fade>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default TrustedStartupsSection;
