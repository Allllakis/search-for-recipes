import React from 'react';
import classes from './Dropdown.module.css';



const Dropdown = ({items, active}) => {
// const [open, setOpen] = useState(false);

return (
    <div className={classes.menu}>
        {items.map(item => {
            
            return (
                
                <h2 key={item.id}>{item.name}</h2>
            
            )
           
        })}
    </div>
)
    

}  





export default Dropdown;