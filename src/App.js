import React from 'react';
import Layout from "./hoc/Layout/Layout";

function App() {
  return (
    <Layout>


      <div style={{
        width: 400,
        border: '1px solid red',
        margin: '0 auto',
        textAlign: 'center'
      }}>
      <h1>Hello MyApp</h1>
      </div>
    </Layout>
  );
}

export default App;
