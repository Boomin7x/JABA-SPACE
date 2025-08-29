import { useMemo } from 'react';
import { navpath } from '../utils/navigationPaths';

interface INavItems {
   title: string;
   path: string;
   isActive: boolean;
   gap?: boolean;
}
interface IMainNavItems extends Partial<INavItems> {
   children?: INavItems[];
}

const useNavMenus = () => {
   const navItems: IMainNavItems[] = useMemo(
      () => [
         {
            title: 'Founders',
            path: navpath.founder,
            isActive: false,
            children: [],
         },
         {
            title: 'Professionals & Students',
            path: navpath['professional&students'],
            isActive: false,
            children: [],
         },
         {
            title: 'Enterprise',
            path: navpath.enterprise,
            isActive: false,
            children: [],
         },
         {
            gap: true,
         },
         {
            title: 'About',
            path: navpath.about,
            isActive: false,
            children: [],
         },
         {
            title: 'CoWork',
            path: navpath.cowork,
            isActive: false,
            children: [],
         },
         {
            title: 'Login',
            path: navpath.login,
            isActive: false,
            children: [],
         },
      ],
      [],
   );

   return { navItems };
};

export default useNavMenus;
