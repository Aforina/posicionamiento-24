const Card = ({price, title, subtitle, details, details2, buttonText, extraClassNames}) => {
    return (
        <div className={`drop-shadow-md h-80 w-72 relative ${extraClassNames}`}>
            <div className='text-center p-8'>
                <h1 className='text-4xl font-semibold text-[#FAAC78]'>{price}</h1>
                <p className='font-medium mb-4'>{title}</p>
                <div className='space-y-2'>
                    <p className='font-normal'>{subtitle}</p>
                    <p className='font-normal'>{details}</p>
                    <p className='font-normal'>{details2}</p>
                </div>
                <nav className='absolute w-3/4 h-12 mt-8 bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white rounded-md bottom-8'>
                    <button className='w-full h-full font-semibold inline-block align-middle' >{buttonText}</button>
                </nav>
            </div>
        </div>
    )
  }
  
  export default Card
  