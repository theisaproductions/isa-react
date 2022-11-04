import React from 'react';
import { useParams } from 'react-router-dom';
import { usePrismicDocumentByUID } from '@prismicio/react';
import useDocumentTitle from '../../../../components/documentTitle';

import BlogPageLoadingComponent from './components/blogPageLoadingComponent';
import BlogPageTopSection from './components/blogPageTopSection';
import BlogContentComponent from './components/blogContentComponent';

const BlogPage = () => {

    const documentID = useParams();
    const [doc, { state }] = usePrismicDocumentByUID('blog', documentID.id)

    // set page title for seo
    useDocumentTitle(doc?.data?.article_meta_title[0]?.text);

    return(
        <div className='min-h-screen'>
            <BlogPageTopSection />
            <div className='px-5vw'>
                <div className='max-w-6xl mx-auto'>
                    {state === 'loading' ?
                        <BlogPageLoadingComponent />
                    :
                        <BlogContentComponent data={doc} />
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogPage;