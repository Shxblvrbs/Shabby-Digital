import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

// services data
const services = [
  {
    name: 'Web Design',
    description:
      'Whether it is clean and simple or lively animations, we do it all! Additionally, we wire your website into a machine that maximizes leads with built-in automations.',
    link: 'Learn More',
  },
  {
    name: 'Digital Marketing',
    description:
      'Not only do we run social media advertisments and campaigns, but we obtain leads through industry specific means. Talk with us to find out more!',
    link: 'Learn More',
  },
  {
    name: 'Content & Design',
    description:
      'What good is promoting your business if your ads look... "Shabby". Let's create awesome promotional content with our photo/video and graphic design team!',
    link: 'Learn More',
  },
  {
    name: '... More',
    description:
      'Learn more about our other cool projects such as: Software Development, Arbitrage, Staffing, and more.',
    link: 'Learn More',
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>What We Do</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              Simple and Professional or Lively and Animated?
              We cater our services to match your business' tone.
            </h3>

            <Link
            to='work'
            activeClass='active'
            smooth={true}
            spy={true}
            className=''
            >
            <button className='btn btn-sm'>See Our Work</button>
            </Link>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className='border-b border-white/20 h-[146px] mb-[38px] flex'
                    key={index}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a
                        href='#'
                        className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
