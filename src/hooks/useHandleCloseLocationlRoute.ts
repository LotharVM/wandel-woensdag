import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';

import { appRoutingAtom } from '@/store/grid';

export const useHandleCloseLocationlRoute = () => {
  const router = useRouter();
  // const isPageTransitioning = useRef(false);
  const routingAtom = useAtomValue(appRoutingAtom);

  const handleGoBack = () => {
    // if (isPageTransitioning.current) return;
    // isPageTransitioning.current = true;

    if (routingAtom.previousRoute) router.back();
    else router.push('/');
  };

  return { handleGoBack };
};
