import {
    AccessTime,
    ArrowForward,
    CalendarMonth,
    ChevronLeft,
    ChevronRight,
    LocationOn,
} from '@mui/icons-material';
import { Box, Button, Chip, IconButton, Typography } from '@mui/material';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const NextUpSection = () => {
    const upcomingItems = [
        {
            type: 'program',
            title: 'Incubator Fall Cohort',
            startDate: 'Fall 2025',
            applyBy: 'September 1, 2025',
            duration: '18 months',
            format: 'Accessible virtually or in-person',
            description:
                'A long-term program designed to support startups through comprehensive incubation.',
        },
        {
            type: 'event',
            title: 'Pitch Competition | Black Innovation Summit',
            eventDate: 'Oct 30, 2025',
            applyBy: 'August 22, 2025',
            hostedAt: 'Scotiabank',
            description:
                'A competitive event for startups to pitch their ideas and gain visibility.',
        },
        {
            type: 'program',
            title: 'Centre For Housing Innovation Accelerator Program',
            startDate: 'November 2025',
            applyBy: 'September 30, 2025',
            duration: '6 months',
            format: 'Virtual or in-person',
            description:
                'An accelerator program focused on housing innovation, supporting startups in this sector.',
        },
    ];

    const formatDate = (dateString: string) => {
        const parts = dateString.split(' ');
        return {
            main: parts[0],
            sub: parts.slice(1).join(' '),
        };
    };

    return (
        <Box
            component="section"
            sx={{
                py: 12,
                backgroundColor: '#ffd100',
                position: 'relative',
            }}
        >
            <Box sx={{ maxWidth: '1400px', mx: 'auto', px: 3 }}>
                {/* Header */}
                <Box
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 8 }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box
                            sx={{
                                width: 48,
                                height: 48,
                                backgroundColor: 'rgba(0,0,0,0.08)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <CalendarMonth sx={{ color: 'rgba(0,0,0,0.7)', fontSize: 24 }} />
                        </Box>
                        <Typography
                            variant="h3"
                            component="h2"
                            sx={{
                                fontWeight: 700,
                                color: '#000',
                                fontSize: { xs: '2rem', md: '2.5rem' },
                            }}
                        >
                            Next Up
                        </Typography>
                    </Box>
                </Box>

                {/* Swiper Container */}
                <Box sx={{ position: 'relative' }}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={32}
                        pagination={{
                            clickable: true,
                            bulletClass: 'swiper-pagination-bullet custom-bullet',
                            bulletActiveClass:
                                'swiper-pagination-bullet-active custom-bullet-active',
                        }}
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        style={{
                            paddingBottom: '60px',
                            '--swiper-pagination-bottom': '0px',
                        }}
                    >
                        {upcomingItems.map((item, index) => {
                            const dateInfo = formatDate(
                                (item?.type === 'event'
                                    ? item.eventDate
                                    : item.startDate) as string,
                            );

                            return (
                                <SwiperSlide key={index}>
                                    <Box
                                        sx={{
                                            backgroundColor: 'white',
                                            borderRadius: 4,
                                            overflow: 'hidden',
                                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                                                transform: 'translateY(-2px)',
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'grid',
                                                gridTemplateColumns: { xs: '1fr', lg: '300px 1fr' },
                                                minHeight: 400,
                                            }}
                                        >
                                            {/* Date Section */}
                                            <Box
                                                sx={{
                                                    background:
                                                        'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    p: 4,
                                                }}
                                            >
                                                <Box sx={{ textAlign: 'center' }}>
                                                    <Typography
                                                        variant="caption"
                                                        sx={{
                                                            color: 'text.secondary',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: 1.2,
                                                            fontWeight: 600,
                                                            mb: 3,
                                                            display: 'block',
                                                        }}
                                                    >
                                                        {item.type === 'event'
                                                            ? 'Event Date'
                                                            : 'Start Date'}
                                                    </Typography>
                                                    <Box
                                                        sx={{
                                                            backgroundColor: 'white',
                                                            borderRadius: 3,
                                                            p: 3,
                                                            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                                                            border: '1px solid #f0f0f0',
                                                        }}
                                                    >
                                                        <Typography
                                                            variant="h2"
                                                            sx={{
                                                                fontWeight: 700,
                                                                color: '#000',
                                                                fontSize: {
                                                                    xs: '2.5rem',
                                                                    md: '3rem',
                                                                },
                                                                lineHeight: 1,
                                                                mb: dateInfo.sub ? 1 : 0,
                                                            }}
                                                        >
                                                            {dateInfo.main}
                                                        </Typography>
                                                        {dateInfo.sub && (
                                                            <Typography
                                                                variant="h6"
                                                                sx={{
                                                                    color: 'text.secondary',
                                                                    fontWeight: 500,
                                                                }}
                                                            >
                                                                {dateInfo.sub}
                                                            </Typography>
                                                        )}
                                                    </Box>
                                                </Box>
                                            </Box>

                                            {/* Content Section */}
                                            <Box
                                                sx={{
                                                    p: { xs: 4, md: 6 },
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Box sx={{ maxWidth: 600 }}>
                                                    <Chip
                                                        label={item.type.toUpperCase()}
                                                        sx={{
                                                            backgroundColor: '#000',
                                                            color: 'white',
                                                            fontWeight: 600,
                                                            letterSpacing: 0.5,
                                                            mb: 3,
                                                            '& .MuiChip-label': {
                                                                px: 2,
                                                                py: 0.5,
                                                            },
                                                        }}
                                                    />

                                                    <Typography
                                                        variant="h4"
                                                        component="h3"
                                                        sx={{
                                                            fontWeight: 700,
                                                            color: '#000',
                                                            mb: 4,
                                                            lineHeight: 1.2,
                                                            fontSize: {
                                                                xs: '1.75rem',
                                                                md: '2.25rem',
                                                            },
                                                        }}
                                                    >
                                                        {item.title}
                                                    </Typography>

                                                    {/* Details Grid */}
                                                    <Box
                                                        sx={{
                                                            display: 'grid',
                                                            gridTemplateColumns: {
                                                                xs: '1fr',
                                                                md: 'repeat(2, 1fr)',
                                                                xl: 'repeat(3, 1fr)',
                                                            },
                                                            gap: 3,
                                                            mb: 4,
                                                        }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: 2,
                                                            }}
                                                        >
                                                            <Box
                                                                sx={{
                                                                    width: 40,
                                                                    height: 40,
                                                                    backgroundColor: '#f8f9fa',
                                                                    borderRadius: 2,
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    flexShrink: 0,
                                                                }}
                                                            >
                                                                <AccessTime
                                                                    sx={{
                                                                        color: 'text.secondary',
                                                                        fontSize: 20,
                                                                    }}
                                                                />
                                                            </Box>
                                                            <Box>
                                                                <Typography
                                                                    variant="caption"
                                                                    sx={{
                                                                        color: 'text.secondary',
                                                                        fontWeight: 600,
                                                                    }}
                                                                >
                                                                    Apply by
                                                                </Typography>
                                                                <Typography
                                                                    variant="body2"
                                                                    sx={{
                                                                        fontWeight: 600,
                                                                        color: '#000',
                                                                    }}
                                                                >
                                                                    {item.applyBy}
                                                                </Typography>
                                                            </Box>
                                                        </Box>

                                                        {item.duration && (
                                                            <Box
                                                                sx={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: 2,
                                                                }}
                                                            >
                                                                <Box
                                                                    sx={{
                                                                        width: 40,
                                                                        height: 40,
                                                                        backgroundColor: '#f8f9fa',
                                                                        borderRadius: 2,
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center',
                                                                        flexShrink: 0,
                                                                    }}
                                                                >
                                                                    <CalendarMonth
                                                                        sx={{
                                                                            color: 'text.secondary',
                                                                            fontSize: 20,
                                                                        }}
                                                                    />
                                                                </Box>
                                                                <Box>
                                                                    <Typography
                                                                        variant="caption"
                                                                        sx={{
                                                                            color: 'text.secondary',
                                                                            fontWeight: 600,
                                                                        }}
                                                                    >
                                                                        Duration
                                                                    </Typography>
                                                                    <Typography
                                                                        variant="body2"
                                                                        sx={{
                                                                            fontWeight: 600,
                                                                            color: '#000',
                                                                        }}
                                                                    >
                                                                        {item.duration}
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                        )}

                                                        {item.hostedAt && (
                                                            <Box
                                                                sx={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: 2,
                                                                }}
                                                            >
                                                                <Box
                                                                    sx={{
                                                                        width: 40,
                                                                        height: 40,
                                                                        backgroundColor: '#f8f9fa',
                                                                        borderRadius: 2,
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center',
                                                                        flexShrink: 0,
                                                                    }}
                                                                >
                                                                    <LocationOn
                                                                        sx={{
                                                                            color: 'text.secondary',
                                                                            fontSize: 20,
                                                                        }}
                                                                    />
                                                                </Box>
                                                                <Box>
                                                                    <Typography
                                                                        variant="caption"
                                                                        sx={{
                                                                            color: 'text.secondary',
                                                                            fontWeight: 600,
                                                                        }}
                                                                    >
                                                                        Location
                                                                    </Typography>
                                                                    <Typography
                                                                        variant="body2"
                                                                        sx={{
                                                                            fontWeight: 600,
                                                                            color: '#000',
                                                                        }}
                                                                    >
                                                                        {item.hostedAt}
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                        )}

                                                        {item.format && (
                                                            <Box
                                                                sx={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: 2,
                                                                    gridColumn: {
                                                                        md: '1 / -1',
                                                                        xl: 'auto',
                                                                    },
                                                                }}
                                                            >
                                                                <Box
                                                                    sx={{
                                                                        width: 40,
                                                                        height: 40,
                                                                        backgroundColor: '#f8f9fa',
                                                                        borderRadius: 2,
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center',
                                                                        flexShrink: 0,
                                                                    }}
                                                                >
                                                                    <Box
                                                                        sx={{
                                                                            width: 8,
                                                                            height: 8,
                                                                            backgroundColor:
                                                                                '#4caf50',
                                                                            borderRadius: '50%',
                                                                        }}
                                                                    />
                                                                </Box>
                                                                <Box>
                                                                    <Typography
                                                                        variant="caption"
                                                                        sx={{
                                                                            color: 'text.secondary',
                                                                            fontWeight: 600,
                                                                        }}
                                                                    >
                                                                        Format
                                                                    </Typography>
                                                                    <Typography
                                                                        variant="body2"
                                                                        sx={{
                                                                            fontWeight: 600,
                                                                            color: '#000',
                                                                        }}
                                                                    >
                                                                        {item.format}
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                        )}
                                                    </Box>

                                                    <Typography
                                                        variant="body1"
                                                        sx={{
                                                            color: 'text.secondary',
                                                            lineHeight: 1.6,
                                                            mb: 4,
                                                            fontSize: '1.1rem',
                                                        }}
                                                    >
                                                        {item.description}
                                                    </Typography>

                                                    <Button
                                                        variant="contained"
                                                        endIcon={<ArrowForward />}
                                                        sx={{
                                                            backgroundColor: '#000',
                                                            color: 'white',
                                                            borderRadius: 3,
                                                            px: 4,
                                                            py: 1.5,
                                                            fontWeight: 600,
                                                            textTransform: 'none',
                                                            fontSize: '1rem',
                                                            transition: 'all 0.3s ease',
                                                            '&:hover': {
                                                                backgroundColor: '#333',
                                                                transform: 'scale(1.02)',
                                                            },
                                                        }}
                                                    >
                                                        See Details
                                                    </Button>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    {/* Custom Navigation */}
                    <IconButton
                        className="custom-prev"
                        sx={{
                            position: 'absolute',
                            left: -24,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            backgroundColor: 'white',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            border: '1px solid #e0e0e0',
                            width: 48,
                            height: 48,
                            '&:hover': {
                                backgroundColor: '#f8f9fa',
                            },
                        }}
                    >
                        <ChevronLeft sx={{ fontSize: 24, color: '#333' }} />
                    </IconButton>

                    <IconButton
                        className="custom-next"
                        sx={{
                            position: 'absolute',
                            right: -24,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            backgroundColor: 'white',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            border: '1px solid #e0e0e0',
                            width: 48,
                            height: 48,
                            '&:hover': {
                                backgroundColor: '#f8f9fa',
                            },
                        }}
                    >
                        <ChevronRight sx={{ fontSize: 24, color: '#333' }} />
                    </IconButton>
                </Box>
            </Box>

            {/* Custom Styles */}
            <style>{`
                .custom-bullet {
                    background-color: rgba(0, 0, 0, 0.2) !important;
                    width: 12px !important;
                    height: 12px !important;
                    margin: 0 4px !important;
                    transition: all 0.3s ease !important;
                }
                .custom-bullet-active {
                    background-color: #000 !important;
                    transform: scale(1.2) !important;
                }
            `}</style>
        </Box>
    );
};

export default NextUpSection;
