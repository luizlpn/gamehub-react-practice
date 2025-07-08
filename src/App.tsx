import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Belo Horizonte", "Nova Lima", "Entre Rios"];

  const [alertVisible, setAlertVisible] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleClickButton = () => {
    setAlertVisible(true);
  };
  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
      <div>
        {alertVisible && (
          <Alert color="success" onClose={()=>setAlertVisible(false)}>
            Hello <span>world</span>
          </Alert>
        )}
      </div>
      <div>
        <Button onClick={handleClickButton} color="success">
          clique
        </Button>
      </div>
    </>
  );
}

export default App;
