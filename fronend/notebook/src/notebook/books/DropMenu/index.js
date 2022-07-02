
import styled from "styled-components"
const Drop = styled.div`
/* background-color: blue; */
position: absolute;
width:8rem;
/* bottom:.02rem; */
top:-0.06rem;
left:.2rem;
padding: 0.2rem;
padding-bottom: .6rem;
border-radius: .2rem;
label{
    cursor: pointer;
    background-color: transparent;
    width: 100%;
    border-bottom: solid .2rem lightgray;
    margin-bottom: .6rem;
}
`
const SelectionItem = styled.div`
background-color: transparent;
cursor: pointer;
margin-top:.4rem;
&:hover{
    background-color: darkgray;
    color:white
}
/* text-align: center; */

`
function DropMenu(props){
    

    return <Drop 
     >
        <label onClick={()=>props.close(false)}> Close</label>
        <SelectionItem>
            Change Title
        </SelectionItem>

        <SelectionItem>
            Delete Notebook
        </SelectionItem>


    </Drop>
}

export default DropMenu