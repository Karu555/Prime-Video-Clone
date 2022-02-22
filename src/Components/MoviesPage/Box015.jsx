import './box015.css'
export function Box015({ val,smaller}) {
  return (
    <div className={smaller?"smallerbox015":'box015'}>    
      <h1>{val}</h1> 
    </div>
  )
}