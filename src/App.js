import BgAnimated from "./components/BgAnimated";
import Layout from "./components/Layout";
import WelcomeTItle from "./components/WelcomeTItle";
import MyStacks from "./components/MyStacks";
import SomeProjects from "./components/SomeProjects";

function App() {
  return (
    <div className="App">
 
        <Layout>
        <WelcomeTItle/>
        <MyStacks/>
     <SomeProjects></SomeProjects>
        </Layout>
        <BgAnimated/>


    </div>
  );
}

export default App;
