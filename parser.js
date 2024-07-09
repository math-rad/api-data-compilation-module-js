
class APIParser {
    constructor(params) {
        const storage = {}
        for (let identifier of this.store) {
            /**
             * @type {string}
             */
            
            storage[identifier] = identifier.endsWith("[]") ? [] : {}
        }
    }
    endpoint = ""
    store = [""]
    paths = [{}]
}

class team extends APIParser {
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
}