import '@styles/globals.css'

import Nav from '@components/Nav'
import Provider from '@components/Provider'


export const metadata = {
    title: "Post",
    description: "Post Anything"
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Provider>
            <div className='main'>
                <div className=''/>
            </div>
            <div className="app">
                <Nav/>
                {children}
            </div>
            </Provider>
        </body>

    </html>
  )
}

export default RootLayout