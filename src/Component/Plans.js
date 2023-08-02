import PlansComp from './PlansComp'
function  Plans(){
    return(
        <div className="container Plans row overflow-auto">
            <div className='col-lg-4 col-md-6 col-sm-12'>
            <PlansComp title="Free" price="0.00" features={[1,1,1,0,0,0,0,0,0]} join=" "/>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
            <PlansComp title="Basic" price="7.99" features={[1,1,1,1,1,1,1,0,0]} join=" "/>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
            <PlansComp title="Premium" price="19.99" features={[1,1,1,1,1,1,1,1,1]} />
            </div>
        </div>
    )
}

export default Plans;