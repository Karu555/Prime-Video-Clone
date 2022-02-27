import {useSearchParams } from 'react-router-dom'

export function Trailer015() {
  let [searchParams] = useSearchParams();

  return <div style={
    {
      height: '100vh',
      textAlign: 'center',
      backgroundColor:'#0F171E'
    }
  }>
    <iframe width="100%" height="850"
      src={`https://www.youtube.com/embed/${searchParams.get('key')}`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen='true'>
    </iframe>
    {/* <iframe width="560" height="315" src={`https://www.youtube.com/embed/'${searchParams.get('key')}`} frameborder="0"></iframe> */}
    {/* <video >123</video> */}    
  </div>
}