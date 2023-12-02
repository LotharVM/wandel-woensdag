import { motion } from 'framer-motion';
import React from 'react';

const Component = React.forwardRef((props, ref) => <div ref={ref} />);

export const MotionDiv = motion(Component);
