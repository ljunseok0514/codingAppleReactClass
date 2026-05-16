/* eslint-disable */
import { useState } from 'react'
import './App.css'

function App() {
  let post = '강남우동맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천','맛집추천','여자 옷 추천']);
  let [따봉, 따봉변경] = useState(0);  
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button onClick={() => {
          let copy = [...글제목];
          copy[0] ='여자코트 추천';
          copy.sort();
          // 글제목[0] = '여자코트 추천';
          글제목변경(copy);
        }}>
          글수정
      </button>
      <div className="list">
        
        <h4>{글제목[0]} <span onClick={()=> {따봉변경(따봉+1)}}>👍</span> {따봉}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <Modal></Modal>
      <Test></Test>
    </div>
  )
}

function Modal(){
      return(
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      )
}
function Test(){
  return(
    <h2>테스트입니다</h2>
  )
}

export default App
