import React from 'react'

export default function Section2() {
    return (
        <div className='sec2'>
            <div className="container">
                <div className='head1'>
                    <p>Why Propertie is good fit for you</p>
                </div>
                <div className='head2'>
                    <p>Despite the fact that piranhas are relatively harmless, many people continue to believe <br />
                        the pervasive myth that piranhas are dangerous to humans. </p>
                        <hr className='hr2'/>
                </div>
            </div>
            <div className="container">
                <div className='row cards'>
                    <div className="col-4 card1">
                        <img src="Assets/icon1.png" alt="" />
                        <p className='head3'>Feature Name</p>
                        <p className='p4'>We all are passionate to transform your ideas into reality. Collaborate with friends, family, and coworkers from any device.</p>
                    </div>
                    <div className="col-4 card2">
                        <img src="Assets/icon2.png" alt="" />
                        <p className='head4'>Feature Name</p>
                        <p className='p5'>We all are passionate to transform your ideas into reality. Collaborate with friends, family, and coworkers from any device.</p>
                    </div>
                    <div className="col-4 card3">
                        <img src="Assets/icon3.png" alt="" />
                        <p className='head5'>Feature Name</p>
                        <p className='p6'>We all are passionate to transform your ideas into reality. Collaborate with friends, family, and coworkers from any device.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
