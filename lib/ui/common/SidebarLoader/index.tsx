const SidebarLoader = () => {
  return (
    <div className="absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0">
      <div className="h-8 w-2/3 bg-white-300 mb-4 animate-pulse"></div>
      <div className="h-4 w-1/2 bg-white-300 mb-2 animate-pulse"></div>
      <div className="h-4 w-3/4 bg-white-300 mb-2 animate-pulse"></div>
      <div className="h-4 w-2/3 bg-white-300 mb-2 animate-pulse"></div>
      {/* Add more skeleton elements as needed */}
    </div>
  );
};

export default SidebarLoader;
