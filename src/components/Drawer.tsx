'use client';

import { useHandleCloseLocationlRoute } from '@/hooks/useHandleCloseLocationlRoute';
import { ReactNode, useEffect, useState } from 'react';
import { Drawer as VaulDrawer } from 'vaul';

export const Drawer = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { handleGoBack } = useHandleCloseLocationlRoute();

  const handleClose = () => {
    setTimeout(() => {
      handleGoBack();
    }, 1000);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  }, []);

  return (
    <VaulDrawer.Root
      shouldScaleBackground
      open={isOpen}
      onOpenChange={e => setIsOpen(e)}
      onClose={handleClose}
    >
      <VaulDrawer.Portal>
        <VaulDrawer.Overlay className="fixed inset-0 bg-black/40 outline-none" />
        <VaulDrawer.Content className="fixed bottom-0 left-0 right-0 mt-24 flex h-[96%] flex-col rounded-t-[10px] bg-black outline-none">
          <div className="flex flex-1 flex-col overflow-auto rounded-t-[10px] bg-black p-4">
            <div className="mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-slate-800" />
            {children}
          </div>
        </VaulDrawer.Content>
      </VaulDrawer.Portal>
    </VaulDrawer.Root>
  );
};
