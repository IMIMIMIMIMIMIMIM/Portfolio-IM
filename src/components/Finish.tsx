const Finish = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center">
        <h1 className="text-3xl md:text-6xl">Thank You For Watching</h1>
      </div>
      <footer className="p-4 bg-gray-800 text-white w-screen text-end font-pretendard">
        <p>&copy; {new Date().getFullYear()} frontend developer portfolio</p>
        <p>designed by IM</p>
      </footer>
    </div>
  );
};

export default Finish;
