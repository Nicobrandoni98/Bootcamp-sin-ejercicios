// 1RA PARTE DE EJERCICIOS

// import Header from "./Header.js";
// import Content from "./Content.js";
// import Total from "./Total.js";

// const App = () => {

//   return <div>
//           {/* <Header/>
//           <Content />
//           <Total /> */}
//   </div>;
// };

// export default App;

// 2DA PARTE DE EJERCICIOS

/* import { useState } from "react";
import Statistics from "./Statistics.js";
import Buttons from "./Buttons.js";



const App = () => {
  const [statics, setStatics] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
    average: 0,
    positive: 0
  });
  const calculateAverage = (good, neutral, bad, all) => {
    const sumaPonderada = good * 1 + neutral * 0 + bad * -1;
    return all === 0 ? 0 : sumaPonderada / all;
  };

  const cliclGood = () => {
    const newStats = {
      ...statics,
      good: statics.good + 1,
      all: statics.all + 1,
      positive: (statics.good + 1) / (statics.all + 1),
      average: calculateAverage(statics.good + 1, statics.neutral, statics.bad, statics.all + 1)
    };
    setStatics(newStats);
  };
  const clickNeutral = () => {
    const newStats = {
      ...statics,
      neutral: statics.neutral + 1,
      all: statics.all + 1,
      average: calculateAverage(statics.good + 1, statics.neutral, statics.bad, statics.all + 1)
    };
    setStatics(newStats);
  };
  const clickBad = () => {
    const newStats = {
      ...statics,
      bad: statics.bad + 1,
      all: statics.all + 1,
      average: calculateAverage(statics.good + 1, statics.neutral, statics.bad, statics.all + 1)
    };
    setStatics(newStats);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Buttons onClick={cliclGood} text="Good"/>
      <Buttons onClick={clickNeutral} text="Neutral"/>
      <Buttons onClick={clickBad} text="Bad"/>

      <Statistics statics={statics}/>
    </div>
  );
};

export default App; */

// 3RA PARTE DE LOS EJERCICIOS

import useCounter from './useCounter'
import useField from './useField'
import { useState } from "react";

const App = () => {
  const name = useField('text')
  const born = useField('date')
  const height = useField('number')

  return (
    <div>
      <form>
        name: 
        <input  {...name} /> 
        <br/> 
        birthdate:
        <input {...born} />
        <br /> 
        height:
        <input {...height} />
      </form>
      <div>
        {name.value} {born.value} {height.value}
      </div>
    </div>
  )
}

export default App