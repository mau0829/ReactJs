import React from 'react'
import "./card.styles.css"

// const Card = ({monster" : {name , email, id}}) =>{}
const Card = ({ monster }) => {
    const { name, email, id } = monster
    return (
        <div className="card-container" key={id}>
            <img src={`https://robohash.org/${id + 1}?set=set2&size=180x180`} alt={`monster ${name}`} />
            {/* setSeed(Math.floor(Math.random() * 5000)); */}
            <h2>{name}</h2>
            <h4>{email}</h4>
        </div>
    )
};

export default Card


// export default class Card extends Component {
//     render() {
//         const {name,email,id} = this.props.monster
//         return (
//             <div className="card-container" key={id}>
//                 <img src={`https://robohash.org/${id+1}?set=set2&size=180x180`} alt={`monster ${name}`} />
//                 {/* setSeed(Math.floor(Math.random() * 5000)); */}
//                 <h2>{name}</h2>
//                 <h4>{email}</h4>
//             </div>
//         )
//     }
// }
