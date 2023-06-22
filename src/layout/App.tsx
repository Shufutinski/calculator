const App = () => {
  return (
    <>
      <div className="inline-flex flex-wrap justify-center content-center w-screen h-screen">
        <div className="bg-white inline-flex flex-wrap content-end w-1/3 h-2/3 border-2 border-zone rounded-3xl shadow-2xl">
          <div className="inline-flex flex-wrap justify-around content-around w-2/3 h-2/3 border-t border-zone">
            <div className="button-digits w-1/4 h-1/5 m-1">1</div>
            <div className="button-digits w-1/4 h-1/5 m-1">2</div>
            <div className="button-digits w-1/4 h-1/5 m-1">3</div>
            <div className="button-digits w-1/4 h-1/5 m-1">4</div>
            <div className="button-digits w-1/4 h-1/5 m-1">5</div>
            <div className="button-digits w-1/4 h-1/5 m-1">6</div>
            <div className="button-digits w-1/4 h-1/5 m-1">7</div>
            <div className="button-digits w-1/4 h-1/5 m-1">8</div>
            <div className="button-digits w-1/4 h-1/5 m-1">9</div>
            <div className="button-digits w-1/4 h-1/5 m-1">000</div>
            <div className="button-digits w-1/4 h-1/5 m-1">0</div>
            <div className="button-digits w-1/4 h-1/5 m-1">.</div>
          </div>
          <div className="inline-flex flex-col justify-around content-center items-center w-1/3 h-2/3 border-t border-zone ">
            <div className="button-digits w-2/5 h-1/5">*</div>
            <div className="button-digits w-2/5 h-1/5">/</div>
            <div className="button-digits w-2/5 h-1/5">-</div>
            <div className="button-digits w-2/5 h-1/5">+</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
