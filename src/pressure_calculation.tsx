import { useState } from 'react';
import { Typography, Input, Button } from '@mui/joy';
import CheckIcon from "@mui/icons-material/Check";
import { ResultModal } from "./result_modal";
import { Link } from 'react-router-dom';

const pressureConstant = 0.0821;
const variables = [
    'pressure',
    'volume',
    'temperature',
    'moles',
] as const;

const units: Record<string, string> = {
    pressure: 'atm',
    volume: 'L',
    temperature: 'K',
    moles: 'mols'
};

export default function PressureCalculation() {
    const [variableToSolve, setVariableToSolve] = useState(variables[Math.floor(Math.random() * variables.length)]);

    const [pressure, setPressure] = useState(Number((Math.random() * 10 + 0.0001).toFixed(3)));
    const [volume, setVolume] = useState(Number((Math.random() * 10 + 0.0001).toFixed(5)));
    const [temperature, setTemperature] = useState(Number(Math.floor(Math.random() * 200) + 200));
    const [moles, setMoles] = useState(Number(((pressure * volume) / (pressureConstant * temperature)).toFixed(3)));

    const [kelvin, setKelvin] = useState(Math.random() >= 0.5);
    const [mL, setmL] = useState(Math.random() >= 0.5);

    const [input, setInput] = useState('');

    const [modalOpen, setModalOpen] = useState(false);
    const [correctState, setCorrectState] = useState(false);
    const checkAnswer = () => {
        const actualValue = { pressure, volume, temperature, moles }[variableToSolve];
        console.log(actualValue)
        if (Number(input) < actualValue + 5 && Number(input) > actualValue - 5) {
            setCorrectState(true);
            setModalOpen(true);
        } else {
            setCorrectState(false);
            setModalOpen(true);
        }
    }

    return (
        <div>
            <ResultModal
                open={modalOpen}
                correct={correctState}
                setClose={() => {
                    setModalOpen(false);
                    if (correctState === true) {
                        setVariableToSolve(variables[Math.floor(Math.random() * variables.length)]);
                        setPressure(Number((Math.random() * 10 + 0.0001).toFixed(3)));
                        setVolume(Number((Math.random() * 10 + 0.0001).toFixed(5)));
                        setTemperature(Number(Math.floor(Math.random() * 200) + 200));
                        setMoles(Number(((pressure * volume) / (pressureConstant * temperature)).toFixed(3)));
                        setKelvin(Math.random() >= 0.5);
                        setmL(Math.random() >= 0.5);
                        setInput('');
                    }
                }}
            />
            <Button component={Link} to="/">Back</Button>
            <Typography level="body1">
                Find the {variableToSolve} of the gas when the{' '}

                {
                    variableToSolve != 'pressure' &&
                    <>
                        pressure is{' '}
                        <Typography level="body1" variant="outlined" color="primary">
                            {pressure} atm
                        </Typography>,{' '}
                    </>
                }
                {
                    variableToSolve != 'volume' && <>
                        volume is{' '}
                        <Typography level="body1" variant="outlined" color="primary">
                            {kelvin ? volume + ' L' : (volume * 1000).toFixed(3) + ' mL'}
                        </Typography>,{' '}</>
                }
                {
                    variableToSolve != 'temperature' && <>
                        temperature is{' '}
                        <Typography level="body1" variant="outlined" color="primary">
                            {mL ? temperature + ' K' : temperature - 273 + ' C'}
                        </Typography>,{' '}
                    </>
                }
                {
                    variableToSolve != 'moles' && <>
                        moles is{' '}
                        <Typography level="body1" variant="outlined" color="primary">
                            {moles} mols
                        </Typography>
                    </>
                }

            </Typography>

            <div className="inputs">
                <Input
                    size="sm"
                    color="primary"
                    variant="outlined"
                    value={input}
                    endDecorator={units[variableToSolve]}
                    onChange={(event) => {
                        if (isNaN(+event.target.value)) return;
                        setInput(event.target.value);
                    }}
                />
                <Button
                    disabled={input === ''}
                    color="success"
                    size="sm"
                    onClick={checkAnswer}
                    endDecorator={<CheckIcon />}
                >
                    Check
                </Button>
            </div>
        </div>
    )
}