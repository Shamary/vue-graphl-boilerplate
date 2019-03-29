import { PubSub } from 'graphql-subscriptions'

import db from '../../models'
import { debug } from 'util';

export const pubsub = new PubSub()

export default {
    Subscription: {
        greetingSeen: {
            subscribe: () => pubsub.asyncIterator('GREETING_SEEN')
        }
    },
    Query: {
        getGreeting: (parent, args, models) => {
            const greeting = 'Hello from the server!'
            pubsub.publish('GREETING_SEEN', { greetingSeen: greeting })
            return 'Hello from the server!'
        },
        getUsers: async () => {
            const name = await db.user.findAll({
                attributes: ['name']
            })
            
            return name;
        },
        getMenu: async (root, args, context) => {
            //console.log("day = "+root+" "+args.day+" "+context)
            const res = await db.menu.findAll({
                attributes: ['appetizer','protein','carb','vegetable','sides'],
                where: {
                    day: args.day
                }
            })
            console.log("res = "+JSON.stringify(res))

            return res;
        }
    },
    Mutation: {
        makeOrder: async (root, args, context) => {
            await db.order.create({
                day: args.day,
                name: args.user,
                appetizer: args.appetizer,
                protein: args.protein,
                carb: args.carb,
                vegetable: args.vegetable,
                sides: args.sides
            }).complete(function (err, other) {
                if (err) {
                    console.log("Make Order error: "+err)
                }
            })
        }
    }

}