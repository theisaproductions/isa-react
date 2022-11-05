import React from 'react';
import { useParams } from 'react-router-dom';
import { usePrismicDocumentByUID } from '@prismicio/react';
import MetaTags from 'react-meta-tags';

import BlogPageLoadingComponent from './components/blogPageLoadingComponent';
import BlogPageTopSection from './components/blogPageTopSection';
import BlogContentComponent from './components/blogContentComponent';


const BlogPage = () => {

    const documentID = useParams();
    const [doc, { state }] = usePrismicDocumentByUID('blog', documentID.id)

    return(
        <div className='min-h-screen'>
            <MetaTags>
                <title>{doc?.data?.article_meta_title[0]?.text}</title>
                <meta name="description" content={`${doc?.data?.article_meta_description[0]?.text}`}/>
                <meta property="og:title" content={`${doc?.data?.article_meta_title[0]?.text}`} />
            </MetaTags>
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