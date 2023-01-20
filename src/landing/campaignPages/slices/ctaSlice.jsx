import { PrismicRichText } from '@prismicio/react';

const CtaSlice = ({slice}) => {
    return(
        <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2 px-4 sm:px-10 md:px-14 lg:px-24 py-14 md:py-20 space-y-6">
                <h2 className="text-6xl font-light">{slice?.primary?.title[0]?.text}</h2>
                <PrismicRichText field={slice?.primary?.paragraph} />
                <div className="pt-4">
                    <a href={slice?.primary?.button_link?.url} className="px-8 py-3 text-white bg-black font-light hover:bg-zinc-800">{slice?.primary?.button_label}</a>
                </div>
            </div>
            <div className="w-full h-72 md:h-auto md:w-1/2 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url("${slice?.primary?.image?.url}")`}}></div>
        </div>
    )
}

export default CtaSlice;