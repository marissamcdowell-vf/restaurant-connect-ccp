import React, { useEffect } from 'react';
import "amazon-connect-streams"; // This will make the `connect` variable available in the current context.
import "amazon-connect-chatjs";
import { Grid } from 'semantic-ui-react';
import useGlobal from '../store'; // use-global-state > https://www.npmjs.com/package/use-global-state


const Ccp = () => {

    const [globalState, globalActions] = useGlobal(); // use-global-state > https://www.npmjs.com/package/use-global-state


    useEffect(() => {

        const connectUrl = "https://restaurant-connect.my.connect.aws/connect";
        window.connect.agentApp.initApp(
            "ccp",
            "ccp-container",
            connectUrl + "/ccp-v2/", {}
        );
        window.connect.agentApp.initApp(
            "customerprofiles",
            "customerprofiles-container",
            connectUrl + "/customerprofiles/", {}
        );
        /*window.connect.agentApp.initApp(
            "wisdom",
            "wisdom-container",
            connectUrl + "/wisdom/", { style: "width:400px; height:600px;" }
        );*/

    }, []);


    return (
        <main>
          <Grid columns='equal' stackable padded>
            <Grid.Column width={5}>
            <div id="ccp-container"></div>
            </Grid.Column>
            <Grid.Column width={5}>
            <div id="customerprofiles-container"></div>
            </Grid.Column>
            <Grid.Column>
            {/*<div id="wisdom-container"></div>*/}
            </Grid.Column>
          </Grid>
          
          
    </main>
    );
};

export default Ccp;
