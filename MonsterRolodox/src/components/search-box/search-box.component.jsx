import React, { Component } from 'react'
import "./search-box.styles.css"


const SearchBox = ({ className, onChangeHandler, placeholder }) =>  (
        <div>
            <input
                className={className}
                type='search'
                placeholder={placeholder}
                onChange={onChangeHandler} />

        </div>
    )


export default SearchBox

// export default class SearchBox extends Component {
//     render() {
//         const { className,onChangeHandler, placeholder } = this.props
//         return (
//             <div>
//                 <input
//                     className={className}
//                     type='search'
//                     placeholder={placeholder}
//                     onChange={onChangeHandler} />

//             </div>
//         )
//     }
// }
