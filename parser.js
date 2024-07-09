
class APIParser {
    "endpoint" = "https://api.example.com/v1";
    "store" = ["dictionary", "array[]", "array2"];
    "paths" = [
        {
            "path": "/path/$/to/$/something",
            "with": ["param.a", "param.b"],
            "tree": {
                "anIndex": "dictionary.xy",
                "index.index": "dictionary.xyz",
                "somethingElse.[a, b, c]": "dictionary.$",
                "something2.*": "dictionary.$",
                "someArray": {
                    "&iter": "matches&thing",
                    "id": "thing.id",
                    "someotherkey": "thing.id"
                }
            }
        }
    ];
    constructor(params) {
        const storage = {};
        for (let identifier of this.store) {       
            // storage object of either an array or dictionary  
            storage[identifier] = identifier.endsWith("[]") ? [] : {};
        };

        for (let pathObject of this.paths) {
            const pathValues = pathObject.with;

            let path = pathObject.path;
            
            const splitPathSections = path.split('$');
            for (let index = 0; index < Math.min(pathValues.length, splitPathSections.length); index++) {
                const splitPathValue = pathValues[index].split('.')
                path = path.replace('$', params[splitPathValue[0]][splitPathValue[1]], index)
            }
        };
    }
    
}

new APIParser({
    "param": {
        "a": "[something]",
        "b": "[new]"
    }
})