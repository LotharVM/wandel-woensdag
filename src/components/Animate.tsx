'use client';

import { PropsWithChildren, useContext, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export function useLayoutRouterContext() {
  return useContext(LayoutRouterContext);
}

function FrozenRouter(props: PropsWithChildren<{}>) {
  const context = useLayoutRouterContext();
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>{props.children}</LayoutRouterContext.Provider>
  );
}

export function Animate({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="popLayout">
      <motion.div key={pathname} className="sticky top-0 min-h-[100dvh]">
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
}
