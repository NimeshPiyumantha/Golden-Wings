import signUp_bg from "../../assets/img/signUp-bg.jpg";

export default function Register() {
  return (
    <div className="min-w-screen min-h-screen bg-accent-white-200 flex items-center justify-center px-5 py-5">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-4/5 overflow-hidden max-width:1000px">
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2 bg-indigo-500 shadow-lg">
            <img src={signUp_bg} className="w-full h-full"></img>
          </div>
        
        </div>
      </div>
    </div>
  );
}
