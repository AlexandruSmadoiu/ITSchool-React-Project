import { InputField } from './components/InputField/InputField';
import { Button} from './components/Buttons/Button';
function App() {
  return (
    <div>
      <Button onClick={() => {console.log("Hello")}}
      type="button"
      buttonStyleSolid="button--danger--outline"
      buttonSize="button--small"
    
      >Hello world</Button>
    </div>    
  );
}

export default App;
