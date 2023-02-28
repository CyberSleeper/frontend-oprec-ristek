import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
  return(
  <nav className="flex justify-between m-5 mr-10 ml-0 items-center">
    <Link href="/">
      <Image
        src="/NavbarLogo.svg"
        alt="NavbarLogo"
        width={230}
        height={50}
      />
    </Link>
    <div className="flex gap-4 items-center">
      <Image
        className='rounded-full'
        src="/anonymous.png"
        alt="ProfilePicture"
        width={50}
        height={50}
      />
      <h1>Anonymous</h1>
    </div>
  </nav>
  )
}

export default Navbar;