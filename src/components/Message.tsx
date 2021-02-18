// @flow
import * as React from 'react';
import {Typography} from "@material-ui/core";

type Props = {
    id:number
    message:string
};

export const Message = ({message,id}: Props) => {
    return (
        <div>
            <Typography variant={"subtitle1"}>
                {message}
            </Typography>
        </div>
    );
};
