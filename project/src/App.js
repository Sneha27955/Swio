import logo from './logo.svg';
import './App.css';
import SleeveComponent from './components/sleevecomponent';
import BodyComponent from './components/BodyComponent';
import CustomizationSection from './components/CustomizationSection';
import Form from './components/Form';
import ArtworkComponent from './components/ArtworkComponent';
import TypographyComponent from './components/TypographyComponent';
import InterfaceComponent from './components/InterfaceComponent';
import SettingComponent from './components/SettingComponent';
import HeadingComponent from './components/HeadingComponent';

function App() {
  return (
    <div className="App">
      <SleeveComponent/>
    <BodyComponent/>
    <CustomizationSection/>
    <Form/>
    <ArtworkComponent/>
    <TypographyComponent/>
    <InterfaceComponent/>
    <SettingComponent/>
    <HeadingComponent/>
      
    </div>
  );
}

export default App;
