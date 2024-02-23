export type Document = {
  title: string;
  description: string;
  content: string;
};

const addDocument = async (title: string, description: string, content: string): Promise<void> => {
  const document = {
    title,
    description,
    content,
  };
  console.log("Document added: ", JSON.stringify(document));
  // TODO add document
};

const queryDocuments = async (query: string): Promise<Document[]> => {
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
};

export {
  addDocument,
  queryDocuments,
};