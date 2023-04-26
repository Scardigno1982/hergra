import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="container mx-auto content-center">
      <div className='mt-5'>

        <div className='grid place-items-center h-screen'> 
        <div>
          <h1 className="text-4xl font-bold text-center text-white">HerGra - Apicultura</h1>
          <p className="text-lg font-medium text-center text-white mb-5">Pagina en construcción</p>
          <Image 
          src={'/img/logo-blanco.png'} 
          alt="Logo"  
          object-fit="contain"
          width={250}
          height={250}
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          style={{margin: 'auto'}} 
          />
        </div>

          
        </div>
      </div>
    </div>
  )
}
