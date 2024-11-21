const Loader = () => {
  return (
    <div className="relative">
      <div className="w-[200px] h-[200px] rounded-full border-[#007bff] border-x-[10px] border-y-0 animate-spin"></div>
      <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#007bff] whitespace-nowrap">
        Loading converter...
      </p>
    </div>
  );
};

export default Loader;
