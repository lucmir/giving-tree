"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryDocuments = exports.addDocument = void 0;
const addDocument = (title, description, content) => __awaiter(void 0, void 0, void 0, function* () {
    const document = {
        title,
        description,
        content,
    };
    console.log("Document added: ", JSON.stringify(document));
    // TODO add document
});
exports.addDocument = addDocument;
const queryDocuments = (query) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Querying documents with: ", query);
    const documentMock = {
        title: "About Civic",
        description: "Civic provides tokenized identity, built for the future",
        content: "Identity isnt just a representation of us — it is us. Or at least it could be." +
            "Were working toward a world where identity is not only defined by documents, but also personality — where the unique expression of an individual contributes to the security of a digital identity that they own and control." +
            "This work is grounded in our firm belief that identity is a fundamental human right, and should be universally accessible. This will not only broaden access to social rights like voting and financial services, but will also allow more people to make a living in this new web3 economy." +
            "As leaders in decentralized identity since 2015, were pursuing this future with a level of confidence that can only be achieved through experience. We know we can make this future real, and we hope youll build it with us.",
    };
    return Promise.resolve([documentMock]);
});
exports.queryDocuments = queryDocuments;
//# sourceMappingURL=dataCollectionService.js.map