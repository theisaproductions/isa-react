import { PrismicRichText } from '@prismicio/react';
import React from 'react';
import styles from './richTextSlice.module.css';

const RichTextSlice = ({slice}) => {
    return (
        <section className={`text-base md:text-lg ${styles.slice}`}>
            <PrismicRichText field={slice.primary.rich_text} />            
        </section>
    )
}

export default RichTextSlice;