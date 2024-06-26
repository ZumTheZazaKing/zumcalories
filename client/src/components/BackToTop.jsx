import ScrollToTop from 'react-scroll-to-top'
import { FaArrowUp } from "react-icons/fa6";

const BackToTop = () => {
    return (
        <ScrollToTop
            smooth
            className='rounded-[50%] w-[60px] h-[60px]'
            component={
                <div className=' w-fit mx-auto'>
                    <FaArrowUp className='text-2xl' />
                </div>
            }
        />
    )
}; export default BackToTop;