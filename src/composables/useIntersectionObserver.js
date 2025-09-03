import { useIntersectionObserver } from "@vueuse/core";

export function useObserver(target, options = { threshold: 1 }) {
  const { isIntersecting, stop } = useIntersectionObserver(
    target,
    options
  );

  return { isIntersecting, stop };
}