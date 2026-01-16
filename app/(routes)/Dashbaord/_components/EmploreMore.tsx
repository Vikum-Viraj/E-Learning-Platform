import React from 'react'
import Image from 'next/image'

const ExplorMoreOptions = [
    {
        id: 1,
        title: 'Quizz Pack',
        desc: 'Practice what you learned with bite-sized code challenges.',
        icon: '/tree.png'
    },
    {
        id: 2,
        title: 'Video Courses',
        desc: 'Learn with structured video lessons taught step-by-step.',
        icon: '/game.png'
    },
    {
        id: 3,
        title: 'Community Project',
        desc: 'Build real-world apps by collaborating with the community.',
        icon: '/growth.png'
    },
    {
        id: 4,
        title: 'Talk with AI',
        desc: 'Chat with AI to get help, explanations, and debugging tips.',
        icon: '/start-up.png'
    }
];

const EmploreMore = () => {
  return (
    <div>
        <h2 className='text-3xl mb-2 font-game'>Explore More</h2>
        <div className='grid grid-cols-2 gap-5'>
            {ExplorMoreOptions.map((option, index) => (
                <div key={index} className='flex gap-2 p-2 border rounded-xl'>
                    <Image src={option?.icon} alt={option.title}
                        width={80}
                        height={80}
                    />
                    <div>
                        <h2 className='font-game text-2xl font-medium'>{option?.title}</h2>
                        <p className='font-game text-gray-500'>{option.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default EmploreMore