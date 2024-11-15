function Navbar() {
  return (
    <nav className="flex justify-between items-center px-5 lg:px-14 bg-white border-b shadow-md">
      <img className="w-20 scale-150" src="logooo.png" alt="" />
      <ul className="sm:flex gap-8 text-xl hidden">
        <li>Home</li>
        <li>About us</li>
        <li>Join us</li>
        <li>Help</li>
      </ul>
    </nav>
  );
}

export default Navbar;
