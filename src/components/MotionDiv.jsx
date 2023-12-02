import { motion } from 'framer-motion';
import React from 'react';

// eslint-disable-next-line react/display-name
const Component = React.forwardRef((props, ref) => <div ref={ref} />);

export const MotionDiv = motion(Component);
