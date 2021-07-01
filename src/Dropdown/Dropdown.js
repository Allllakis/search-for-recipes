import React, {useState} from 'react';
import classes from './Dropdown.module.css';



const Dropdown = ({items}) => {
const [open, setOpen] = useState(false);

return (
    <div className={classes.menu}>
        {items.map(item => {
            <h2 >{item.name}</h2>
            console.log(item.name)
        })}
    </div>
)
    

}  





export default Dropdown;