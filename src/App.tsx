import { useState } from 'react'
import reactLogo from './assets/react.svg'
import framerMotionLogo from './assets/framer-motion.svg'
import tailwindLogo from './assets/tailwind-css.svg'
import viteLogo from '/vite.svg'
import { motion } from 'framer-motion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="max-w-screen-lg flex min-h-svh flex-col items-center justify-center gap-8 bg-gray-800 text-white">
      <div className="grid grid-cols-2 grid-rows-2 sm:flex ">
        <a
          href="https://vitejs.dev"
          target="_blank"
          className="flex justify-center"
        >
          <motion.img
            src={viteLogo}
            className="hover:drop-shadow-vite h-36 p-6 transition-[filter] duration-300 will-change-[filter]"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          className="flex justify-center"
        >
          <motion.img
            initial={{
              filter: 'drop-shadow(0 0 var(--color-black))',
            }}
            whileHover={{
              filter: 'drop-shadow(0 0 32px var(--color-react))',
            }}
            animate={{ rotate: 360 }}
            transition={{
              filter: { duration: 0.3 },
              rotate: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 20,
                ease: 'linear',
              },
            }}
            src={reactLogo}
            className="h-36 p-6"
            alt="React logo"
          />
        </a>
        <a
          href="https://www.framer.com/motion/"
          target="_blank"
          className="flex justify-center"
        >
          <motion.img
            animate={{ y: [8, -4, 2, 0] }}
            transition={{
              stiffness: 100,
              repeat: Infinity,
              repeatType: 'loop',
              duration: 1.5,
            }}
            src={framerMotionLogo}
            className="hover:drop-shadow-tailwind h-36 p-6 transition-[filter] duration-300 will-change-[filter]"
            alt="Framer Motion logo"
          />
        </a>
        <a
          href="https://www.tailwindcss.com"
          target="_blank"
          className="flex justify-center"
        >
          <motion.img
            animate={{ x: [4, -4] }}
            transition={{
              stiffness: 200,
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 2,
            }}
            src={tailwindLogo}
            className="hover:drop-shadow-framer-motion h-36 p-6 transition-[filter] duration-300 will-change-[filter]"
            alt="Tailwind CSS logo"
          />
        </a>
      </div>
      <h1 className="max-w-sm text-center text-5xl font-bold leading-tight text-white sm:max-w-lg sm:text-5xl">
        Vite, React, Framer Motion & Tailwind CSS
      </h1>
      <div className="flex flex-col items-center gap-4">
        <button
          className="rounded-lg border border-solid border-transparent bg-gray-950 py-2 px-5 text-white transition-colors duration-200 hover:border-blue-400"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
