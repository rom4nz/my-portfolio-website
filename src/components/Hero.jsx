import React from 'react'
import { heroIcons } from '../constant/data'
import { BackgroundGradient } from './ui/BackgroundGradient'
import Button from './Button'
import { motion } from 'motion/react'
import { fadeIn, fadeInUp, staggerContainer } from '../motion/animation'

const Hero = () => {
    return (
        <section className='py-28 lg:pt-40' id='home'>
            <motion.div
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                className="container flex flex-col items-center">
                {/* image */}
                <motion.div
                    variants={fadeIn}>
                    <BackgroundGradient className="w-70 h-70 lg:w-80 lg:h-80 rounded-full bg-zinc-900">
                        <figure className='rounded-full overflow-hidden'>
                            <img src="/images/pic.jpg" alt="Kavishka Sulochana" width={452} height={452} />
                        </figure>
                    </BackgroundGradient>
                </motion.div>
                {/* content */}
                <div className='text-center mt-8'>
                    <motion.div variants={fadeInUp}>
                        <h2 className='text-xl lg:text-2xl mb-1.5'>Hello, I'm </h2>
                        <h1 className='text-5xl lg:text-6xl mb-1.5 font-bold'>
                            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
                                Kavishka Sulochana
                            </span>
                        </h1>
                    </motion.div>
                    <motion.h2 variants={fadeInUp} className='text-xl lg:text-2xl'> Software Engineer Undergraduate</motion.h2>
                    <motion.p variants={fadeInUp} className='max-w-[820px] mx-auto mt-4 mb-6'>Specializing in Software Engineering with a strong foundation in web and mobile application development, database systems, and cloud technologies. Skilled in MERN stack, Flutter, and ASP.NET Core, with a passion for building innovative and scalable software solutions.</motion.p>

                    <motion.div
                        variants={fadeIn}
                        className="flex items-center justify-center gap-5">
                        {heroIcons.map(icon => (
                            <a href='#' target='_blank' className='hover:text-indigo-400 transition-colors'>
                                <icon.icon size={30} />
                            </a>
                        ))}
                    </motion.div>

                    {/* btn wrapper */}
                    <motion.div
                        variants={fadeInUp}
                        className="mt-10 flex items-center justify-center flex-wrap gap-5">
                        <Button label="Download CV" classes="primary-btn" icon />
                        <Button label="Let's Collaborate" classes="secondary-btn" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero