import './footer.css'
import { SiPrimevideo } from 'react-icons/si'
export function Footer() {
  return (
    <div className='footer'>
      <SiPrimevideo size={90} />
      <h3>
        <a href='#'>Terms and Privacy Notice</a>
        <a href='#'>Send us feedback</a>
        <a href='#'>Help</a>
        © 1996-2022, Amazon.com, Inc. or its affiliates</h3>
    </div>
  )
}