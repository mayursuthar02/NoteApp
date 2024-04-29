import { useState } from 'react';
import {HiOutlineColorSwatch} from 'react-icons/hi';

const ChoiceColor = () => {
    const [toggle, setToggle] = useState(fal)

    const handleColorsPlate = () => {
        setToggle(true)
    }
    
  return (
    <div className='choiceColorSection'>


        <div className={toggle == false ? 'colorPlate' : 'colorPlate-active'}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <button className="btn btnToggle" onClick={handleColorsPlate}><HiOutlineColorSwatch/></button>
    </div>
  )
}

export default ChoiceColor