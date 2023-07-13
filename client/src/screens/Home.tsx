export const Home = () => {
  return (
    <div className="">
      <div className="">
        <div>
          <h3 className="font-bold">Base Email</h3>
        </div>
        <div>
          <form className="flex flex-col gap-3">
            <label></label>
            <input className="w-1/2 bg-[#F5F5F5] rounded-3xl" type="text" />
            <label></label>
            <input className="w-1/2 bg-[#F5F5F5] rounded-3xl" type="text" />
          </form>
        </div>
        <div className="mx-5">
          <button className="bg-[#3BDBBE] w-1/3 rounded-3xl">Enviar</button>
        </div>
      </div>
      <div className="flex flex-row bg-slate-300">
        <div className="flex flex-col gap-3">
          <h3>Email</h3>
          <input className=" bg-[#F5F5F5] rounded-3xl" type="text" />
          <input className=" bg-[#F5F5F5] rounded-3xl" type="text" />
          <input className=" bg-[#F5F5F5] rounded-3xl" type="text" />
          <input className=" bg-[#F5F5F5] rounded-3xl" type="text" />
        </div>
        <div className="flex flex-col gap-3">
          <h3>Nombre</h3>
          <input className=" bg-[#F5F5F5] rounded-3xl" type="text" />
          <input className=" bg-[#F5F5F5] rounded-3xl" type="text" />
          <input className=" bg-[#F5F5F5] rounded-3xl" type="text" />
          <input className=" bg-[#F5F5F5] rounded-3xl" type="text" />
        </div>
        <div className="flex flex-col gap-3">
          <h3>Puesto</h3>
          <input className=" bg-[#F5F5F5] rounded-3xl" type="text" />
          <input className=" bg-[#F5F5F5] rounded-3xl" type="text" />
          <input className=" bg-[#F5F5F5] rounded-3xl" type="text" />
          <input className=" bg-[#F5F5F5] rounded-3xl" type="text" />
        </div>
        <div className="flex flex-col gap-3">
          <h3>Curriculum</h3>
          <input className=" bg-[#F5F5F5] rounded-3xl" type="text" />
          <input className=" bg-[#F5F5F5] rounded-3xl" type="text" />
          <input className=" bg-[#F5F5F5] rounded-3xl" type="text" />
          <input className=" bg-[#F5F5F5] rounded-3xl" type="text" />
        </div>
      </div>
    </div>
  );
};
