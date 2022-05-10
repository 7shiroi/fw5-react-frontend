import { useEffect } from 'react';

const useScript = (url, attribute = {}) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    
    for (const key in attribute) {
      script.setAttribute(key, attribute[key]);
    }
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export default useScript;