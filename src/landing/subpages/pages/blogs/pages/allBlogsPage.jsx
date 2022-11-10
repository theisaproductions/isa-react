import React, { useEffect, useState } from 'react';
import { useAllPrismicDocumentsByType } from '@prismicio/react'
import {Helmet} from "react-helmet";
import BlogSubNavbar from './components/subNavbar';
import BlogPageTopSection from './components/blogPageTopSection';
import PrimaryBlogThumb from './components/primaryBlogThumb';
import BlogThumb from './components/blogThumb';
import BlogPageLoadingComponent from './components/blogPageLoadingComponent';

const AllBlogsPage = () => {

    const contentType = 'blog';

    let [primaryBlogItems, setPrimaryBlofItems] = useState([]);
    let [secondaryBlogItems, setSecondaryBlogItems] = useState([]);
    let [restBlogItems, setRestBlogItems] = useState([]);

    const [documents, { state }] = useAllPrismicDocumentsByType(contentType);

    useEffect(() => {
        if(!documents) return;
        let primary = [];
        let secondary = [];
        let rest = [];
        documents.map((item, index) => {
            if(index < 1) {
                primary.push(item);
            } else if (index >= 1 && index <= 2) {
                secondary.push(item);
            } else {
                rest.push(item);
            }
        })
        setPrimaryBlofItems(primary);
        setSecondaryBlogItems(secondary);
        setRestBlogItems(rest);

    }, [documents])

    return(
        <div>
            <Helmet>
                <title>ISA Blogs</title>
                <meta name="description" content="The Indian School of Acting | Blogs"/>
            </Helmet>
            <BlogPageTopSection />
            <div className='px-5vw'>
                <div className='pb-14 max-w-6xl mx-auto'>
                    {state === 'loading' ?
                        <BlogPageLoadingComponent />
                    : 
                        documents &&
                        <div className='space-y-14'>
                            {/* sub-navbar */}
                            <BlogSubNavbar />

                            <h1 className='text-6xl font-black mt-6'>Blogs</h1>

                            {/* primary blogs */}
                            {
                                primaryBlogItems.map((item,index) => {
                                    return <PrimaryBlogThumb key={index} data={item} />
                                })
                            }

                            {/* secondary blogs */}
                            {secondaryBlogItems.length > 0 && 
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-6'>
                                    {
                                        secondaryBlogItems.map((item,index) => {
                                            return <BlogThumb key={index} data={item}/>
                                        })
                                    }
                                </div>
                            }

                            {/* rest blogs */}
                            {restBlogItems.length > 0 && 
                                <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-6'>
                                    {
                                        restBlogItems.map((item,index) => {
                                            return <BlogThumb key={index} data={item}/>
                                        })
                                    }
                                </div>
                            }

                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default AllBlogsPage;