import { Box, Button, Typography } from '@mui/material';

const HeroSection = () => {
    return (
        <Box
            component="section"
            sx={{
                background: (theme) => theme.palette.secondary.main,
                color: (theme) => theme.palette.getContrastText(theme.palette.secondary.main),
            }}
            className="min-h-[80vh] md:h-[90vh] w-full flex flex-col"
        >
            <Box className="container px-4 sm:px-6 md:px-8 flex-1 mx-auto grid gap-8 md:gap-10 grid-cols-1 md:grid-cols-2">
                <Box className="size-full flex flex-col justify-center gap-6 md:gap-8">
                    <Typography
                        variant="h1"
                        className="tracking-wide"
                        sx={{
                            fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.5rem', lg: '4rem' },
                            lineHeight: 1.1,
                            letterSpacing: '-0.01em',
                            fontWeight: 800,
                        }}
                    >
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
                    <Typography
                        className="tracking-wide"
                        sx={{
                            fontSize: { xs: '1rem', sm: '1.05rem', md: '1.125rem' },
                            opacity: 0.95,
                            maxWidth: { xs: '60ch', md: '65ch' },
                        }}
                    >
                        From first prototype to global traction, we help tech founders grow with
                        mentorship, investment and world-class startup support — so you can scale
                        with clarity and confidence.
                    </Typography>
                    <Box className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
                        <Button
                            sx={{
                                p: '0.9rem 1.5rem',
                                fontSize: { xs: '1rem', md: '1.1rem' },

                                bgcolor: (theme) => theme.palette.primary.main,
                                color: (theme) => theme.palette.primary.contrastText,
                                borderRadius: '3px',
                                width: { xs: '100%', sm: 'auto' },
                            }}
                        >
                            Scale your startup
                        </Button>
                        <Button
                            sx={{
                                p: '0.9rem 1.5rem',
                                fontSize: { xs: '1rem', md: '1.1rem' },
                                letterSpacing: '0.025em',
                                border: '2px solid',
                                borderColor: (theme) => theme.palette.primary.main,
                                color: (theme) => theme.palette.primary.main,
                                borderRadius: '3px',
                                width: { xs: '100%', sm: 'auto' },
                            }}
                        >
                            Learn Startup skills
                        </Button>
                    </Box>
                </Box>
                <Box className="size-full flex flex-col justify-center gap-6 md:gap-8 relative overflow-hidden">
                    <Box
                        className="w-full relative overflow-hidden rounded-2xl"
                        sx={{ aspectRatio: { xs: '16 / 9', md: 'auto' }, height: { md: '75%' } }}
                    >
                        <video
                            src="/vidoe.mp4"
                            className="absolute inset-0 size-full object-cover"
                            loop
                            autoPlay
                            muted
                            playsInline
                            poster="/img_640d59ba30ddb4feaa277b3ae747c891_2.avif"
                        ></video>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default HeroSection;
