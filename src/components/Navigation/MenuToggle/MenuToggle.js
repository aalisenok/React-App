import React from "react";
import classes from './MenuToggle.module.css'

const MenuToggle = pros => {
    const cls = [
        classes.MenuToggle,
        'fa'

    ];

    if (pros.isOpen) {
        cls.push('fa-times')
        cls.push(classes.open)
    } else {
        cls.push('fa-bars')
    }

    return (
        <i
            className={cls.join(' ')}
            onClick={pros.onToggle}
        />
    )
};

export default MenuToggle