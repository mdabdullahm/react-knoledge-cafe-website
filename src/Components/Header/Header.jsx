// Header.jsx

import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center py-4 border-b-2 mb-8'>
            {/* ফন্ট সাইজ রেসপন্সিভ করা হয়েছে (মোবাইলে 3xl, md থেকে 4xl) */}
            <h1 className="text-3xl md:text-4xl font-bold">Knowledge Cafe</h1>
            <img className='w-11' src={profile} alt="" />
        </header>
    );
};

export default Header;