const App = () => {
  return (
    <>
      <div className="grid place-items-center h-screen">
        <div className="relative px-10 py-8 bg-[#00746D] max-w-[540px] w-full min-h-[540px] border-2 rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col justify-between h-[120px] items-end text-white font-bold">
            <div className="text-4xl">1234*34+555</div>
            <div className="text-3xl font-medium text-[#A8A8A8]">= 42,511</div>
          </div>
          <div className="absolute overflow-hidden py-4 pl-12 bg-[#D9D9D9] bottom-6 inset-x-0 rounded-[40px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] w-[94%] mx-auto h-[351px] border-2 border-black flex justify-between">
            
            <div className="grid grid-cols-3 gap-2 w-[70%]">
              <div className="button-digits mb-4">1</div>
              <div className="button-digits">1</div>
              <div className="button-digits">1</div>
              <div className="button-digits">1</div>
              <div className="button-digits">1</div>
              <div className="button-digits">1</div>
              <div className="button-digits">1</div>
              <div className="button-digits">1</div>
              <div className="button-digits">1</div>
              <div className="button-digits">1</div>
              <div className="button-digits">1</div>
              <div className="button-digits">1</div>
              <div className="button-digits">1</div>
              <div className="button-digits">1</div>
              <div className="button-digits">1</div>
            </div>
            <div className="absolute right-0 top-0 min-h-full py-4 rounded-[40px] grid grid-cols-1 px-6 gap-2 bg-[rgba(28,129,158,0.3)]">
              <div className="mb-4 button-digits w-[86px]">1</div>
              <div className="button-digits w-[86px]">1</div>
              <div className="button-digits w-[86px]">1</div>
              <div className="button-digits w-[86px]">1</div>
              <div className="button-digits w-[86px]">1</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
