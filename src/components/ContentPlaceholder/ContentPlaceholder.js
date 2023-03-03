import { motion } from 'framer-motion'
import * as React from 'react'
import { Link } from 'react-router-dom'
import './ContentPlaceholder.css'

export const Word = ({ link,path }) => <Link to ={path} className='word'>{link}</Link>

const Paragraph = ({ link1, link2, link3, link4, link5, link6 ,path }) => (
  <div className='paragraph'>
    <Word link={link1} path={path} />
    <Word link={link2} path={path} /> 
    <Word link={link3} path={path} />
    <Word link={link4} path={path} />
    <Word link={link5}  path={path} />
    <Word link={link6} path={path} />
  </div>
)

export const ContentPlaceholder = ({
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
}) => (
  <motion.div
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    transition={{ duration: 0.8 }}
    className='contentPlaceholder'
  >
    <Paragraph
      link1={link1} path='/'
      link2={link2}
      link3={link3}
      link4={link4}
      link5={link5}
      link6={link6}
    />
  </motion.div>
)