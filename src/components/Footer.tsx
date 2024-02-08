import React from 'react'
import { Button } from './ui/button'
import { LinkedinIcon, GithubIcon } from 'lucide-react'

const Footer = () => {
  return (
    <>
    <style>
      {`
@media (max-width: 768px) {
  footer{
    padding: 0;
    margin: 0;
    }
  footer .fttxt{
    font-size: 0.875rem/* 14px */;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 2.2rem 0;
    flex-wrap: wrap;
    flex-direction: column;
  }
  footer .fttxt .ftp{
    font-size: large;
  }
  footer .fttxt .ficon{
    padding: 1rem;
    padding-bottom: 0;
  }
  footer .fttxt .ficon button{
    height: auto;
    width: auto;
    font-size: small;
  }
  footer .fttxt .ficon button svg{
    height: 1.5rem;
    width: auto;
  }
}
      `}
      </style>
    <footer>
        <div className='fttxt bg-navColor font-extrabold text-lg px-60 py-[30px] font-altoneBold flex justify-between items-center'>
          <div className='ftp text-white'>
            Copyright © 2024. All rights are reserved
          </div>

            <div className='ficon flex gap-2 py-5 justify-end' >
               <Button variant="default" size="icon">
                <a href="https://www.linkedin.com/in/jeric-quilantang-a86508288/" target="_blank">
                  <LinkedinIcon className="text-white hover:text-blue-500" />
                </a>
               </Button>
               <Button variant="default" size="icon">
               <a href="https://github.com/JericQuilantang" target="_blank">
                 <GithubIcon className="text-white hover:text-blue-500"/>
                </a>
               </Button>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
