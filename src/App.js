import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/containers/task_list';
import ContactList from './components/containers/contact_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente de Listado de Tareas */}
        <TaskListComponent></TaskListComponent>
        <ContactList></ContactList>
      </header>
    </div>
  );
}

export default App;
