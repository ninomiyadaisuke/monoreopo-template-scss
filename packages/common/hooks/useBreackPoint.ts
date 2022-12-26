import useBreakpoint from 'use-breakpoint';

const BREAKPOINTS = { tablet: 0, desktop: 800 };

export const useBreakPoint = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, 'tablet');
  const tablet = breakpoint === 'tablet';
  const desktop = breakpoint === 'desktop';
  return { tablet, desktop };
};
