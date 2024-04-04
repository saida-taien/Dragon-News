import logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center space-y-2 my-4'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-lg'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;