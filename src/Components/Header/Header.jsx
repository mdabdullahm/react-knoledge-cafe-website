import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center py-4 border-b-2'>
            <h1 className="text-4xl text-center">Knowledge Cafe</h1>
            <img className='w-11' src={profile} alt="" />
        </header>
    );
};

export default Header;