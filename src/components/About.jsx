import React from "react";
import { Cpu, Code, Rocket, Layers } from "lucide-react";
import { motion } from 'motion/react'
import { fadeIn, fadeInUp, staggerContainer } from '../motion/animation'

const About = () => {
    return (
        <section id="about" className="py-20 bg-secondary-clr text-white">
            <motion.div
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                className="container mx-auto px-6 md:px-12 lg:px-20">
                {/* Heading */}
                <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center mb-6">About Me</motion.h2>
                <motion.p variants={fadeInUp} className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
                    I'm <span className="font-semibold">Kavishka Sulochana Igalagama</span>,
                    a passionate final year undergraduate student pursuing a Software Engineering Degree.
                    I enjoy learning new technologies, building scalable applications, and solving
                    real-world problems through innovation. Always eager to collaborate, grow, and
                    explore exciting opportunities in the tech industry.
                </motion.p>

                {/* Skills Grid */}
                <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition">
                        <Cpu className="mx-auto text-green-400" size={40} />
                        <h3 className="mt-4 text-lg font-semibold">Problem Solving</h3>
                        <p className="text-gray-400 text-sm mt-2">Strong analytical skills with a focus on efficiency.</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition">
                        <Code className="mx-auto text-blue-400" size={40} />
                        <h3 className="mt-4 text-lg font-semibold">Full-Stack Development</h3>
                        <p className="text-gray-400 text-sm mt-2">Hands-on experience with MERN, Flutter & .NET.</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition">
                        <Rocket className="mx-auto text-purple-400" size={40} />
                        <h3 className="mt-4 text-lg font-semibold">Innovation</h3>
                        <p className="text-gray-400 text-sm mt-2">Passionate about creating impactful solutions.</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition">
                        <Layers className="mx-auto text-pink-400" size={40} />
                        <h3 className="mt-4 text-lg font-semibold">Team Collaboration</h3>
                        <p className="text-gray-400 text-sm mt-2">Enjoy working with teams to achieve goals.</p>
                    </div>
                </motion.div>

                {/* Counters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <motion.div variants={fadeInUp} className="p-6 bg-gray-800 rounded-2xl shadow-md">
                        <h3 className="text-3xl font-bold text-green-400">10+</h3>
                        <p className="text-gray-300 mt-2">Projects Completed</p>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="p-6 bg-gray-800 rounded-2xl shadow-md">
                        <h3 className="text-3xl font-bold text-blue-400">2+</h3>
                        <p className="text-gray-300 mt-2">Years Experience</p>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="p-6 bg-gray-800 rounded-2xl shadow-md">
                        <h3 className="text-3xl font-bold text-white">8+</h3>
                        <p className="text-gray-300 mt-2">Technologies Mastered</p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;