import React from 'react';
// images
import Image from '../assets/Shabby Digital Inverted Color (Transparent BG) - Copy.png';
// icons
import { FaGithub, FaYoutube, FaDribbble, FaInstagram, FaFacebook } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section
      className='min-h-[85vh] lg:min-h-[78vh] flex items-center lg:-mt-0 -mt-10'
      id='home'
    >
      <div className='container mx-auto mb-14'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[100px] mb-3'
            >
              Shabby <span>Digital</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'
            >
              <span className='text-white mr-3'>We are</span>
              <TypeAnimation
                sequence={[
                  'Developers',
                  2000,
                  'Designers',
                  2000,
                  'Experts',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'
            >
              Does a stellar digital presence require breaking the bank? Nope!
              Welcome to Shabby Digital.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
              <button className='btn btn-lg'><a href="https://link.shabbydigital.com/widget/booking/7tCsfKqjOw2CMtCXmUkh">Schedule a Call to get a FREE Website Today!</a></button>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
            >
              <a href='https://www.instagram.com/shabby_digital/'>
                <FaInstagram />
              </a>
              <a href='https://www.youtube.com'>
                <FaYoutube />
              </a>
              <a href='https://www.facebook.com/profile.php?id=61564910279117'>
                <FaFacebook />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
          >
            <img src={Image} alt=''/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
