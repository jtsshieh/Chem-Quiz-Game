export const covalentMolecules = [
    [{ element: 'H', number: 2 }, { element: 'O', number: 1 }],
    [{ element: 'Sb', number: 1 }, { element: 'Br', number: 3 }],
    [{ element: 'B', number: 6 }, { element: 'Si', number: 1 }],
    [{ element: 'Cl', number: 1 }, { element: 'O', number: 2 }],
    [{ element: 'I', number: 1 }, { element: 'F', number: 5 }],
    [{ element: 'N', number: 2 }, { element: 'O', number: 3 }],
    [{ element: 'P', number: 4 }, { element: 'S', number: 5 }],
    [{ element: 'Se', number: 1 }, { element: 'F', number: 6 }],
    [{ element: 'Si', number: 2 }, { element: 'Br', number: 6 }],
    [{ element: 'S', number: 1 }, { element: 'Cl', number: 4 }],
    [{ element: 'B', number: 2 }, { element: 'Si', number: 1 }],
    [{ element: 'N', number: 1 }, { element: 'F', number: 3 }]
]

export const ionicMolecules = [
    [{ element: 'Li', number: 1 }, { element: 'Cl', number: 1 }],
    [{ element: 'Na', number: 1 }, { element: 'Cl', number: 1 }],
    [{ element: 'K', number: 1 }, { element: 'Cl', number: 1 }],
    [{ element: 'Mg', number: 1 }, { element: 'Cl', number: 2 }],
    [{ element: 'Ca', number: 1 }, { element: 'Cl', number: 2 }],
    [{ element: 'Ba', number: 1 }, { element: 'Cl', number: 2 }],
    
    [{ element: 'Li', number: 1 }, { element: 'Br', number: 1 }],
    [{ element: 'Na', number: 1 }, { element: 'Br', number: 1 }],
    [{ element: 'Ba', number: 1 }, { element: 'Br', number: 2 }],
    
    [{ element: 'Mg', number: 1 }, { element: 'S', number: 1 }],

    [{ element: 'Na', number: 1 }, { element: 'F', number: 1 }],
    [{ element: 'Mg', number: 1 }, { element: 'F', number: 2 }],
    [{ element: 'Li', number: 1 }, { element: 'F', number: 1 }],
];

const elements: Record<string, string> = {
    "H": "hydrogen",
    "He": "helium",
    "Li": "lithium",
    "Be": "beryllium",
    "B": "boron",
    "C": "carbon",
    "N": "nitrogen",
    "O": "oxygen",
    "F": "fluorine",
    "Ne": "neon",
    "Na": "sodium",
    "Mg": "magnesium",
    "Al": "aluminium",
    "Si": "silicon",
    "P": "phosphorus",
    "S": "sulfur",
    "Cl": "chlorine",
    "Ar": "argon",
    "K": "potassium",
    "Ca": "calcium",
    "Sc": "scandium",
    "Ti": "titanium",
    "V": "vanadium",
    "Cr": "chromium",
    "Mn": "manganese",
    "Fe": "iron",
    "Co": "cobalt",
    "Ni": "nickel",
    "Cu": "copper",
    "Zn": "zinc",
    "Ga": "gallium",
    "Ge": "germanium",
    "As": "arsenic",
    "Se": "selenium",
    "Br": "bromine",
    "Kr": "krypton",
    "Rb": "rubidium",
    "Sr": "strontium",
    "Y": "yttrium",
    "Zr": "zirconium",
    "Nb": "niobium",
    "Mo": "molybdenum",
    "Tc": "technetium",
    "Ru": "ruthenium",
    "Rh": "rhodium",
    "Pd": "palladium",
    "Ag": "silver",
    "Cd": "cadmium",
    "In": "indium",
    "Sn": "tin",
    "Sb": "antimony",
    "Te": "tellurium",
    "I": "iodine",
    "Xe": "xenon",
    "Cs": "cesium",
    "Ba": "barium",
    "La": "lanthanum",
    "Ce": "cerium",
    "Pr": "praseodymium",
    "Nd": "neodymium",
    "Pm": "promethium",
    "Sm": "samarium",
    "Eu": "europium",
    "Gd": "gadolinium",
    "Tb": "terbium",
    "Dy": "dysprosium",
    "Ho": "holmium",
    "Er": "erbium",
    "Tm": "thulium",
    "Yb": "ytterbium",
    "Lu": "lutetium",
    "Hf": "hafnium",
    "Ta": "tantalum",
    "W": "tungsten",
    "Re": "rhenium",
    "Os": "osmium",
    "Ir": "iridium",
    "Pt": "platinum",
    "Au": "gold",
    "Hg": "mercury",
    "Tl": "thallium",
    "Pb": "lead",
    "Bi": "bismuth",
    "Po": "polonium",
    "At": "astatine",
    "Rn": "radon",
    "Fr": "francium",
    "Ra": "radium",
    "Ac": "actinium",
    "Th": "thorium",
    "Pa": "protactinium",
    "U": "uranium",
    "Np": "neptunium",
    "Pu": "plutonium",
    "Am": "americium",
    "Cm": "curium",
    "Bk": "berkelium",
    "Cf": "californium",
    "Es": "einsteinium",
    "Fm": "fermium",
    "Md": "mendelevium",
    "No": "nobelium",
    "Lr": "lawrencium",
    "Rf": "rutherfordium",
    "Db": "dubnium",
    "Sg": "seaborgium",
    "Bh": "bohrium",
    "Hs": "hassium",
    "Mt": "meitnerium",
    "Ds": "darmstadtium",
    "Rg": "roentgenium",
    "Cn": "copernicium"
}
const endings: Record<string, string> = { O: 'oxide', S: 'sulfide', F: 'fluoride', Cl: 'chloride', I: 'iodide', Si: 'silicide', Br: 'bromide' }


const prefixes: Record<number, string> = {
    1: 'mono',
    2: 'di',
    3: 'tri',
    4: 'tetra',
    5: 'penta',
    6: 'hexa',
    7: 'hepta',
    8: 'octa',
    9: 'nona',
    10: 'deca'
}
export function getName(isCovalent: boolean, molecule: {element: string, number: number}[]) {
    if (isCovalent) {
        const first = molecule[0];
        const second = molecule[1];

        let result = '';
        
        if (first.number !== 1) {
            result += prefixes[first.number]
        }
        result += elements[first.element];

        result += ' ';

        if (prefixes[second.number] !== 'tri' && second.element === 'O') {
            result += prefixes[second.number].substring(0, prefixes[second.number].length - 1) + endings[second.element];
        } else {
            result += prefixes[second.number] + endings[second.element]
        }
        return result;
    } else {
        const first = molecule[0];
        const second = molecule[1];
        return elements[first.element] + ' ' + endings[second.element]
    }
}