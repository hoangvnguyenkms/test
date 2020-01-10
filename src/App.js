import React from 'react';
import Grid from "@material-ui/core/Grid";
import { SideBar } from './commons/layouts/Sidebar';
import { MainLayout } from './commons/layouts/MainLayout';
import CustomizedTables from './commons/components/Table/Table';

function App() {
  return (
    <MainLayout>      
      <Grid container spacing={0}>
        <Grid item md={4} xs={12}>
          <SideBar />
        </Grid>
        <Grid item md={8} xs={12}>
          <div>
            <CustomizedTables />
          </div>
        </Grid>
      </Grid>
    </MainLayout>
  );
}

export default App;
