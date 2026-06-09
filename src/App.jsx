/* eslint-disable */
import { useState } from 'react'
import './App.css'

function App() {
  let post = '강남우동맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천','맛집추천','여자 옷 추천']);
  let [따봉, 따봉변경] = useState([0,2,3]);  
  let [modal, setModal] = useState(true);
  let [모달제목, 모달제목변경] = useState('모달제목')
  let [입력값, 입력값변경] = useState()

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {/* <button onClick={() => {
          let copy = [...글제목];
          copy[0] ='여자코트 추천';
          copy.sort();
          글제목변경(copy);
        }}>
          글수정
      </button> */}
      {
         글제목.map(function(a,i){
            return(
                <div className="list" key={i}>
                    <h4 onClick={()=>{
                      모달제목변경(글제목[i]);

                    }}>
                        {글제목[i]}
                        <span onClick={()=>{
                            let copy = [...따봉];
                            copy[i] += 1
                            따봉변경(copy)
                            }}>👍</span>{따봉[i]}
                    </h4>
                    <button onClick={()=>{
                        let copy = [...글제목];
                        // copy[i] = '';
                        copy.splice(i,1)
                        console.log(copy)
                        글제목변경(copy)
                    }}
                    >삭제</button>
                    <p>2월 17일 발행</p>
                </div>
            )
         })
      }
      <input type="text" onChange={(e)=>{
        입력값변경(e.target.value);
        console.log(입력값)
      }} />
      <button onClick={()=>{
        let copy = [...글제목]
        copy[0] = 입력값
        글제목변경(copy)
      }}>글추가</button>
      {
        modal == true ? <Modal color={'yellow'} 모달제목={모달제목} 모달제목변경={모달제목변경} 글제목={글제목} 글제목변경={글제목변경}/> : null
      }
    </div>
  )
}

function Modal(props){
      return(
      <div className="modal" style={{background: props.color}}>
        <h4>{props.모달제목}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={() => {
          let copy = [...props.글제목]
          copy[0] ='여자코트 추천';
          // console.log(props.글제목변경(copy))
          props.글제목변경(copy);
        }}>글수정</button>
      </div>
      )
}

export default App
