
import React from 'react'
import "./card-list.styles.css"

import Card from '../card/card.component'

//the way returning is implicit way 
const CardList = ({ monsters }) => (
    <div className='card-list'>
        {
            monsters.map(monster => {
                console.log("card list")
                // const {name,email,id} =  monster
                return (
                    <Card key={monster.id} monster={monster}></Card>
                )
            })
        }
    </div >
)



export default CardList


// export default class CardList extends Component {
//     render() {
//         const { monsters } = this.props

//         return (
//             <div className='card-list'>
//                 {
//                     monsters.map(monster => {
//                         // const {name,email,id} =  monster
//                         return(
//                             <Card key={monster.id} monster = {monster}></Card>
//                         )
//                     })
//                 }
//             </div >
//         )
//     }
// }
