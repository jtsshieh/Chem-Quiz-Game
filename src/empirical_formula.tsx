import { useState, Fragment } from "react";
import { Molecule, molecules } from "./molecules";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import CheckIcon from "@mui/icons-material/Check";
import { molarMass } from "./molar_mass";
import { ResultModal } from "./result_modal";
import { generateRandomMolecule } from "./molecules";
import { Link } from 'react-router-dom';

function generateBlankInput(molecule: Record<string, number>) {
  return Object.keys(molecule).reduce<Record<string, number>>(
    (acc, element) => {
      acc[element] = 0;
      return acc;
    },
    {}
  );
}

export default function EmpiricalFormula() {
  const [molecule, setMolecule] = useState<Record<string, number>>(
    generateRandomMolecule()
  );
  const [inputMolecule, setInputMolecule] = useState<Record<string, number>>(
    generateBlankInput(molecule)
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [correctState, setCorrectState] = useState(false);

  const molarMasses = Object.entries(molecule).reduce<Record<string, number>>(
    (acc, [element, number]) => {
      acc[element] = number * molarMass[element];
      return acc;
    },
    {}
  );
  const checkAnswer = () => {
    let correct = true;
    for (const [element, number] of Object.entries(inputMolecule)) {
      if (molecule[element] !== number) correct = false;
    }
    setModalOpen(true);
    setCorrectState(correct);
  };

  const totalMass = Object.values(molarMasses).reduce(
    (acc, current) => acc + current,
    0
  );
  return (
    <div className="empirical-formula">
      <ResultModal
        open={modalOpen}
        correct={correctState}
        setClose={() => {
          setModalOpen(false);
          if (correctState === true) {
            let newMolecule = molecule;
            while (newMolecule === molecule) {
              newMolecule = generateRandomMolecule();
            }
            setMolecule(newMolecule);
            setInputMolecule(generateBlankInput(newMolecule));
          }
        }}
      />
    <Button component={Link} to="/">Back</Button>
      <Typography level="body1">
        Find the empirical formula of a compound that is found to contain{" "}
        {Object.entries(molarMasses).map(([element, mass], i) => (
          <Fragment key={element + mass}>
            <Typography level="body1" variant="outlined" color="primary">
              {((mass / totalMass) * 100).toFixed(2)}% {element}
            </Typography>
            {i != molarMasses.length - 1 ? ", " : ""}
          </Fragment>
        ))}
      </Typography>

      <div className="inputs">
        <div>
          {Object.keys(molecule).map((element) => (
            <Input
              className="element-input"
              startDecorator={element}
              size="sm"
              color="primary"
              variant="outlined"
              key={element}
              value={inputMolecule[element] === 0 ? "" : inputMolecule[element]}
              onChange={(event) => {
                if (isNaN(+event.target.value)) return;
                if (Number(event.target.value) > 50) return;
                setInputMolecule({
                  ...inputMolecule,
                  [element]: Number(event.target.value),
                });
              }}
            />
          ))}
        </div>
        <Button
          disabled={Object.entries(inputMolecule).some(
            ([, number]) => number === 0
          )}
          color="success"
          size="sm"
          onClick={checkAnswer}
          endDecorator={<CheckIcon />}
        >
          Check
        </Button>
      </div>
    </div>
  );
}
