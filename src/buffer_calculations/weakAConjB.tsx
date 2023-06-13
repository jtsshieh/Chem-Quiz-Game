import { bufferedMolecules } from './buffered_molecules';
import { Typography, Input, Button } from '@mui/joy';
import { useState, Fragment } from 'react';
import CheckIcon from "@mui/icons-material/Check";
import { ResultModal } from "../result_modal";
import { Link } from 'react-router-dom'
const problemTypes = [
    'molar-pH',
    'moles-pH',
] as const;

export default function WeakAConjB() {
       const [bufferedMolecule, setBufferedMolecule] = useState(bufferedMolecules[Math.floor(Math.random() * bufferedMolecules.length)]);
    const [problemType, setProblemType] = useState(problemTypes[Math.floor(Math.random() * problemTypes.length)]);
    const [acid, setAcid] = useState(Math.random());
    const [conjBase, setConjBase] = useState(Math.random());
    const [input, setInput] = useState('');
    
    const [modalOpen, setModalOpen] = useState(false);
    const [correctState, setCorrectState] = useState(false);
    
    function checkAnswer () {
        const actualInput = Number(input);

        const actualValue = bufferedMolecule.pKa + (Math.log(conjBase/acid) / Math.log(10));

        if (actualInput < actualValue + 1 && actualInput > actualValue - 1) {
            setCorrectState(true);
            setModalOpen(true);
        } else {
            setCorrectState(false);
            setModalOpen(true);
        }
    }
        const isMolar = problemType === 'molar-pH';
        return (
            <div>
                <ResultModal
                    open={modalOpen}
                    correct={correctState}
                    setClose={() => {
                        setModalOpen(false);
                        if (correctState === true) {
                            setBufferedMolecule(bufferedMolecules[Math.floor(Math.random() * bufferedMolecules.length)]);
                            setProblemType(problemTypes[Math.floor(Math.random() * problemTypes.length)]);
                            setAcid(Math.random());
                            setConjBase(Math.random());
                            setInput('');
                        }
                    }}
                />
                <Button component={Link} to="/">Back</Button>
                <Typography level="body1">
                    Find the pH of the buffered solution created using{' '}
                    <Typography level="body1" variant="outlined" color="primary">
                        {acid.toFixed(2)} {isMolar ? 'M': 'mols'}{' '}
                        {bufferedMolecule.molecule.map(({element, number}) => (
                            <Fragment key={element + number}>
                              {element}
                              {number != 1 ? <sub>{number}</sub> : ""}
                            </Fragment>
                        ))}
                    </Typography>
                    and
                    <Typography level="body1" variant="outlined" color="primary">
                        {conjBase.toFixed(2)} {isMolar ? 'M': 'mols'}{' '}
                        Na
                        {bufferedMolecule.molecule.map(({element, number, poppable}, i) => (
                            !poppable && <Fragment key={element + number + i}>
                              {element}
                              {number != 1 ? <sub>{number}</sub> : ""}
                            </Fragment>
                        ))}
                    </Typography>
                    {' '}where{' '}                   
                        Na
                        {bufferedMolecule.molecule.map(({element, number, poppable}, i) => (
                            !poppable && <Fragment key={element + number + i}>
                              {element}
                              {number != 1 ? <sub>{number}</sub> : ""}
                            </Fragment>
                        ))}
                    {' '}has a pK<sub>a</sub> of{' '}
                    <Typography level="body1" variant="outlined" color="primary">
                        {bufferedMolecule.pKa}
                    </Typography>.
                </Typography>
                <div className="inputs">
                    <Input
                        size="sm"
                        color="primary"
                        variant="outlined"
                        value={input}
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
    } 
}