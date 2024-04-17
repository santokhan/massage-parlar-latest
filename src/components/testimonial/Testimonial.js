import { ArrowRight, Star1 } from 'iconsax-react'
import React, { useEffect } from 'react'
import axios from 'axios'


const Testimonial = () => {
    const [ratings, setRatings] = React.useState(null);

    function fetchRatings() {
        axios
            .get('/api/ratings.json')
            .then((res) => {
                const data = res.data
                if (data) {
                    setRatings(data)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchRatings()
    }, [])

    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
                <div className="md:flex md:items-end md:justify-between gap-12">
                    <div className="flex-1">
                        <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-gray-900">
                            Read trusted reviews from our customers
                        </h2>
                    </div>
                    <div>
                        <button
                            type='button'
                            onClick={() => { }}
                            className="mt-6 inline-flex flex-shrink-0 items-center gap-2 rounded-full border border-rose-600 px-5 py-3 bg-rose-600 text-white transition-colors duration-150"
                        >
                            <span className="font-medium whitespace-nowrap">Write a review</span>
                            <ArrowRight className='w-5 h-5' />
                        </button>
                    </div>
                </div>

                <div className="mt-8 flex justify-center gap-4 items-center flex-wrap">
                    {
                        Array.isArray(ratings) && ratings.map((rating, i) => (
                            <blockquote key={i} className="bg-white p-6 shadow-sm sm:p-8 rounded-lg space-y-4 flex-1 basis-[375px] max-w-sm">
                                <figure className='w-32 h-32 overflow-hidden mx-auto'>
                                    <img className='rounded-full object-cover'
                                        alt=""
                                        src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                    />
                                </figure>
                                <div className="flex justify-center">
                                    <div className="flex gap-1 items-center text-yellow-500">
                                        {
                                            Array(5).fill(null).map((_, i) => (
                                                <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 flex-shrink-0">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                                </svg>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h4 className="text-2xl font-bold sm:text-3xl">{rating.name}</h4>
                                    <p className="mt-4 leading-relaxed text-gray-700">
                                        {rating.review}
                                    </p>
                                </div>
                            </blockquote>
                        ))
                    }
                </div>
                <div className='mt-8 flex justify-center'>
                    <a
                        href="/"
                        className="mt-6 inline-flex flex-shrink-0 items-center gap-2 rounded-full border border-rose-600 px-5 py-3 text-rose-600 hover:bg-rose-600 hover:text-white transition-colors duration-150"
                    >
                        <span className="font-medium whitespace-nowrap">Read all reviews</span>
                        <ArrowRight className='w-5 h-5' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
