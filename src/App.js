import "./App.css";
import AddTask from "./components/AddTask/AddTask";
import "bootstrap/dist/css/bootstrap.min.css";
import ListTask from "./components/ListTask/ListTask";

function App() {
  return (
    <div>
      <section class="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <AddTask />
              <ListTask />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
