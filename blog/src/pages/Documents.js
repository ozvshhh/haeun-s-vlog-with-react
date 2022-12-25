import { useState } from "react";
import data from "/git_hub/haeun-s-vlog-with-react/blog/src/data/data.js";
import document_data from "../data/data";


function Documents () {

  let [docsel,setDocsel] = useState('');
  let [data] = useState(document_data);
  let [counter,setCounter] = useState (0);

    return(
    <>
    <div className='logoBox'>
      <div className='HTML' onClick={()=>{setDocsel('HTML');}}></div>
      <div className='CSS' onClick={()=>{setDocsel('CSS')}}></div>
      <div className='JavaScript' onClick={()=>{setDocsel('JavaScript')}}></div>
      <div className='React' onClick={()=>{setDocsel('React')}}></div>
      <div className='Python' onClick={()=>{setDocsel('Python')}}></div>
    </div>
    {docsel === '' ? <></> : <Viewport docsel={docsel}></Viewport> }
    </>
    )

    function Viewport (props) {
      let [selected,setSelected] = useState(0);
      

      return(
        <div className="viewport" style={{display:'flex'}}>
          <div className="list">
          {document_data.map((i, a)=>{
            return(<>
            <div className="inner_list" key={a} onClick={()=>{
              console.log(typeof(a), typeof(selected));
              setSelected(a);
              console.log({selected},typeof({selected}.selected));
            }}>{document_data[a].name}
            <div className="space"></div>
            <div>➕</div>
            <div>✏️</div>
            <div>❌</div>
            </div>
            </>
            )
          })}
          <div className="add_button">➕</div>
          </div>

          <div className="contentBox">

            {true ? 
            <div>{document_data[selected].content.map((i)=>{
              return(
                <div>{i}</div>
              )
            })}</div> : <>fuck</>}

            
          </div>
        </div>)}

        function Fixer () {

          return(
            <textarea name="hello my name is yeppi yeppi yo"></textarea>
          )

        }

  }


  export default Documents;

