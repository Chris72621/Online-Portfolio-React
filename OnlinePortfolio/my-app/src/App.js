import './App.css';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';

function App() {
  return (
    <FluentProvider theme={teamsLightTheme}>
      <div className="App">
        <header className="App-header">
          Text
        </header>
      </div>
    </FluentProvider>
  );
}

export default App;
