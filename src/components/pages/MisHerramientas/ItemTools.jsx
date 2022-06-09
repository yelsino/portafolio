import { IconCheck } from "../../Atoms/Icons";

const ItemTools = ({ item }) => {
    return ( 
        <div className="flex gap-x-2 overflow-hidden">
            <span className="text-color_blue1 translate-y-1">
              <IconCheck />
            </span>
            <div>
              <p className="flex">
                {" "}
                <span className="font-bold">{item.herramienta}</span>{" "}
              </p>
              <p className="text-sm text-color_purple3 ">{item.nivel}</p>
            </div>
          </div>
     );
}
 
export default ItemTools;