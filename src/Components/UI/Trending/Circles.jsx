import './trending015.css'
export function Circles({ id, current,handleOnCircleClick }) {  
  return (
    <div className={"circles015"} style={{
      backgroundColor:(id!=current)?'grey':'white'
    }} onClick={
      () => {
        handleOnCircleClick(id);
      }
    }>
      
    </div>
  )
}