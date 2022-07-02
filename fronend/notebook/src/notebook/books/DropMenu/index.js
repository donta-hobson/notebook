
import styled from "styled-components"


const Drop = styled.div`
background-color: lightgray;
position: absolute;
width:8rem;
/* bottom:.02rem; */
top:1.2rem;
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
@media (min-width: 768px) { 
    label{
        font-size:1.2
    }
    
 }

@media (min-width: 992px) { 
    width:12rem;
    padding-left:2rem;
    top:2rem;
    label{
        font-size: 1.3rem;
    }

}
@media (min-width: 1917px) { 
    width:16rem;
    label{
        font-size: 1.8;
    }
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
@media (min-width: 768px) { 
    font-size: 1.6;
}
@media (min-width: 992px) { 
    font-size: 1.45rem;
    
}
@media (min-width: 1920px) { 
    font-size: 2rem;
}

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