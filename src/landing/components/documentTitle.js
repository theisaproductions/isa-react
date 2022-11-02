import { useRef, useEffect } from 'react'

function useDocumentTitle(title, prevailOnUnmount = false) {
  
  const defaultTitle = 'Indian School of Acting';

  useEffect(() => {
    if(title) {
        document.title = title;
    }
  }, [title]);

  useEffect(() => () => {
    if (!prevailOnUnmount) {
      document.title = defaultTitle;
    }
  }, [])
}

export default useDocumentTitle;