import React from "react";
import Container from "@material-ui/core/Container";
import ResultTable from "../../components/ResultTable/result-table.component";
import AddLinkBar from "../../components/AddLinkBar/addlinkbar.component";
export default function homePage() {
 return (
  <React.Fragment>
   <Container>
    <AddLinkBar />
    <ResultTable />
   </Container>
  </React.Fragment>
 );
}
