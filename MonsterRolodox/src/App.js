import './App.css';
import { useEffect, useState } from 'react'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';



const App = () => {
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonster,setFilteredMonster] = useState([])
  
  const onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    setSearchField(searchField)
  }
  
  useEffect(() => {
    const FilteredMonster = monsters.filter(
      monster => {
        return monster.name.toLocaleLowerCase().includes(searchField)
      }
    )
    setFilteredMonster(FilteredMonster)
  },[monsters,searchField])

  console.log("render")

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setMonsters(users));
  }, [])



  return (
    <div className="App">
      <h1 className='app-title'>Monseter Rolodex</h1>
      <SearchBox className="search-box" onChangeHandler={onSearchChange} placeholder="Search monsters"></SearchBox>
      <CardList monsters={filteredMonster} />
    </div>
  );
}


// class App extends Component {
//   constructor() { //console.log("calls first")
//     super()
//     this.state = {
//       name: { firstName: "Bingo", lastName: "Mad Angles" },
//       monsters: [
//         // { name: "V" }, { name: "jin" }, { name: "kookie" }
//       ],
//       searchField: ""
//     }
//   }
//   componentDidMount() {
//     // console.log("calls third")
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(user => this.setState(() => { return { monsters: user } },
//       ))

//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase()
//     this.setState(
//       () => {
//         return { searchField }
//       }
//     )
//   }

//   render() {
//     //console.log("cals second")
//     const { monsters, searchField } = this.state
//     const { onSearchChange } = this

//     const filteredMonster = monsters.filter(
//       monster => {
//         return monster.name.toLocaleLowerCase().includes(searchField)
//       })


//     return (
//       <div className="App">
//         <h1 className='app-title'>Monseter Rolodex</h1>

//         {/* {
//           filteredMonster.map(
//             (monster, i) => {
//               return (
//                 <div key={i}>
//                   <h1>
//                     {monster.name}
//                   </h1>
//                 </div>
//               )
//             })
//         } */}

//         <SearchBox className="search-box" onChangeHandler={onSearchChange } placeholder ="Search monsters"></SearchBox>
//         <CardList monsters={filteredMonster} />
//       </div>
//     );
//   }
// }
export default App;
