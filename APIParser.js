const cx = require("./params.json")
class APICompiler {
    constructor(constructorTemplate, instanceInputs) {
        const {inputs, references, endpoint} = constructorTemplate; 
        console.log(references)
        for (let reference of references) {
            const {path: pathTemplate, with: sources, functionIndex, trackings, referenceTree} = reference;

            const splitPathTemplate = pathTemplate.split('$');
            
            let compiledPath = '';

            for (let index of splitPathTemplate) {
                const inputParts = sources[index].split('.')
                const appendage = instanceInputs[inputParts[0]][inputParts[1]]
                compiledPath += splitPathTemplate[index] + appendage
            }

            console.log(compiledPath);

        }
    }
}

const x = new APICompiler(
    cx,
    {
        "image": {
            "id": "hi",
            "format": "zfx"
        }
    }
)