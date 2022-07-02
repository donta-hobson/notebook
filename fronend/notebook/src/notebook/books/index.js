import styled from 'styled-components'
import {ReactComponent as Dots} from './dots.svg'
import DropMenu from './DropMenu'
import { useState,useRef } from 'react'
import { useEffect } from 'react'
const Box = styled.div`
width: 40%;
border:solid black .1rem;
height:17vh;
padding:.2rem;
border-radius: .6rem  ;
margin-bottom: 1.5rem;
display: flex;
flex-direction: column;
@media (min-width: 768px) { 
    width:30%
}
@media (min-width: 1200px) { 
    margin-bottom:1.4rem ;
    height:30vh;
    width:28%;
}


.notebookTitle{
    font-size: 1rem;
    text-align: center;
    text-transform: capitalize;
    @media (min-width: 768px) { 
        font-size: 1.5rem;
    }
    @media (min-width: 992px) {
        font-size: 1.8rem;
     }
     @media (min-width: 1200px) { 
        font-size: 2rem;
     }
     @media (min-width: 1400px) { 
        font-size:2rem;
      }
     @media (min-width: 2400px) { 
        font-size:3rem;
      }

}

.textPrev{
    height:90%;

    /* background-color: blue; */
    @media (min-width: 768px) { 
    }
    @media (min-width: 992px) { 
        height: 77%;
     }
     @media (min-width: 1400px) { 
        height:75%;
      }

    
}

#boxMenuCont{
   /* height:1.2rem; */
   position:relative;
   /* top:-.2rem; */
   background-color: transparent;
 

    
.dots{
    width:1rem;
    /* stroke:white; */
    fill:gray;
    @media (min-width: 768px) { 
    height:1.2rem;
    width:3rem;
   }
   @media (min-width: 992px) { 
    height:2rem;
    width:4rem;

   }
   @media (min-width: 2400px) { 
        height:3.4rem;
        width:5rem;
      }


    
}


}


`
function Books (props){
    // States
    const [DropShow,setDropShow] = useState(false)
    const ref = useRef()

    /*------------------------------- */

    // Functions
    const handleClickOutside = (e) => {
        if (ref.current && ref.current.contains(e.target)) {
          // inside click
          return;
        }
        setDropShow(false)
      };
    /*------------------------------- */


      document.addEventListener('click',handleClickOutside)


    return <Box ref={ref}>
        <h3 className='notebookTitle'>{props.title}</h3>
        
        <span className="titleDivider"></span>

        <div className='textPrev'>

        </div>
        
        
        <div id='boxMenuCont'>

        <div className='notebookMenuCont'>
        <Dots className='dots' onClick={()=>setDropShow(!DropShow)}/>
        {
            DropShow ? <DropMenu notebook={props.title} close={setDropShow}/> : null
        }
        </div>


        </div>

        
    </Box>
}

export default Books  