import { useEffect } from 'react';

const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  handler: () => void,
  exceptRef?: React.RefObject<HTMLElement>[]
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        !(
          exceptRef &&
          exceptRef.some((except) =>
            except.current?.contains(event.target as Node)
          )
        )
      ) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler, exceptRef]);
};

export default useOutsideClick;
