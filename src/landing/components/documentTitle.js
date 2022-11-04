import { useRef, useEffect } from 'react'

function useDocumentTitle(title, desc, prevailOnUnmount = false) {
  
  const defaultTitle = 'Best Acting School In India | The Indian School of Acting';

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