import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="max-w-screen-lg flex min-h-svh flex-col items-center justify-center gap-8 bg-gray-800 text-white">
      <div className="flex">
        <a href="https://vitejs.dev" target="_blank">
          <img
            src={viteLogo}
            className="h-36 p-6 transition-[filter] duration-300 will-change-[filter] hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="animate-spin-slow h-36 p-6 transition-[filter] duration-300 will-change-[filter] hover:drop-shadow-[0_0_2em_#61dafbaa]"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-5xl font-bold leading-tight text-white">
        Vite + React
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
