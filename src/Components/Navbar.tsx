import { HiVideoCamera } from "react-icons/hi2";

function Navbar() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap  p-3 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center  text-gray-900 mb-2 md:mb-0">
          <div
            style={{
              background: "#6366f1",
              borderRadius: "50%",
              padding: "12px",
            }}
          >
            <HiVideoCamera color="white" fontSize={"1rem"}  />
          </div>
          <span className="ml-3 text-xl">Entertainment is here for you !!!</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
      </div>
    </header>
  );
}

export default Navbar;
