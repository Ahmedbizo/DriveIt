import React from "react";
import { Appbar } from "react-native-paper";


export const HeaderComponent = (props: HeaderComponentParams) => { 

    return( 
         
        <Appbar>
            {
                props.hasBackButton? 
                <Appbar.BackAction/>
                : null
            }
            
            <Appbar.Content title={props.title}/>
    </Appbar>

    );
}

interface HeaderComponentParams {

    hasBackButton? : boolean;
    title: string;
}