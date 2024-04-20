import { ArrowRight, User } from 'iconsax-react'
import React, { useEffect } from 'react'
import WriteAReview from '../write-a-review/WriteAReview';
import sanityClient, { generateHTML, urlFor } from '../../sanity/sanityClient';


const Testimonial = () => {
    const [ratings, setRatings] = React.useState(null);

    function fetchRatings() {
       
        const q = `*[_type == "reviews"]`
        sanityClient.fetch(q).then((data) => {
            if (data) {
                setRatings(data)
            }
        }).catch((err) => {
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
                    <WriteAReview refetch={fetchRatings} />
                </div>
                {
                    Array.isArray(ratings) &&
                    <>
                        <div className="mt-8 flex justify-center gap-4 items-center flex-wrap">
                            {
                                ratings.slice(0, 3).map((rating, i) => {
                                    // const __html = generateHTML(rating.message)
                                    const src = urlFor(rating.image).url()

                                    return (
                                        <blockquote key={i} className="bg-white p-4 shadow-sm sm:p-6 rounded-lg flex-1 basis-[375px] max-w-sm space-y-4">
                                            <div className='flex gap-4 items-start'>
                                                {
                                                    src ?
                                                        <img className='w-16 h-16 aspect-square overflow-hidden rounded-full object-cover flex-shrink-0'
                                                            alt=""
                                                            src={src}
                                                        />
                                                        :
                                                        <div className='bg-gray-50 rounded-full w-16 h-16 flex-shrink-0 p-3'><User className='w-full h-full' /></div>
                                                }
                                                <div className='space-y-1'>
                                                    <h4 className="text-xl font-bold">{rating.name}</h4>
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
                                            </div>
                                            {/* <div className="leading-relaxed text-gray-700" dangerouslySetInnerHTML={{ __html }}></div> */}
                                            <p className="leading-relaxed text-gray-700" >
                                                {rating.message}
                                            </p>
                                        </blockquote>
                                    )
                                })
                            }
                        </div>
                        {
                            ratings.length > 3 &&
                            <div className='mt-8 flex justify-center'>
                                <a
                                    href="/"
                                    className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-900/25 font-medium rounded-lg text-sm px-4 py-2 lg:px-4 lg:py-2.5 focus:outline-none capitalize flex items-center gap-2 order-3"
                                >
                                    <span className="font-medium whitespace-nowrap">Read all reviews</span>
                                    <ArrowRight className='w-5 h-5' />
                                </a>
                            </div>
                        }
                    </>
                }
            </div>
        </div>
    )
}

export default Testimonial
