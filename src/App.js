import BgAnimated from "./components/BgAnimated";
import Layout from "./components/Layout";
import WelcomeTItle from "./components/WelcomeTItle";
import MyStacks from "./components/MyStacks";
import SomeProjects from "./components/SomeProjects";
import AboutMe from "./components/AboutMe";
import Presence from "./components/Presence";
import ContactMe from "./components/ContactMe";
import Titles from "./components/Titles";

function App() {
  return (
    <div className="App">
 
        <Layout>
        <WelcomeTItle/>
        <Titles>My Stacks</Titles>
        <MyStacks/>
        <Titles>Click on me to Know More About Me</Titles>
        <Presence><AboutMe></AboutMe></Presence>
        <Titles titleproject={"titleproject"}>Some of my Projects</Titles>
        <Presence> <SomeProjects></SomeProjects></Presence>
        <Titles>Contact me</Titles>
        <Presence><ContactMe></ContactMe></Presence>
        </Layout>
        <BgAnimated/>


    </div>
  );
}

export default App;
