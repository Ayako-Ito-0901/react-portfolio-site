import './App.css';
//Headerコンポーネントをimportする
import { Header } from './components/Header';
//Skillsコンポーネントをimportする
import { Skills } from './components/Skills';
//Contactコンポーネントをimportする
import { Contact } from './components/Contact';

function App() {
  return (
    <> {/* ReactFragment */}
      <Header />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
