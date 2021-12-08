//card component
import './component.css'

const Card = (props) => {

    return(
   <div class="component">
        <div class="card" id='smaller'>

            <img src={props.image} />
            <h1 className='title'>{props.name}</h1>
            <p class="text">{props.desc}</p>
                
        </div>
    </div>
)}
export default Card;