const Card = ({price, title, subtitle, details, buttonText, extraClassNames}) => {
    return (
        <div className={`drop-shadow-md max-w-sm max-h-96 relative ${extraClassNames}`}>
            <div className='text-center p-10'>
                <h1 className='text-4xl font-semibold text-[#FAAC78]'>{price}</h1>
                <p className='font-medium mb-4'>{title}</p>
                <p className='font-normal'>{subtitle}</p>
                <p className='font-normal'>{details}</p>
                <nav className='w-3/4 h-12 mt-8 bg-gradient-to-b from-[#FFBB8E] to-[#FA8F78] text-white rounded-md bottom-4 left-0'>
                <button className='w-full h-full font-semibold inline-block align-middle' >{buttonText}</button>
                </nav>
            </div>
        </div>
    )
  }
  
  export default Card
  