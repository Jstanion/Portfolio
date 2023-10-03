export default function Project() {
  return (
    <>
      <div className="flex flex-col w-full items-center">
        <h1 className="border-y border-ltGray text-4xl text-ltGray py-5">
          PROJECTS
        </h1>
        <div className="flex justify-evenly items-start text-ltGray text-xl w-full pt-10">
          <button className="hover:text-blue">ALL</button>
          <button className="hover:text-blue">JAVASCRIPT</button>
          <button className="hover:text-blue">REACT JS</button>
          <button className="hover:text-blue">NEXT JS</button>
        </div>
      </div>
    </>
  );
}
