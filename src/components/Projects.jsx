import React from 'react'
import { Carousel } from './ui/carousel'
import { ProjectsItems } from '../constant/data'
import { motion } from 'motion/react'
import { fadeIn, fadeInUp, staggerContainer } from '../motion/animation'

const Projects = () => {
    return (
        <section className='section bg-secondary-clr' id='projects'>
            <motion.div
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                className="container">
                {/* Title */}
                <motion.h2 variants={fadeInUp} className='text-center'>Recent Projects</motion.h2>

                {/* Card Wrapper */}
                <motion.div variants={fadeInUp} className='relative overflow-hidden w-full h-full py-20'>
                    <Carousel slides={ProjectsItems} />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Projects