import type { SvgIconTypeMap } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';

export type IconType = OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
};
