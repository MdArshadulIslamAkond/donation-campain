const Banner = () => {
  return (
    <div>
      <h2 className="text-5xl font-bold mb-10">I Grow By Helping People In Need</h2>
      <label className="input input-bordered flex items-center gap-2 pe-0 w-1/3 mx-auto">
        <input type="search" className="grow" placeholder="Search" />
        <button type="submit" className="bg-[#FF444A] h-full w-1/4 rounded-r-lg text-white ">Search</button>
      </label>
     
    </div>
  );
};

export default Banner;
