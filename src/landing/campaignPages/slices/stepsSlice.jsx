import { HashLink } from "react-router-hash-link";

const StepsSlice = ({slice}) => {
    return (
        <div className="px-4 sm:px-10 md:px-14 lg:px-24 py-6 md:py-14 space-y-14">
            <h1 className="text-center text-4xl">{slice?.primary?.title[0]?.text}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    slice?.items?.map((item,index) => {
                        return (
                            <div key={index} className="border border-black/20 flex flex-col items-center gap-6 px-4 py-10">
                                <strong className="text-6xl">{(index + 1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}</strong>
                                <p className="text-center text-xl">{item?.sub_header}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="py-4 flex items-center justify-center">
                {
                    slice?.primary?.button_contact_us ?
                    <HashLink smooth to="./#contact-us" className="px-8 py-3 text-white bg-black font-light hover:bg-zinc-800">{slice?.primary?.button_label}</HashLink>
                    :
                    <a href={slice?.primary?.button_url?.url} className="hover:scale-125 duration-300 px-8 py-3 text-white bg-black font-light hover:bg-zinc-800">{slice?.primary?.button_label}</a>
                }
            </div>
        </div>
    )
}

export default StepsSlice;