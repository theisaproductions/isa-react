import React from 'react';
import { PrismicImage } from '@prismicio/react'

const SingleImageSlice = ({slice}) => {
    return(
        <section>
            <PrismicImage field={slice.primary.single_image} />
        </section>
    )
}

export default SingleImageSlice;