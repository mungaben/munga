


"use client" 

import React from 'react'
import { Phrase } from '../lib/Phrase'
import { HomeContent } from '../Content'
import { Card } from '@/components/ui/card'

import {motion} from "framer-motion"

const AnimateScroll = () => {
  return (
    <motion.div 
    
    
    initial={{
      backgroundColor:'blueviolet',
      opacity:0.2,
      x:200

    }}
    animate={{
      opacity:1,
      x:0

    }}
    transition={{
      duration:1,
      delay:0.4
    }}
    className='   bg-gradient-to-r to-violet-500 bg-clip-text text-transparent after:bg-gradient-conic  after:absolute placeholder:  before:lg:h-[360px] after:dark:via-[#0141ff] dark:bg-gradient-to-br dark: from-slate-300 mx-14 lg:max-w-[800px]  before:content-[""] before:mt-0 before:scale-90 before:h-full before:absolute before:w-full before:rounded-md after:content-[""]  before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:via-slate-300 before:dark:opacity-20 after:dark:from-sky-900 after:-ml-60 after:h-h-full after:hover:animate-ping after:w-full after:bg-green-500  before:shadow-2xl before:hover:bg-black   '>

        <motion.div className='  '>

          {
            HomeContent.map((item, index) => <Card key={index} className=' w-full border-none p-2 shadow-none text-xs md:text-xl'>
              <motion.div 
              initial={{
                opacity:0
              }}
              animate={{
                opacity:1
              }}
              transition={{
                delay:index*0.1
              }}
              >
                <div className='  '>
                  <motion.p
                  initial={{
                    opacity:0
                  }}

                  animate={{
                    opacity:1

                  }}
                  transition={{
                    duration:2,
                    delay:index*0.5
                  }}
                  className={`first-letter:select-none`}>
                    {item.Description}
                  </motion.p>

                  </div>
              </motion.div>


            </Card>)
          }

        
        </motion.div>
        
              
    </motion.div>
  )
}

export default AnimateScroll