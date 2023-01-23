import { PrismicRichText } from '@prismicio/react';
import RichText from '../components/richText';

const OutlineSlice = ({slice}) => {
    return (
        <div className="py-6 md:py-14 space-y-8 md:space-y-20">
            <h2 className="w-3/4 mx-auto text-6xl font-light text-center">{slice?.primary?.section_title[0]?.text}</h2>

            {
                slice?.items?.map((item,index) => {
                    return (
                        <div key={index} className={`px-4 sm:px-10 md:px-14 lg:px-24 flex flex-col-reverse ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                            <div className="w-full md:w-1/2 space-y-4 pb-10">
                                <h3 className="text-3xl">{item?.heading}</h3>
                                <RichText>
                                    <PrismicRichText field={item?.description} />
                                </RichText>
                                <div className="py-4">
                                    <a href={item?.button_link?.url} className="px-8 py-3 text-white bg-black font-light hover:bg-zinc-800">{item?.button_label}</a>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 h-40 md:h-auto bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url("${item?.image?.url}")`}}></div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default OutlineSlice;