import { Box, Button } from '@mui/material';
import type { FC } from 'react';

interface IListGrid {
    label: string;
    isButton: boolean;
}
const ListGrid: FC<IListGrid> = (items) => {
    if (items?.isButton) {
        return (
            <Box className="flex flex-col items-center p-6">
                <Button
                    sx={{
                        background: (theme) => theme.palette.secondary.main,
                        color: (theme) => theme.palette.secondary.contrastText,
                    }}
                    className="w-fit !px-6 !text-base !py-3 "
                >
                    {items?.label}
                </Button>
            </Box>
        );
    }
    return <Box className="border-b py-4">{items?.label}</Box>;
};

export default ListGrid;
