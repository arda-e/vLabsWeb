import Link from 'next/link'
const Footer2 = () => {
    return (
<footer className="text-gray-600 bg-gray-100 body-font">
  <div className="container sm:px-8 md:px-10 lg:px:24 xl:px-32 pt-24 pb-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">VisumLabs</span>
      </a>
      <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">PRODUCTS</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href="/visium-farm"><a className="text-gray-600 hover:text-gray-800">Visium Farm</a></Link>
          </li>
          <li>
            <Link href="/visium-go"><a className="text-gray-600 hover:text-gray-800">Visium Go</a></Link>
          </li>
          <li>
            <Link href="/visium-crowd"><a className="text-gray-600 hover:text-gray-800">Visium Crowd</a></Link>
          </li>
          <li>
            <Link href="/visium-manage"><a className="text-gray-600 hover:text-gray-800">Visium Manage </a></Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">RESOURCES</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href="/support"><a className="text-gray-600 hover:text-gray-800">Support</a></Link>
          </li>
          <li>
            <Link href="/blog"><a className="text-gray-600 hover:text-gray-800">Blog</a></Link>
          </li>
          <li>
            <Link href="/visium-academy"><a className="text-gray-600 hover:text-gray-800">Visium Academy</a></Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">COMPANY</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href="/about-us"><a className="text-gray-600 hover:text-gray-800">About Us</a></Link>
          </li>
          <li>
            <Link href="/career"><a className="text-gray-600 hover:text-gray-800">Career</a></Link>
          </li>
          <li>
            <Link href="/contact"><a className="text-gray-600 hover:text-gray-800">Contact Us</a></Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href="privacy-policy"><a className="text-gray-600 hover:text-gray-800">Privacy Policy</a></Link>
          </li>
          <li>
            <Link href="terms"><a className="text-gray-600 hover:text-gray-800">Terms&amp;Conditions</a></Link>
          </li>
          <li>
            <Link href="site-map"><a className="text-gray-600 hover:text-gray-800">Site Map</a></Link>
          </li>

        </nav>
      </div>
    </div>
  </div>
  <div className="bg-red-500">
    <div className="container mx-auto py-4 sm:px-8 md:px-10 lg:px:24 xl:px-32 flex flex-wrap flex-col sm:flex-row">
      <p className="text-white text-sm text-center sm:text-left">© 2021 Visium Labs —
        <a href="https://twitter.com/netastr" rel="noopener noreferrer" className="text-white ml-1" target="_blank">@netastr</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-white">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-white">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-white">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-white">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
    )
}

export default Footer2

