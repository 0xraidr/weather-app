import React from 'react'

const Forecast = ({title}) => {
  return (
    <div>
        <div className='flex items-center justify-start mt-6'>
            <p className='text-white font-medium uppercase'>{title}</p>
        </div>
        <hr />
        <div className='flex flex-row items-center justify-between text-white'>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light textr-sm'>04:30 PM</p>    
                <img
            src='https://www.publicdomainpictures.net/pictures/310000/nahled/orange-circle.png' alt=''
            className='w-12'
            />
            <p className='font-medium'>22°</p>
            </div>

                        <div className='flex flex-col items-center justify-center'>
                <p className='font-light textr-sm'>04:30 PM</p>    
                <img
            src='https://www.publicdomainpictures.net/pictures/310000/nahled/orange-circle.png' alt=''
            className='w-12'
            />
            <p className='font-medium'>22°</p>
            </div> 

                        <div className='flex flex-col items-center justify-center'>
                <p className='font-light textr-sm'>04:30 PM</p>    
                <img
            src='https://www.publicdomainpictures.net/pictures/310000/nahled/orange-circle.png' alt=''
            className='w-12'
            />
            <p className='font-medium'>22°</p>
            </div> 

                        <div className='flex flex-col items-center justify-center'>
                <p className='font-light textr-sm'>04:30 PM</p>    
                <img
            src='https://www.publicdomainpictures.net/pictures/310000/nahled/orange-circle.png' alt=''
            className='w-12'
            />
            <p className='font-medium'>22°</p>
            </div> 

                        <div className='flex flex-col items-center justify-center'>
                <p className='font-light textr-sm'>04:30 PM</p>    
                <img
            src='https://www.publicdomainpictures.net/pictures/310000/nahled/orange-circle.png' alt=''
            className='w-12'
            />
            <p className='font-medium'>22°</p>
            </div>     
        </div>
    </div>
  )
}

export default Forecast