import './App.css'

function Card1() {
  return (
    <div className="md:max-w-sm w-full p-6 rounded-xl shadow-xl bg-black border border-zinc-800 hover:border-white transition-all duration-300 hover:scale-105 group">
      
      <div className="relative overflow-hidden rounded-lg mb-6">
     <img
  src="/nihar.jpeg"
  alt="Profile photo"
  className="w-full h-95 object-cover object-top rounded-xl transition-transform duration-300 group-hover:scale-95"
/>
<div className="absolute inset-0 from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-white text-black rounded-full mb-3">
          HEY THERE!
        </span>
        <h2 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-200">
           I'M NIHAR VIJAY MENGADE
        </h2>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        Working on mastering React development with a focus on building clean and responsive UIs. This card is a practical example of integrating React with Tailwind CSS to create modern web components.
      </p>

      <div className="flex items-center justify-between"><a href='https://github.com/niharmengade'>

      
        <button className="px-4 py-2 bg-white hover:bg-gray-200 white text-sm rounded-lg transition-colors duration-200">
          
          GIT HUB 
        </button>
        </a>

        <div className="flex items-center space-x-1 text-xs text-gray-500">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
            />
          </svg>
          <span>Building</span>
        </div>
      </div>
    </div>
  )
}

export default Card1
