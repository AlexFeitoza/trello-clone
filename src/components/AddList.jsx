import { useState } from "react"
import { Plus, X } from "react-feather"
import PropTypes from "prop-types"

const AddList = ({ getlist = () => {} }) => {

    const [list, setList] = useState('');
    const [show, setShow] = useState(false);

    const saveCard = ()=> {
        if(!list.trim()) return; 
        getlist(list);
        setList('');
        setShow(false);
    };

    const closeBtn = () => {
        setList('');
        setShow((prev)=> !prev);
    };

    return (
            <>
               <div className="flex flex-col h-fit flex-shrink-0 mr-3 w-60 rounded-md p-2 bg-black">
                   {show && <div>
                        <textarea value={list} onChange={(e)=>setList(e.target.value)} className="p-1 w-full rounded-md border-2 bg-zinc-700 border-zinc-900" name="" id="" cols={30} rows={2} placeholder="enter list title.."></textarea>
                        <div className="flex p-1">
                            <button onClick={()=>saveCard()} className="p-1 rounded bg-sky-600 text-white mr-2 ">Add Cartão</button>
                            <button onClick={()=> closeBtn()} className="p-1 rounded hover:bg-gray-600"><X size={16}></X></button>
                        </div>
                    </div>}
                    {!show && <button onClick={()=> setShow(!show)} className="flex p-1 w-full justify-center rounded items-center mt-1 hover:bg-gray-500 h-8">
                        <Plus size={16}></Plus> Add Card
                    </button>}
               </div>
            </>

    )
}

AddList.propTypes = {
    getlist: PropTypes.func.isRequired,
};

export default AddList;