import styled from 'styled-components'
import Books from './books'
import {useState,useEffect} from 'react'

const HomeScreen = styled.div`
overflow: scroll;
height: 100vh;
#mapCont{
    display: flex;
    /* flex-direction: column; */
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    /* align-content:space-between; */
    margin-top:1.2rem;
    /* background-color: blue; */
    padding-top:.5rem;
}

`
function Notebook (){
const initialNoteBook = {title:'my_notebook',created:""}
const [notebooks,setNotebooks] = useState([
    initialNoteBook,
    initialNoteBook,
    initialNoteBook,
    initialNoteBook,
    initialNoteBook,
    initialNoteBook,
    initialNoteBook,
    initialNoteBook,
    initialNoteBook,
    initialNoteBook,
])

return <HomeScreen>
    <h1>hello</h1>
    <div id='mapCont'>
    {
        notebooks.map(value =><Books {...value}/>)
    }

    </div>
    
</HomeScreen>
}
export default Notebook