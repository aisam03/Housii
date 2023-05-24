import React from 'react'

export default function Section1() {
    return (
        <div className='sec1'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 holder'>
                        <img src="Assets/placeholder.png" alt="" />
                    </div>
                    <div className='col-6'>
                        <p className='hold1'>Get started with Propertie</p>
                        <p className='hold2'>The movement of people between distant geographical locations. To live is the rarest thing in the world. Most people exist, that is all.</p>
                       <div className='place1'>
                       <span className='span1'>
                            <p className='place2'>Earn More</p>
                            <p className='hold3'>The movement of people between distant geographical locations.</p>
                        </span>
                        <span className='span2'>
                            <p className='place3'>Guaranteed</p>
                            <p className='hold4'>The movement of people between distant geographical locations.</p>
                        </span>
                       </div>
                       <button type="button" class="btn btn-primary start"><span className='span3'>Start Selling</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
