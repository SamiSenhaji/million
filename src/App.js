import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="col-sm-12">
     <div>
 <h1 className="text-center text-warning">Time Entries</h1>
 </div>
 <form>
    <div className="col-sm-6 mt-4">
      <label for="exampleInputEmail1" className="form-label mt-4">Email address</label>
      <div className="text-center col-sm-6 ">
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
    </div>
    <div className="col-sm-6 mt-4">
      <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
      <div className="text-center col-sm-6">
      <input type="password" className="form-control " id="exampleInputPassword1" placeholder="Password" />
    </div>
     </div>
     <div className="col-sm-4 mt-4 text-center">
      <button type="submit" className="btn btn-warning">Sign in</button>
      </div>

</form>
    </div>
  );
}

export default App;
