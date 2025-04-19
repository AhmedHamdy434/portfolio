import NavBar from "./NavBar";
const Header = async () => {
  return (
    <div className="bg-main fixed w-screen z-10">
      <div className="container h-[80px] flex justify-between items-center">
        <div className="logo">
          <h1 className="text-[22px] font-bold">Portfolio</h1>
        </div>
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
