import { useEffect } from 'react';

import { useAtom } from 'jotai';
import { usePathname } from 'next/navigation';

import { appRoutingAtom } from '@/store/grid';

export const useRouteChangeEvent = () => {
  const pathname = usePathname();
  const [routingAtom, setRoutingAtom] = useAtom(appRoutingAtom);

  useEffect(() => {
    const updatedRouteState = {
      currentRoute: pathname,
      previousRoute: routingAtom.currentRoute,
    };
    setRoutingAtom(updatedRouteState);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
};
