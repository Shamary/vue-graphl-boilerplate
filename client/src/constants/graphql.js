import gql from 'graphql-tag'

// GREETING QUERY
export const GREETING_QUERY = gql`
  query greeting {
    getGreeting   
  }
`
export const USER_QUERY = gql`
  query Users {
    getUsers {
      name
    }
  }
`

export const MENU_QUERY = gql`
  query Menu ($day: String!) {
    getMenu (day: $day) {
      appetizer
      protein
      carb
      vegetable
      sides
    }
  }
`
export const ORDER_MUTATION = gql`
  mutation OrderMutation ($user:String!, $day:String!, $appetizer: String, $protein: String, $carb: String, $vegetable: String, $sides: String) {
    makeOrder (user: $user, day: $day, appetizer: $appetizer, protein: $protein, carb: $carb, vegetable: $vegetable, sides: $sides) {
      name
    }
  }
`

// GREETING SEEN SUBSCRIPTION
export const GREETING_SUBSCRIPTION = gql`
  subscription greetingSeen {
    greetingSeen
  }
`
