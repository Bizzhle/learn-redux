import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {
  const { account } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  console.log(account);
  return (
    <div className="App">
      <h1>Learn Redux</h1>

      <h2>{account}</h2>
      <div>
        <button onClick={() => depositMoney(1000)}>deposit</button>
        <button onClick={() => withdrawMoney(500)}>withdraw</button>
      </div>
    </div>
  );
}

export default App;
