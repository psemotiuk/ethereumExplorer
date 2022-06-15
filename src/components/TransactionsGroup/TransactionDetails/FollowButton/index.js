import React from 'react';
import {Button} from "@mui/material";

const FollowButton = ({action}) => {
    return (
        <Button variant="outlined" onClick={action}>
            Follow
        </Button>
    );
};

export default FollowButton;
