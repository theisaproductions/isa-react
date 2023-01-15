import { StarIcon } from "../components/starIcon";

const UspSlice = ({slice}) => {
    return (
        <div className="px-4 sm:px-10 md:px-14 lg:px-24 py-14 md:py-20 space-y-14">
            <div className="flex items-center justify-center">
                <h2 className="text-6xl font-light text-center">{slice.primary.section_title[0].text}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 lg:gap-x-24 gap-y-10">
                {
                    slice.items.map((item,index) => {
                        return (
                            <div key={index} className="p-6 relative shadow-md shadow-blue-800 rounded-md bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black flex flex-col items-center gap-4">
                                <div className="absolute top-4 left-4">
                                    <StarIcon />
                                </div>
                                <img src={item.card_image.url} className="w-1/3" />
                                <h3 className="text-white text-center text-2xl font-light">{item.card_title[0].text}</h3>
                                <p className="text-white text-center font-light w-2/3">{item.card_description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UspSlice;