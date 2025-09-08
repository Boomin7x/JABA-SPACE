import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import useNavMenus from '../../hooks/useNavMenus';
import { Button, Drawer, IconButton, List, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import theme from '../../theme';
import { cn } from '../../lib/utils';

export default function PrimarySearchAppBar() {
    const { navItems } = useNavMenus();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleToggle = () => setMobileOpen((prev) => !prev);

    const drawer = (
        <Box
            sx={{ width: 280, p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}
            role="presentation"
            onClick={handleToggle}
            onKeyDown={handleToggle}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                <Box
                    component={'img'}
                    alt=""
                    src="/vite.svg"
                    sx={{ height: '1.75rem', width: 'auto' }}
                />
                <Box sx={{ fontWeight: 700, fontSize: '1rem' }}>Menu</Box>
            </Box>
            <List sx={{ p: 0 }}>
                {navItems
                    ?.filter((i) => !i.gap)
                    .map((items, idx) => (
                        <ListItemButton key={idx} sx={{ borderRadius: 1 }}>
                            <ListItemText primary={items.title} />
                        </ListItemButton>
                    ))}
            </List>
            <Button
                fullWidth
                sx={{
                    mt: 1,
                    background: (theme) => theme.palette.primary.main,
                    color: (theme) => theme.palette.getContrastText(theme.palette.primary.main),
                    borderRadius: 9999,
                    textTransform: 'none',
                    fontWeight: 600,
                }}
            >
                Apply
            </Button>
        </Box>
    );

    return (
        <AppBar
            position="sticky"
            sx={{
                top: 0,
                zIndex: (t) => t.zIndex.appBar,
                background: (theme) => theme.palette.secondary.main,
                py: { xs: 1, sm: 1.5, md: 2 },
                boxShadow: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 2, md: 4 },
                    overflow: 'hidden',
                    minWidth: 0,
                }}
                className="container mx-auto px-4"
            >
                <IconButton
                    aria-label="Open menu"
                    onClick={handleToggle}
                    sx={{
                        display: { xs: 'inline-flex', md: 'none' },
                        color: (t) => t.palette.secondary.contrastText,
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Box
                    component={'img'}
                    alt=""
                    src="/vite.svg"
                    sx={{
                        width: 'auto',
                        height: { xs: '1.5rem', md: '2rem' },
                        flexShrink: 0,
                    }}
                />
                <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' } }} />
                <Box
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        alignItems: 'center',
                        gap: 4,
                        minWidth: 0,
                        flexWrap: 'nowrap',
                    }}
                >
                    {navItems?.map((items, i) => {
                        if (items?.gap) {
                            return <Box key={`gap-${i}`} sx={{ flex: 1, minWidth: 0 }} />;
                        }
                        return (
                            <Box
                                key={i}
                                sx={{
                                    color: (theme) => theme.palette.secondary.contrastText,
                                    ':before': {
                                        bgcolor: theme.palette.primary.main,
                                    },
                                    whiteSpace: 'nowrap',
                                }}
                                className={cn(
                                    'py-3 relative overflow-hidden ',
                                    'before:absolute before:h-[1px] before:w-full  before:bottom-0 before:left-0 before:transform before:-translate-x-full hover:before:translate-x-0 before:duration-300 before:transition-all before:ease-in-out',
                                )}
                            >
                                {items.title}
                            </Box>
                        );
                    })}
                </Box>
                <Button
                    className="!rounded-full !px-5"
                    sx={{
                        display: { xs: 'none', md: 'inline-flex' },
                        background: (theme) => theme.palette.primary.main,
                        color: (theme) => theme.palette.getContrastText(theme.palette.primary.main),
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                    }}
                >
                    Apply
                </Button>
            </Box>
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleToggle}
                ModalProps={{ keepMounted: true }}
                PaperProps={{ sx: { maxWidth: '90vw' } }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
}
