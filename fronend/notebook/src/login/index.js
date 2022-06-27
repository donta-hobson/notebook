import styled from 'styled-components'
import {useState} from 'react'
const LoginComp = styled.form`
padding:5%;
display:flex;
flex-direction:column;
justify-content:center;

@media (min-width: 992px) { 
    /* flex-direction:row; */
    align-items: center;

 }

#loginTitle{
    font-size:2.3rem;
    @media (min-width: 992px) { 
        font-size:4rem;
     }

}


#inputCont{
    margin-top:14.3vh;
    .inputInner{
        display: flex;
        /* justify-content: center; */
        align-items: center;
        flex-direction: column;
        label{
            margin-top:1rem;
        }
        @media (min-width: 992px) {
            label{
                font-size: 1.6rem;

            }
        }

    }


    input{
        height:fit-content;
        width:90%;
        margin-top:5%;
        border-radius:.45rem;
        padding:.06rem;
        align-items:center;
        text-align:center;
        font-size:1.6rem;
        border:solid .2rem rgba(0,0,0,.04);
        box-shadow: 0rem 2.4rem .3rem -7.97rem rgba(0,0,0,.2);
        
       
        &:focus{
            outline:none;
            border:none;
            
        }
        @media (min-width: 768px) { 
        font-size: 2.2rem;
        }
        @media (min-width: 992px) {
            height:3.4rem;
        }
 

    }

    @media (min-width: 576px) {
        width:80%;
        margin:0 auto;
        margin-top:12vh;

        input{
        }

    }
    @media (min-width: 992px) {
        display: flex;
    }
    @media (min-width: 1200px) { 
        justify-content: center;
    }
    


}

#checkCont{
    margin-top:3.2vh;
    display:flex;
    align-items:center;
    border-bottom:solid black 1px;
    width:fit-content;
    margin-bottom:1.6rem;
    font-size:1rem;
    input{
        margin-left:.4rem;
        
    }
    @media (min-width: 768px) { 
        font-size: 1.6rem;
    }
    @media (min-width: 992px) {
        font-size: 2rem;
        input{
            width:2rem;
            height:1.4rem;
        }
    }
}


#loginBtn{
    width:60%;
    align-self:center;
    height:fit-content;
    padding:.5rem 0;
    border-radius:.43rem;
    border:solid white .15rem;
    background:#4D9900;
    color:white;
    font-size:1.2rem;
    margin-top:2rem;
    @media (min-width: 576px) {
        width:52%;
        height:4rem;
    }
    @media (min-width: 768px) { 
        font-size:1.7rem;
    }
    @media (min-width: 992px) {
        font-size: 2rem;
        height:5rem;
    }
    @media (min-width: 1200px) { 
        width:28%
    }

}

 
`


function Login (){
    const [user,setUser ] = useState({username:'',password:'',remember:false})

    const loginBtn = (e)=>{
        e.preventDefault()
        console.log(user)
    
    
    }
    const inputUpdate = (e)=>{
        let name = e.target.name
        const value = e.target.value
        setUser({...user, [name] : value})

    }
    return <LoginComp onSubmit={loginBtn}>
    <h3 id='loginTitle'>My Notebook</h3>
    <div id='inputCont'>
    <div className='inputInner'>
    <input 
        type={'text'} 
        placeholder=''
        name='username'
        value={user.username}
        onChange={inputUpdate}
        />
        <label>Username</label>

    </div>
    <div className='inputInner'>
    <input 
        type='password'
        name='password'
        value={user.password}


         placeholder=''
        onChange={inputUpdate}

        />
        <label>Password</label>

    </div>

        
    </div>
    
        <div id='checkCont'>
            <label>Save Login</label>
        <input type={'checkbox'} onChange={()=>{
            setUser({...user,remember:!user.remember})
        }} name="remember" value={user.remember}/>
        </div>


        <button id='loginBtn' onClick={loginBtn}>Login</button>

  </LoginComp>
    

}

export default Login



