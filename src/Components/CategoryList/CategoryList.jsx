
import image1 from '../../assets/image/accounts.png' ;
import image2 from '../../assets/image/creative.png' ;
import image3 from '../../assets/image/marketing.png' ;
import image4 from '../../assets/image/chip.png' ;

const CategoryList = () => {
    return (
        <div className="text-center space-y-3 my-10">
            <h2 className="text-5xl font-semibold">Job Category list </h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-5'>
                <div className='bg-violet-50 p-5 text-start rounded-md'>
                    <img className='my-4' src={image1} alt='photo' />
                    <h3 className='text base font-semibold'>Account & Finance</h3>
                    <p>300 Jobs Available</p>
                </div>
                <div className='bg-violet-50 p-5 text-start rounded-md'>
                    <img className='my-4' src={image2} alt='photo' />
                    <h3 className='text base font-semibold'>Account & Finance</h3>
                    <p>300 Jobs Available</p>
                </div>
                <div className='bg-violet-50 p-5 text-start rounded-md'>
                    <img className='my-4' src={image3} alt='photo' />
                    <h3 className='text base font-semibold'>Account & Finance</h3>
                    <p>300 Jobs Available</p>
                </div>
                <div className='bg-violet-50 p-5 text-start rounded-md'>
                    <img className='my-4' src={image4} alt='photo' />
                    <h3 className='text base font-semibold'>Account & Finance</h3>
                    <p>300 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;