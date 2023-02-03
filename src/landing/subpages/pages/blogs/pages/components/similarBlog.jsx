import React from 'react';
import { usePrismicDocumentByUID } from '@prismicio/react'
import PrimaryBlogThumb from './primaryBlogThumb';

const SimilarBlogWidget = ({id}) => {

    const [doc, { state }] = usePrismicDocumentByUID('blog', id ? id : null)

    if(state === 'loaded') return (
        <div className='pb-6'>
            <div className='max-w-6xl mx-auto space-y-4'>   
                <h2 className='text-4xl font-bold text-pink-600 py-2'>Next article</h2>
                <div className=''>
                    <div className='grid grid-cols-1 gap-14 md:gap-6'>
                        <PrimaryBlogThumb data={doc} />
                    </div>
                </div>
            </div>
        </div>
    ) 
    else {
        return <div className='h-44 w-full bg-gray-200 animate-pulse'></div>
    }
}

export default SimilarBlogWidget;