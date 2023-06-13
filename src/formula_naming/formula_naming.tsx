import { ResultModal } from "../result_modal";
import { Fragment, useState } from 'react';
import { Button, Typography, Input } from '@mui/joy';
import { Link } from 'react-router-dom';
import { ionicMolecules, covalentMolecules, getName } from './naming_molecules';
import CheckIcon from "@mui/icons-material/Check";

export default function FormulaNaming() {
    const [modalOpen, setModalOpen] = useState(false);
    const [correctState, setCorrectState] = useState(false);

    const [isCovalent, setIsCovalent] = useState(Math.random() > 0.5);
    const [molecule, setMolecule] = useState(isCovalent ? covalentMolecules[Math.floor(Math.random() * covalentMolecules.length)] : ionicMolecules[Math.floor(Math.random() * ionicMolecules.length)])

    const [input, setInput] = useState('');

    function checkAnswer() {
        console.log(getName(isCovalent, molecule))
        if (input.toLowerCase() === getName(isCovalent, molecule)) {
            setCorrectState(true);
            setModalOpen(true);
        } else {
            setCorrectState(false);
            setModalOpen(true)
        }
    }
    return (
        <div className="empirical-formula">
            <ResultModal
                open={modalOpen}
                correct={correctState}
                setClose={() => {
                    setModalOpen(false);
                    if (correctState === true) {
                        const isCovalentTemp = Math.random() > 0.5
                        setIsCovalent(isCovalentTemp);
                        setMolecule(isCovalentTemp ? covalentMolecules[Math.floor(Math.random() * covalentMolecules.length)] : ionicMolecules[Math.floor(Math.random() * ionicMolecules.length)]);
                        setInput('');
                    }
                }}
            />
            <Button component={Link} to="/">Back</Button>

            <Typography level="body1">
                Name the molecule{' '}
                <Typography level="body1" variant="outlined" color="primary">
                  {molecule.map(({element, number}) => (
                    <Fragment key={element + number}>
                      {element}
                      {number != 1 ? <sub>{number}</sub> : ""}
                    </Fragment>
                  ))}
                </Typography>
            </Typography>
            
            <div className="inputs">
                <Input
                    size="sm"
                    color="primary"
                    variant="outlined"
                    value={input}
                    onChange={(event) => {
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