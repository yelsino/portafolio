import ItemTools from "./ItemTools";

const Tools = ({tools, title}) => {
    return ( 
        <div className="bg-color_purple2 px-5 py-10 w-full sm:w-1/2 rounded-xl flex flex-col items-center ">
        <p className="text-center text-2xl pb-7">{title}</p>
        <div className="grid grid-cols-2 text-lg gap-10">
          {tools.map((item, index)=>(
          <ItemTools key={index} item={item}/>
          ))}
        </div>
      </div>
     );
}
 
export default Tools;