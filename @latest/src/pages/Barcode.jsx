import React from 'react'

function Barcode() {
  return (
    <>
    <h1 className='fs-1 text-center'>BARCODING SYSTEM</h1>

    <div className="bar_container">
        <div className="detailing">
            <div className="para">
                <p>A bar-coding system is simply an arrangement of 
                    bars that show numbers and letters. when using Library 
                    Management system, each barcode image is programmed to identify 
                    the title of book, author name, item number, volume number etc. 
                    All this information is shown in one barcode with the help of coding. <br></br>

                    Barcodes are used in libraries to label books, magazines, CD & DVDs. Each 
                    and every book and other items are assigned unique 12- digit barcodes. 
                    It contains all information about the product. In Library Management system, 
                    whenever a student return or issue a book the system fetch the bar code number 
                    and we can make entry of book in computer systematically. Library Management 
                    system helps in systematic management of books.
                    
                    
                     </p>
                     <h1 className='text-center'>Benefits of Barcode System</h1>
        <div className="feature mx-2 fs-6">
        <ul>
            <li> <i className="fa-regular fa-square-check" style={{color: '#63E6BE'}} /> Improved inventory management</li>
            <li> <i className="fa-regular fa-square-check" style={{color: '#63E6BE'}} /> Faster check-in and check-out facility</li>
            <li> <i className="fa-regular fa-square-check" style={{color: '#63E6BE'}} />  Easy to sort books</li>
            <li> <i className="fa-regular fa-square-check" style={{color: '#63E6BE'}} /> Reduced staff workload</li>
            <li> <i className="fa-regular fa-square-check" style={{color: '#63E6BE'}} /> Increase accuracy and efficiency</li>
            <li> <i className="fa-regular fa-square-check" style={{color: '#63E6BE'}} /> Improve circulation capabilities</li>
        </ul>
        </div>
            </div>

            <div className="bar_img">
                <img src="https://www.elibrarysoftware.com/img/barcode-system-big.jpg" alt="" />
            </div>


        </div>

        



    </div>
      
    </>
  )
}

export default Barcode
