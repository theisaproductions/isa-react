const TestimonialsSlice = ({slice}) => {

    return (
        <div className="px-4 sm:px-10 md:px-14 lg:px-24 py-6 md:py-14 space-y-14">
            <div className="space-y-6">
                <h1 className="text-center text-4xl">{slice.primary.title}</h1>
                <p className="text-center text-xl">{slice.primary.sub_heading}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    slice.items.map((item,index) => {
                        return (
                            <div key={index} className="border-t-8 border-amber-400 p-6 space-y-2 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black text-white">
                                <p>{item.testimonial}</p>
                                <p className="font-bold text-lg">- {item.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TestimonialsSlice;