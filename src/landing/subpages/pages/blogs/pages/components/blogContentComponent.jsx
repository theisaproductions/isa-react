import React from 'react';
import { Link } from 'react-router-dom';
import { SliceZone } from '@prismicio/react'

import BlogSuggestionWidget from './blogSuggestion';
import SimilarBlogWidget from './similarBlog';
import BlogSubNavbar from './subNavbar';
import RichTextSlice from '../slices/richTextSlice';
import SingleImageSlice from '../slices/singleImageSlice';
import ExploreCoursesComponent from './exploreCoursesComponent';
import BlogSideBar from './blogSidebar';

const BlogContentComponent = ({data}) => {

    const BlogNotFoundComponent = () => {
        return (
            <div className='space-y-10 py-10'>
                <div className='space-y-2'>
                    <h2 className='text-4xl font-bold'>OOPS!</h2>
                    <p className='text-lg'>The page you are looking for is not found.</p>
                    <p className='text-lg'>
                        <span>Go back to </span>
                        <Link to={'/blogs'} className="font-semibold hover:text-blue-600">Blogs page</Link>
                        <span> or </span>
                        <Link to={'/'} className="font-semibold hover:text-blue-600">Home page</Link>
                    </p>
                </div>
                <BlogSuggestionWidget />
            </div>
        )
    }

    return (
        data ?
        <div>
            <BlogSubNavbar showNav={true}/>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-10'>
                <div className='lg:col-span-3 space-y-14'>
                    {/* blog */}
                    <article className='space-y-4 py-10'>                

                        {/* date */}
                        <p className='text-gray-600 text-sm md:text-base pb-2'>{new Date(data.last_publication_date).toDateString()}</p>
                        
                        {/* blog title */}
                        <h1 className='text-3xl md:text-4xl font-semibold pb-10 pt-4'>{data.data.article_blog_title[0].text}</h1>
                        
                        {/* blog content (slice zone) */}
                        <div className='space-y-10'>
                            <SliceZone
                                slices={data.data.body}
                                components={{
                                    rich_text_only: RichTextSlice,
                                    single_image: SingleImageSlice
                                }}
                            />
                        </div>
                    </article>

                    <div className='space-y-6 pb-14'>
                        <h2 className='text-2xl font-bold'>Need Assistance?</h2>
                        <div>
                            <a href="/?page=19" className='text-sm md:text-lg p-4 border-2 border-black/40 rounded-md hover:bg-pink-100 hover:border-pink-600 hover:text-pink-600 duration-300'>Contact our support team.</a>
                        </div>
                    </div>
                </div>
                <BlogSideBar />
            </div>
            { data.data.article_similar_blog?.uid && <SimilarBlogWidget id={data.data.article_similar_blog.uid}/> }
            <ExploreCoursesComponent />
        </div>
        :
        <BlogNotFoundComponent />
        
    )
}

export default BlogContentComponent;