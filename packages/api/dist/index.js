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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dataCollectionService_1 = require("./services/dataCollectionService");
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
// middleware to parse JSON bodies
app.use(body_parser_1.default.json());
app.get('/', (_req, res) => {
    return res.send('Data collection API\n' + 'Endpoints:\n' + 'POST /documents\n' + 'POST /query-documents\n');
});
app.post('/documents', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, content } = req.body;
    yield (0, dataCollectionService_1.addDocument)(title, description, content);
}));
app.post('/documents/query', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { query } = req.body;
    const documents = yield (0, dataCollectionService_1.queryDocuments)(query);
    return res.send({ documents });
}));
app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map