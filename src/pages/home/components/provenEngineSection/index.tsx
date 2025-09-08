import React, { useState, useRef, useEffect } from 'react';
import {
    Box,
    Typography,
    Button,
    Card,
    CardContent,
    Container,
    Chip,
    Avatar,
    IconButton,
    Fade,
    Grow,
    useTheme,
    alpha,
} from '@mui/material';
import {
    RocketLaunchOutlined,
    SchoolOutlined,
    ArrowForwardIos,
    TrendingUpOutlined,
    NetworkCheckOutlined,
    EmojiEventsOutlined,
    GroupsOutlined,
    CampaignOutlined,
    AutoAwesomeOutlined,
    KeyboardArrowRight,
} from '@mui/icons-material';

interface FeatureItem {
    label: string;
    isButton: boolean;
    icon?: React.ReactNode;
    description?: string;
}

interface FeatureCardProps extends FeatureItem {
    index: number;
    category: 'founder' | 'student';
    isVisible: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    label,
    isButton,
    icon,
    description,
    index,
    category,
    isVisible,
}) => {
    const theme = useTheme();
    const [isHovered, setIsHovered] = useState(false);

    if (isButton) {
        return (
            <Grow in={isVisible} timeout={600 + index * 150}>
                <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIos sx={{ fontSize: { xs: 14, md: 16 } }} />}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    sx={{
                        mt: { xs: 2.5, md: 3 },
                        py: 1.5,
                        px: { xs: 3, md: 4 },
                        borderRadius: '3px',
                        textTransform: 'none',
                        fontSize: { xs: '15px', md: '16px' },
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                        background: theme.palette.secondary.main,
                        width: { xs: '100%', sm: 'auto' },
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                            transform: 'translateY(-4px) scale(1.02)',
                            boxShadow: `0 16px 48px ${alpha(theme.palette.primary.main, 0.4)}`,
                        },
                    }}
                >
                    {label}
                </Button>
            </Grow>
        );
    }

    return (
        <Grow in={isVisible} timeout={400 + index * 100}>
            <Card
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                sx={{
                    mb: { xs: 1.5, md: 2 },
                    background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.8)}, ${alpha(theme.palette.background.paper, 0.4)})`,
                    backdropFilter: 'blur(20px)',
                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    borderRadius: '3px',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background:
                            category === 'founder'
                                ? `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
                                : `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                        transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: 'transform 0.3s ease',
                    },
                    '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: `0 20px 60px ${alpha(theme.palette.primary.main, 0.15)}`,
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                    },
                }}
            >
                <CardContent
                    sx={{ p: { xs: 2.5, md: 3 }, '&:last-child': { pb: { xs: 2.5, md: 3 } } }}
                >
                    <Box display="flex" alignItems="center" gap={2}>
                        <Avatar
                            sx={{
                                bgcolor: alpha(
                                    category === 'founder'
                                        ? theme.palette.primary.main
                                        : theme.palette.secondary.main,
                                    0.1,
                                ),
                                color:
                                    category === 'founder'
                                        ? theme.palette.primary.main
                                        : theme.palette.secondary.main,
                                width: { xs: 40, md: 48 },
                                height: { xs: 40, md: 48 },
                                transition: 'all 0.3s ease',
                                transform: isHovered
                                    ? 'rotate(360deg) scale(1.1)'
                                    : 'rotate(0deg) scale(1)',
                            }}
                        >
                            {icon}
                        </Avatar>
                        <Box flex={1}>
                            <Typography
                                variant="body1"
                                fontWeight={600}
                                sx={{
                                    color: theme.palette.text.primary,
                                    mb: 0.5,
                                    transition: 'color 0.3s ease',
                                    fontSize: { xs: '0.95rem', md: '1rem' },
                                }}
                            >
                                {label}
                            </Typography>
                            {description && (
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ opacity: 0.8, fontSize: { xs: '0.85rem', md: '0.9rem' } }}
                                >
                                    {description}
                                </Typography>
                            )}
                        </Box>
                        <IconButton
                            size="small"
                            sx={{
                                color:
                                    category === 'founder'
                                        ? theme.palette.primary.main
                                        : theme.palette.secondary.main,
                                transform: isHovered ? 'translateX(4px)' : 'translateX(0px)',
                                transition: 'transform 0.3s ease',
                            }}
                        >
                            <KeyboardArrowRight />
                        </IconButton>
                    </Box>
                </CardContent>
            </Card>
        </Grow>
    );
};

const ProvenEngineSection: React.FC = () => {
    const theme = useTheme();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const founderArray: FeatureItem[] = [
        {
            label: 'One-on-one and customized mentorship',
            isButton: false,
            icon: <CampaignOutlined />,
            description: 'Personalized guidance from industry veterans',
        },
        {
            label: 'Investor access and global scaling',
            isButton: false,
            icon: <TrendingUpOutlined />,
            description: 'Connect with VCs and scale internationally',
        },
        {
            label: 'Community and networking',
            isButton: false,
            icon: <GroupsOutlined />,
            description: 'Join a thriving ecosystem of entrepreneurs',
        },
        {
            label: 'Explore Startup Programs',
            isButton: true,
        },
    ];

    const studentArray: FeatureItem[] = [
        {
            label: 'Learn industry relevant skills',
            isButton: false,
            icon: <AutoAwesomeOutlined />,
            description: 'Master cutting-edge technologies and methodologies',
        },
        {
            label: 'Network with industry pros',
            isButton: false,
            icon: <NetworkCheckOutlined />,
            description: 'Build meaningful connections with experts',
        },
        {
            label: 'Get certified and earn badges',
            isButton: false,
            icon: <EmojiEventsOutlined />,
            description: 'Validate your expertise with recognized credentials',
        },
        {
            label: 'Explore Upskilling Programs',
            isButton: true,
        },
    ];

    return (
        <Box
            component="section"
            ref={sectionRef}
            sx={{
                position: 'relative',
                py: { xs: 8, md: 12 },
                background: `linear-gradient(135deg, ${alpha(theme.palette.background.default, 0.9)}, ${alpha(theme.palette.background.paper, 0.9)})`,
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `radial-gradient(circle at 20% 80%, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${alpha(theme.palette.secondary.main, 0.05)} 0%, transparent 50%)`,
                    pointerEvents: 'none',
                },
            }}
        >
            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Header Section */}
                <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
                    <Fade in={isVisible} timeout={800}>
                        <Box>
                            {/* <Chip
                                label="Growth Engine"
                                icon={<RocketLaunchOutlined />}
                                sx={{
                                    mb: 3,
                                    py: 1,
                                    px: 2,
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.secondary.main, 0.1)})`,
                                    color: theme.palette.primary.main,
                                    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                                    '& .MuiChip-icon': {
                                        color: theme.palette.primary.main,
                                    },
                                }}
                            /> */}
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '1.75rem', md: '2.5rem', lg: '3rem' },
                                    fontWeight: 800,
                                    lineHeight: 1.2,
                                    mb: 2,
                                    // background: `linear-gradient(135deg, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
                                    // WebkitBackgroundClip: 'text',
                                    // WebkitTextFillColor: 'transparent',
                                    // backgroundClip: 'text',
                                }}
                            >
                                A proven{' '}
                                <Box
                                    component="span"
                                    sx={{
                                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        position: 'relative',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: -4,
                                            left: 0,
                                            right: 0,
                                            height: '4px',
                                            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                            borderRadius: '2px',
                                            opacity: 0.6,
                                        },
                                    }}
                                >
                                    engine
                                </Box>
                                <br />
                                for startup & professional growth.
                            </Typography>
                            <Typography
                                variant="h6"
                                color="text.secondary"
                                sx={{
                                    maxWidth: 600,
                                    mx: 'auto',
                                    fontSize: { xs: '0.95rem', md: '1rem' },
                                    lineHeight: 1.6,
                                    opacity: 0.8,
                                }}
                            >
                                Empowering entrepreneurs and professionals with world-class
                                mentorship, networking, and growth opportunities.
                            </Typography>
                        </Box>
                    </Fade>
                </Box>

                {/* Content Grid */}
                <Box
                    display="grid"
                    gridTemplateColumns={{ xs: '1fr', lg: '1fr 1fr' }}
                    gap={{ xs: 4, md: 6 }}
                    sx={{ mt: { xs: 6, md: 8 } }}
                >
                    {/* Founders Section */}
                    <Box>
                        <Fade in={isVisible} timeout={1000}>
                            <Box
                                display="flex"
                                alignItems="center"
                                gap={2}
                                mb={4}
                                sx={{
                                    p: { xs: 2.5, md: 3 },
                                    background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)}, ${alpha(theme.palette.secondary.main, 0.05)})`,
                                    borderRadius: '3px',
                                    border: `1px solid ${alpha(theme.palette.secondary.main, 0.1)}`,
                                }}
                            >
                                <Avatar
                                    sx={{
                                        bgcolor: theme.palette.primary.main,
                                        width: { xs: 48, md: 56 },
                                        height: { xs: 48, md: 56 },
                                    }}
                                >
                                    <RocketLaunchOutlined sx={{ fontSize: { xs: 24, md: 28 } }} />
                                </Avatar>
                                <Box>
                                    <Typography
                                        variant="h4"
                                        fontWeight={700}
                                        sx={{
                                            fontSize: { xs: '1.5rem', md: '1.75rem' },
                                            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                        }}
                                    >
                                        For Founders
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Scale your startup with confidence
                                    </Typography>
                                </Box>
                            </Box>
                        </Fade>

                        {founderArray.map((item, index) => (
                            <FeatureCard
                                key={`founder-${index}`}
                                {...item}
                                index={index}
                                category="founder"
                                isVisible={isVisible}
                            />
                        ))}
                    </Box>

                    {/* Students & Professionals Section */}
                    <Box>
                        <Fade in={isVisible} timeout={1200}>
                            <Box
                                display="flex"
                                alignItems="center"
                                gap={2}
                                mb={4}
                                sx={{
                                    p: { xs: 2.5, md: 3 },
                                    background: `linear-gradient(135deg, ${alpha(theme.palette.secondary.main, 0.05)}, ${alpha(theme.palette.primary.main, 0.05)})`,
                                    borderRadius: '3px',
                                    border: `1px solid ${alpha(theme.palette.secondary.main, 0.1)}`,
                                }}
                            >
                                <Avatar
                                    sx={{
                                        bgcolor: theme.palette.secondary.main,
                                        width: { xs: 48, md: 56 },
                                        height: { xs: 48, md: 56 },
                                    }}
                                >
                                    <SchoolOutlined sx={{ fontSize: { xs: 24, md: 28 } }} />
                                </Avatar>
                                <Box>
                                    <Typography
                                        variant="h4"
                                        fontWeight={700}
                                        sx={{
                                            fontSize: { xs: '1.5rem', md: '1.75rem' },
                                            background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                        }}
                                    >
                                        For Students & Professionals
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Accelerate your career growth
                                    </Typography>
                                </Box>
                            </Box>
                        </Fade>

                        {studentArray.map((item, index) => (
                            <FeatureCard
                                key={`student-${index}`}
                                {...item}
                                index={index}
                                category="student"
                                isVisible={isVisible}
                            />
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default ProvenEngineSection;
