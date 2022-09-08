import React from 'react'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import '../styles/SignInForm.css'
import '../styles/NewServiceOrderForm.css'
import '../styles/NavBar.css'
import '../styles/OS.css'
import '../styles/Home.css'
import '../styles/Filter.css'
import '../styles/Sorter.css'
import '../styles/ServiceOrders.css'
import '../styles/Pagination.css'

import {AuthProvider} from '../Context/SignInCtx'

function MyApp({ Component, pageProps }) {
  return <>
  <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
</>
}

export default MyApp
