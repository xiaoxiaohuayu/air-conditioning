import { useState, useRef, useCallback } from "react";

import Panel from "./component/Panel";
import Copywriting from "./component/Copywriting";
import Button from "./component/Button";
import Audio from "./component/Audio";

const App = () => {
  const ref = useRef();
  const [temp, setTemp] = useState(26);
  const up = useCallback(() => {
    const result = temp + 1;
    ref.current.playTip();
    if (result > 31) {
      return false;
    }
    setTemp(result);
  }, [temp]);
  const down = useCallback(() => {
    const result = temp - 1;
    ref.current.playTip();
    if (result < 16) {
      return false;
    }
    setTemp(result);
  }, [temp]);
  const toSwitch = useCallback(() => {
    ref.current.playTip();
    ref.current.playRun();
  }, [temp]);

  return (
    <>
      <section className="title">
        <h1 style={{ fontWeight: 400 }}>夏日空调</h1>
      </section>
      <section className="panel">
        <Panel temp={temp} />
      </section>
      <section className="copywriting">
        <Copywriting />
      </section>
      <section className="button">
        <Button up={up} down={down} toSwitch={toSwitch} />
      </section>
      <section style={{ display: "none" }}>
        <Audio ref={ref} />
      </section>
    </>
  );
};

export default App;
