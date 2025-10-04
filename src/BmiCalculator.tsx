import { useState } from "react";

export default function BmiCalculator(){
    const [weight, setWeight] = useState(30);
    const [height, setHeight] = useState(1.2);
    const [bmi, setBmi] = useState(0);
    return(
        <div className="flex w-screen h-screen bg-amber-300 justify-center items-center">
            <div className="bg-white w-1/2 rounded-2xl m-auto p-8">
                <h1 className="text-xl font-bold">BMI Calculator</h1>
                {/* Weight input field */}
                <label>
                    Weight : <br /><input alt="weight input field" title="enter weight" type="number" name="weight" placeholder="enter weight in kG" onChange={e => setWeight(parseInt(e.target.value))} className="m-1 p-0.5 outline-1 rounded-sm focus:outline-amber-400"></input>
                </label>
                <br></br>
                {/* height input field */}
                <label>
                    Height : <br /><input alt="height input field" title="enter height" type="number" name="height" placeholder="enter height in M" onChange={hima => setHeight(parseInt(hima.target.value))} className="m-1 p-0.5 outline-1 rounded-sm focus:outline-amber-400"></input>
                </label>
                {/* button */}
                <br></br>
                <button title="calculate BMI" onClick={() => setBmi(CalculateBmi(weight, height))} className="m-1 p-0.5 bg-amber-200 rounded-md">Calculate BMI</button>
                {/* result */}
                <p>{PromptBmi(bmi)}</p>
            </div>
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