import { Dialog, Transition } from '@headlessui/react';
import { ArrowRight, CloseCircle, User } from 'iconsax-react';
import { Fragment, useState } from 'react';
import sanityClient from '../../sanity/sanityClient';

export default function WriteAReview({ refetch }) {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        message: '',
        image: null,
        imagePreview: null,
    });

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    function handleImageChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setFormData((prevData) => ({
                ...prevData,
                image: file,
                imagePreview: reader.result,
            }));
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        sanityClient.create({
            _type: 'reviews',
            image: formData.get('image'),
            name: formData.get('name'),
            message: formData.get('message'),
        }).then(() => {
            alert('Review submitted!');

            // clear input
            setFormData({
                name: '',
                message: '',
                image: null,
                imagePreview: null,
            })
            // refetch Ratings
            refetch()
        });

        closeModal();
    }

    return (
        <>
            <div className="">
                <button
                    type='button'
                    onClick={openModal}
                    className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-900/25 font-medium rounded-lg text-sm px-4 py-2 lg:px-4 lg:py-2.5 focus:outline-none capitalize flex items-center gap-2 order-3"
                >
                    <span className="font-medium whitespace-nowrap">Write a review</span>
                    <ArrowRight className='w-5 h-5' />
                </button>

            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto px-4 py-20">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">

                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                                    <button type="button" onClick={() => {
                                        setFormData({ name: '', message: '', image: null, imagePreview: null });
                                        closeModal();
                                    }} className='absolute top-4 right-4 hover:opacity-75'>
                                        <CloseCircle className='w-6 h-6' />
                                    </button>

                                    <div className="bg-white p-6 rounded-md shadow-md">
                                        <h2 className="text-2xl font-semibold mb-4 text-center">Leave a Review</h2>

                                        <form id="reviewForm" onSubmit={handleSubmit} className='space-y-6'>
                                            <div className="space-y-2">
                                                <div className='text-sm'>Profile</div>
                                                <label className="border-2 border-gray-300 border-dashed rounded-full w-32 h-32 overflow-hidden cursor-pointer block bg-gray-50">
                                                    {formData.imagePreview ? (
                                                        <img
                                                            src={formData.imagePreview}
                                                            alt="Preview"
                                                            className="w-full h-full"
                                                        />
                                                    ) : (
                                                        <User className='w-full h-full text-gray-600 p-4' />
                                                    )}
                                                    <input
                                                        type="file"
                                                        id="image"
                                                        name="image"
                                                        onChange={handleImageChange}
                                                        className="hidden"
                                                    />
                                                </label>

                                                <div className="mb-4 space-y-1">
                                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2.5"
                                                    />
                                                </div>
                                            </div>

                                            {/* Message Input */}
                                            <div className="space-y-1">
                                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    rows={5}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2.5"
                                                />
                                            </div>

                                            {/* Submit Button */}
                                            <button
                                                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-900/25 font-medium rounded-lg text-sm px-4 py-2 lg:px-4 lg:py-2.5 focus:outline-none capitalize flex items-center gap-2 order-3"
                                            >
                                                Submit Review
                                            </button>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
