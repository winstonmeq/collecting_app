import './globals.css'
import Provider from './components/Provider'
export const metadata = {
  title: 'Collection App',
  description: 'collecting app for market store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> 
      <Provider>
          <div className='main'>
            <div className='gradient'></div>
          </div>
        
          <main className='app'>         
          {children}
          </main>  
       </Provider>    
      </body>
    </html>
  )
}
