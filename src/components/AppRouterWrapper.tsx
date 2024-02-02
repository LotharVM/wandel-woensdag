'use client';

import { PropsWithChildren } from 'react';

import { useRouteChangeEvent } from '@/hooks/useRouteChangeEvent';

export const AppRouterWrapper = ({ children }: PropsWithChildren) => {
  useRouteChangeEvent();
  return children;
};
