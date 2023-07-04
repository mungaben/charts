import Image from 'next/image'
import REcharts from './components/REcharts'
import LineChart from './components/Line'



export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-white ">
    <LineChart/>
    </main>
  )
}
