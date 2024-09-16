import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
                Get in touch
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 items-start mb-20'
          >
          <iframe
          src="https://link.shabbydigital.com/widget/form/Hcx7W1M10ugkCQwLApqD"
          className="w-full h-[800px] lg:w-[500px] lg:h-[800px] border-none lg:mt-6 lg:-mb-36 lg:ml-10 -mb-32 -mt-2"
          // style="width:100%;height:100%;border:none;border-radius:4px"
          id="inline-Hcx7W1M10ugkCQwLApqD" 
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Intro Call Form"
          data-height="427"
          data-layout-iframe-id="inline-Hcx7W1M10ugkCQwLApqD"
          data-form-id="Hcx7W1M10ugkCQwLApqD"
          title="Intro Call Form"
          >
          </iframe>
            {/* <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Your name'
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Your email'
            />
            <textarea
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              placeholder='Your message'
            ></textarea>
            <button className='btn btn-lg'>Send Message</button> */}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
