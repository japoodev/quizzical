const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="max-w-7xl flex justify-between mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-white">
          &copy; {new Date().getFullYear()} Quizzical.
        </p>
        <p className="text-sm text-white">Made with ❤️ by Japoo.</p>
      </div>
    </footer>
  );
};

export default Footer;
