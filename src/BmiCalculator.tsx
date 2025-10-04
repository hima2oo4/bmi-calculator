import { useState } from "react";

export default function BmiCalculator(){
    const [weight, setWeight] = useState(30);
    const [height, setHeight] = useState(1.2);
    const [bmi, setBmi] = useState(0);
    return(
        <div>
            <h1>BMI Calculator</h1>
            {/* Weight input field */}
            <label>
                Weight : <br/><input type="number" name="weight" placeholder="enter weight in kG" onChange={e => setWeight(parseInt(e.target.value))}></input>
            </label>
            <br></br>
            {/* height input field */}
            <label>
                Height : <br/><input type="number" name="height" placeholder="enter height in M" onChange={hima => setHeight(parseInt(hima.target.value))}></input>
            </label>
            {/* button */}
            <br></br>
            <button title="calculate BMI" onClick={() => setBmi(CalculateBmi(weight, height))}>Calculate BMI</button>
            {/* result */}
            <p>BMI is {PromptBmi(bmi)}</p>
        </div>
    )
}

function CalculateBmi(_weight : number, _height : number){
    const _bmi = _weight/(_height*_height);
    console.log(_bmi);
    return(_bmi)
}

function PromptBmi(_bmi : number){
    let _prompt = "";
    switch(true){
        case (_bmi < 18.5):
            _prompt = "underwirght";
            break;
        case (_bmi >= 18.5 && _bmi<25):
            _prompt = "healthy";
            break;
        default:
            _prompt = "overweight";
            break;
    }
    return(`you are ${_prompt}, your BMI is ${_bmi}`)
}