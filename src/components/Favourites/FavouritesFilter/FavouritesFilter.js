import React from 'react';
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import './styles.scss'


const FavouritesFilter = ({filters, setFilters}) => {
    const onChange = (e) => {
        setFilters((prevState) => ({...prevState, [e.target.name]: e.target.checked}))
    }
    return (
        <div className={'favouritesFilter__container'}>
            <FormGroup className={'favouritesFilter__formGroup'}>
                <FormControlLabel name="blocks" onChange={onChange}
                                  control={<Checkbox defaultChecked/>}
                                  label="Blocks"/>
                <FormControlLabel name="transactions" onChange={onChange}
                                  className={'favouritesFilter__formControlLabel'} control={<Checkbox defaultChecked/>}
                                  label="Transaction"/>
            </FormGroup>
        </div>
    );
};

export default FavouritesFilter;
