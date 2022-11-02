import React from 'react';
import { Link } from 'react-router-dom';
import { useAllPrismicDocumentsByType } from '@prismicio/react'
import BlogThumb from './blogThumb';

const BlogSuggestionWidget = () => {

    const [doc, { state }] = useAllPrismicDocumentsByType('blog');

    if(state === 'loaded') return (
        <div className='pb-14'>
            <div className='max-w-6xl mx-auto space-y-8'>
                <h2 className='text-2xl text-pink-600 font-semibold underline'>Here's some blogs that you might like.</h2>
                <div className=''>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-x-6 md:gap-y-14'>

                        {
                            doc.slice(0,6).map((item, index) => {
                                return <BlogThumb key={index} data={item} />
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    ) 
    else {
        return <div></div>
    }
}

export default BlogSuggestionWidget;