
function App() {
  return (
    <div className="container">
      <div id='container-body'>
        <div id="title">
          <h2>Awesome Quiz Application</h2>
          <span>
            <h4 id='timeBox'>Time Left <span id='CountBox'>08</span></h4>
          </span>
        </div>
        <div id='question-container'>
          <h2>1. What does HTML stand for?</h2>
          <div>
            <h5 className='options'>Hyper Text MarkUp</h5>
            <h5 className='options'>Hyper Text Lang</h5>
            <h5 className='options'>Hyper Star Lang</h5>
            <h5 className='options'>Hyper Text Markup Language</h5>
          </div>
        </div>
        <div id='btn'>
          <button id='nextBtn'>
            Next
          </button>
        </div>
      </div>


    </div >
  );
}

export default App;
