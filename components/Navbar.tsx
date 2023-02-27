import Link from 'next/link';

function Navbar() {
  return(
  <nav className="flex justify-between m-5 mr-10 ml-0 items-center">
    <Link href="/">
      <img src="/NavbarLogo.svg" className="w-[230px] h-[50px]"/>
    </Link>
    <div className="flex gap-4 items-center">
      <img src="/anonymous.png" className="w-[50px] rounded-full"/>
      <h1>Anonymous</h1>
    </div>
  </nav>
  )
}

export default Navbar;