import Button from "./Button";

const buttons = [
  7,
  8,
  9,
  "DEL",
  4,
  5,
  6,
  "+",
  1,
  2,
  3,
  "-",
  ".",
  0,
  "/",
  "*",
  "RESET",
  "=",
];
function App() {
  return (
    <div>
      <div className="bg-mainBackground h-screen flex flex-col space-y-3 p-4 justify-center items-center">
        <div className=" min-w-[600px]">
          <div className="flex justify-between w-full bg-orange-500 py-3 mb-2">
            <h1 className=" text-whiteText font-bold text-2xl font-sans">
              Calc
            </h1>
            <div className="flex w-32 items-center bg-green-500 justify-between">
              <h3 className=" text-xs text-white uppercase font-sans">Theme</h3>
              <input type="checkbox" />
            </div>
          </div>
          <div className="flex justify-end bg-screenBackground py-7 rounded-lg text-3xl font-bold text-white px-3 mb-2">
            <h1 className="font-sans">455,981</h1>
          </div>
          <div className=" grid py-5 rounded-xl grid-cols-4 grid-rows-5 gap-5 bg-yellow-600 p-3">
            {buttons.map((button) => (
              <Button button={button} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
