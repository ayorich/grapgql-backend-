// Connect to firebase database
const admin = require("../database/database");

const resolvers = {
  Query: {
    async results(parentValue: any, args: { userID: any }, req:any) {
      const results = await admin
        .firestore()
        .collection('results')
        .where('userID', '==', args.userID)
        .get();
      return results.docs.map((result: any) => result.data());
    },
  

  async datas(parentValue: any, args: { docID: any }, req:any) {
      const data = await admin
        .firestore()
        .collection('results')
        .where('docID', '==', args.docID)
        .get();
    return data.docs.map((result: any) => result.data());
      
    },

  },
};

export default resolvers;
