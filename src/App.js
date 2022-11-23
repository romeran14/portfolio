import BgAnimated from "./components/BgAnimated";
import Layout from "./components/Layout";
import WelcomeTItle from "./components/WelcomeTItle";
import MyStacks from "./components/MyStacks";
import SomeProjects from "./components/SomeProjects";
import AboutMe from "./components/AboutMe";
import Presence from "./components/Presence";

function App() {
  return (
    <div className="App">
 
        <Layout>
        <WelcomeTItle/>
        <MyStacks/>
        <Presence> <SomeProjects></SomeProjects></Presence>
        <Presence><AboutMe></AboutMe></Presence>
     
        </Layout>
        <BgAnimated/>


    </div>
  );
}

export default App;
