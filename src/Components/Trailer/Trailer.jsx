import {useSearchParams } from 'react-router-dom'

export function Trailer015() {
  let [searchParams] = useSearchParams();

  return <div>
    <h1>{searchParams.get('id')}</h1>
    <h1>{searchParams.get('type')}</h1>
  </div>
}