import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// img
import Img1 from '../assets/Jake-Kaufman.png';
import Img2 from '../assets/Shahab-Khan.png';
import Img3 from '../assets/Sophia-Landscaping.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
          >
            {/* text */}
            <div className='lg:mb-[18px]'>
              <h2 className='h2 leading-tight text-accent'>
                Our Latest <br />
                Work
              </h2>
              <p className='max-w-sm mb-16'>
                Curious about what we’ve been up to? Check out our latest projects to see 
                how we’re helping businesses create a stellar online presence.
              </p>
              <button className='btn btn-sm'>Book a Demo Call</button>
            </div>
            {/* image */}
            <a href='https://jakeforrkaufman.com' target='_blank'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Img1}
                alt=''
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Web Design</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Jake Kaufman Portfolio</span>
              </div>
            </div>
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'
          >
            {/* image */}
            <a href='https://shahabkhan.dev' target='_blank'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Img2}
                alt=''
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Web Design</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Shahab Khan Portfolio</span>
              </div>
            </div>
            </a>
            {/* image */}
            <a href='https://sophia-landscaping.vercel.app/' target='_blank'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Img3}
                alt=''
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Digital Marketing</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Sophia Landscaping & Tree Service</span>
              </div>
            </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
