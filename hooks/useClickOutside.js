import { useEffect, useRef } from 'react';

const useClickOutside = ({ setDropdown }) => {
  const refClickOutside = useRef(null);
  const handleClickOutside = event => {
    if (
      refClickOutside.current &&
      !refClickOutside.current.contains(event.target)
    ) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, true);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  });
  return { refClickOutside };
};

export default useClickOutside;