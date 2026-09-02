import Dashboard from "./components/Dashboard.jsx";


function App({ darkMode, setDarkMode }) {

  return (
    <Dashboard
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
  );

}


export default App;