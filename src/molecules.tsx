import { Fragment } from "react";
import Typography from "@mui/joy/Typography";

export const molecules: Record<string, number>[] = [
  { C: 1, S: 2 },

  { C: 1, H: 1 },
  { C: 1, H: 2 },
  { C: 2, H: 1 },
  { C: 2, H: 5 },

  { C: 1, H: 5, N: 1 },
  { C: 3, H: 3, N: 1 },
  { C: 3, H: 4, N: 2 },
  { C: 4, H: 8, N: 3 },
  { C: 5, H: 7, N: 1 },

  { C: 14, H: 22, N: 2, O: 1 },

  { C: 1, H: 2, O: 1 },
  { C: 1, H: 4, O: 3 },
  { C: 2, H: 3, O: 2 },
  { C: 3, H: 6, O: 1 },
  { C: 3, H: 8, O: 2 },
  { C: 4, H: 5, O: 1 },
  { C: 5, H: 8, O: 2 },
  { C: 6, H: 14, O: 1 },
  { C: 14, H: 8, O: 5 },

  { C: 1, H: 1, Cl: 1 },
  { C: 3, Na: 1, O: 3 },

  { H: 1, O: 1 },
  { N: 1, O: 2 },
  { S: 1, O: 3 },
  { H: 2, S: 1, O: 4 },
  { Mg: 1, S: 1, O: 3 },
  { Mg: 3, N: 2 },
  { As: 2, O: 3 },
  { K: 2, Cr: 2, O: 7 },
  { H: 2, S: 2, O: 3 },
  { B: 5, H: 7 },
  { Fe: 1, S: 1 },
  { Pb: 1, Cl: 1 },
  { Na: 2, Cr: 2, O: 7 },
  { Li: 3, P: 1, O: 4 },
];

export function generateRandomMolecule(): Record<string, number> {
  return molecules[Math.floor(Math.random() * molecules.length)];
}

export function Molecule({ molecule }: { molecule: Record<string, number> }) {
  return (
    <Typography level="body1" variant="solid" color="primary">
      {Object.entries(molecule).map(([element, number]) => (
        <Fragment key={element + number}>
          {element}
          {number != 1 ? <sub>{number}</sub> : ""}
        </Fragment>
      ))}
    </Typography>
  );
}
