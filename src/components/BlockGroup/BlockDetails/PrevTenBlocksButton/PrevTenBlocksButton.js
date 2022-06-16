import React from 'react';
import {Button} from "@mui/material";
import './styles.scss'

const PrevTenBLocksButton = ({classname, action}) => {
    return (
        <Button className={`${classname}`} variant="contained" onClick={action}>
            Prev 10 blocks
        </Button>
    );
};

export default PrevTenBLocksButton;
