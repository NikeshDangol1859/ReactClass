import React from 'react'

function Rifd() {
  return (
    <>
    <h1 className='fs-1 text-center'>RFID SYSTEM SOFTWARE</h1>

<div className="bar_container">
    <div className="detailing">
        <div className="para">
            <p>Spears Radio frequency identification uses electromagnetic fields to 
                automatically identify and track tags attached to books. 
                There are several ways of identifying tags but the most common 
                is to store a serial number. The chip and antenna attached together 
                are called an RFID tag. The RFID reader or scanner converts the RFID tag 
                information into digital information which will be further seen in the 
                computer and stored for future use. <br></br>

                Spears Library Management system, RFID, acts as a systematic way of 
                data collection. This system plays an important role in redefining the 
                library process by scanning books on the shelves itself without tipping them out.
                
                
                 </p>
                 <h1 className='text-center'>Benefits of RFID in LMS</h1>
    <div className="feature mx-5 fs-6">
    <ul>
        <li> <i className="fa-regular fa-square-check" style={{color: '#63E6BE'}} /> Scanning made easy with tags </li>
        <li> <i className="fa-regular fa-square-check" style={{color: '#63E6BE'}} /> Faster check-in and check-out facility</li>
        <li> <i className="fa-regular fa-square-check" style={{color: '#63E6BE'}} />  Easy to maintain inventory through wireless system.</li>
        <li> <i className="fa-regular fa-square-check" style={{color: '#63E6BE'}} /> Increase accuracy and efficiency</li>
        <li> <i className="fa-regular fa-square-check" style={{color: '#63E6BE'}} /> RFID Gate acts as an anti-theft</li>
        <li> <i className="fa-regular fa-square-check" style={{color: '#63E6BE'}} /> Reduces the time of circulation</li>
    </ul>
    </div>
        </div>

        <div className="bar_img">
            <img src="https://www.elibrarysoftware.com/img/rfid-process-thumb.jpg" alt="" />
        </div>


    </div>

    {/* detailling finished */}

    <div className="benifit">
        <div className="context">
            <h1 className='fs-3 text-center'>BENEFITS OF USING SPEARS RFID SYSTEM SOFTWARE</h1>
            <div className="sides">
                <div className="beni_img">
                    <img src="https://www.elibrarysoftware.com/img/integrated-library-system.jpg" alt="" />
                    <div className="texting">
                    <div className="sub_heading">Improved Inventory Management</div>
                    <div className="paragraph">Spears RFID system software makes it easier for 
                        businesses to keep track of their inventory in real-time. By attaching 
                        RFID tags to items, organizations can automate inventory counting, cutting 
                        down on manual work and human errors. This accuracy ensures that businesses 
                        maintain optimal stock levels, avoid running out of stock, and prevent overstocking, 
                        which ultimately boosts inventory turnover rates and profitability.</div>
                    </div>
                    <div className="texting">
                    <div className="sub_heading">Enhanced Visibility in the Supply Chain</div>
                    <div className="paragraph">Spears RFID system software offers a major advantage 
                        by improving visibility throughout the supply chain. By integrating RFID 
                        technology into supply chain processes, businesses can track the movement 
                        of goods from manufacturing sites to distribution centers and eventually to 
                        customers. This real-time tracking allows for proactive decision-making, 
                        like rerouting shipments to avoid delays or optimizing delivery routes for 
                        efficiency. With better visibility, businesses can respond swiftly to 
                        changing market demands, staying ahead of the competition.</div>
                    </div>
                </div>
                <div className="head_text">
                <div className="texting">
                    <div className="sub_heading">Efficient Asset Tracking</div>
                    <div className="paragraph">Traditional methods of asset tracking, like manual 
                        recording or barcode scanning, can be slow and prone to errors.Spears RFID 
                        system software streamlines asset tracking by providing accurate, real-time 
                        data on asset location and condition. Whether it's tracking equipment in 
                        healthcare facilities, monitoring machinery in manufacturing plants, or managing 
                        vehicles in a fleet, RFID technology simplifies asset management, reduces search 
                        time, and minimizes the risk of misplaced or lost assets.</div>
                    </div>
                    

                </div>
            </div>
        </div>


    </div>



    



</div>
      
    </>
  )
}

export default Rifd


