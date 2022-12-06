const Header = () => {
  return (
    <header className="bg-primary">
      <div className="max-w-7xl flex items-center justify-between mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-secondary">Quizzical</h1>
        <a className="font-semibold bg-white p-2 rounded-md" target={"_blank"} href="https://github.com/japoodev/quizzical">
          GitHub
        </a>
      </div>
    </header>
  );
};

export default Header;
