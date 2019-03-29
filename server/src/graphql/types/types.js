export default `
    
    type Human {
      name: String!
      age: Int
      country: String
    }
    
    type User {
      name: String!
    }

    type Menu {
      day: String
      appetizer: String
      protein: String
      carb: String
      vegetable: String
      sides: String
    }

    type Order {
      day: String
      name: String
      branch: Int
      appetizer: String
      protein: String
      carb: String
      vegetable: String
      sides: String
    }

    type Query {
      getGreeting: String!
      getUsers: [User]!
      getMenu(day: String!): [Menu]!
      getOrder(name: String!, day: String!): Order!
    }
    
    type Mutation {
      makeOrder (user: String!, day: String!, appetizer: String, protein: String, carb: String, vegetable: String, sides: String): Order
    }

    type Subscription {
      greetingSeen: String!
    }
    
    schema {
      query: Query
      subscription : Subscription
    }
    
`