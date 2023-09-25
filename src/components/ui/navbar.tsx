import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed inset-0 h-14 text-white text-sm bg-white/10 backdrop-blur-md border-slate-600 border-b-[0.5px] z-50">
      <div className="flex justify-between items-center h-full w-[90vw] max-w-[100rem] mx-auto">
        {/* Logo */}
        <section className="flex items-center">
          <div className="h-6 w-6 bg bg-slate-300 rounded-full" />
          <span className="ml-3">Otakkuu</span>
        </section>

        {/* Auth links */}
        <section className="flex items-center w-32 mr-20 text-[13px]">
          <Link href="/login" className="hover:text-[#9577e7]">Login</Link>
          <Link href="/login" className="bg-[#714ED3] hover:bg-[#5333ad] px-[10px] py-[3px] rounded-full ml-5">Sign Up</Link>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
