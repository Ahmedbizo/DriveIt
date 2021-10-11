import React from "react";
import { Appbar, Menu } from "react-native-paper";


export const HeaderComponent = (props: HeaderComponentParams) => { 

    return( 
         
        <Appbar>
            {
                props.hasBackButton? 
                <Appbar.BackAction/>
                : 
                <Menu 
                visible={true}
                onDismiss={() => {}}
                anchor={
                    <Appbar.Action
                    icon="menu"/>
                }>

                </Menu>
            }
            
            <Appbar.Content title={props.title}/>
    </Appbar>

    );
}

interface HeaderComponentParams {

    hasBackButton? : boolean;
    title: string;
}