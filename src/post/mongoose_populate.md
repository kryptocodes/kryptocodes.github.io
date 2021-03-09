---
title: "Working with Mongoose populate"
date: 2020-04-18T19:57:28+05:30
slug: "Working with Mongoose populate"
---
One caveat before I start: there is [great official documentation](https://mongoosejs.com/docs/populate.html) for populate, from which I have taken quite a bit of information. If I say something that contradicts what the documentation says, assume the documentation is right.

What is Mongoose ?
========

Mongoose is a elegant MongoDB object modeling for node.js.It manages relationships between data,provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB

![mongoose](https://i.pinimg.com/474x/34/3c/a7/343ca7d9efc72ddca52c1dfaeb89a28a--so-cute-wild-animals.jpg)

> Oh Hi Hoomans

### So What is MongoDB??

MongoDB is an Open Source,NoSQL document database. It means you can store JSON documents in it, and the structure of these documents can vary as it is not enforced like SQL databases. This is one of the advantages of using NoSQL as it speeds up application development and reduces the complexity of deployments.

![mongo](/images/mongo/mongo.png)

>  an example of how data is stored in Mongo vs SQL Database

## Mongoose Concepts

Mongoose uses schemas to model the data an application wishes to store and manipulate in MongoDB. This includes features such as type casting, validation, query building, and more.
The schema describes the attributes of the properties (aka fields) the application will manipulate.

# Alright seems cool but what is the use of populate?

> Populate() function populate

Model.populate(), a Mongoose method that you can use to essentially link documents across collections. This allows you to have a schema for each of them, and generally keep things all nice and tidy.

let's consider a example pokedex that sounds familiar right

```Javascript
pokedex.findOne({ id: 6 })
```

will return a pokemon of that id

```Javascript
 {
    "id": 6,
    "pokemon": "Charizard",
    "type": [
        "Fire",
        "Flying"
    ],
    "weaknesses": [
      "Water",
      "Electric",
      "Rock"
    ]
 }
 ```

In some case, those kind of request would be enough, because we don't care about the weakness or the type so,having some ID won't bother us much.

But in the case where i need that base like HP and Attack, i'll need to make another request to find it in database. Except, that here in mongoose we have a clever function called populate() that we can chained to our previous request in order to directly get that information in our answer without explictly doing an additional request.

```Javascript
pokedex.findOne({ id: 6 }).populate('pokemon')
```


```Javascript
{
    "id": 6,
    "pokemon": {
        "Name":"Charizard",
        "HP": 78,
        "Attack": 84,
        "Defense": 78,
        "Sp. Attack": 109,
        "Sp. Defense": 85,
        "Speed": 100,
        "height": "1.70 m",
        "weight": "90.5 kg",
        "candy": "Charmander Candy",
        "egg": "Not in Eggs"
    },
    "type": [
        "Fire",
        "Flying"
    ],
    "weaknesses": [
      "Water",
      "Electric",
      "Rock"
    ]
 }
 ```

 ![charmander_candy](/images/mongo/charmander_candy.jpg)

 But maybe, that's too much information, and we don't need unnecessary data like candy or egg.Only the Pokemon's HP and Attack are enough. Populate can then take another argument containing the field that we need

```Javascript
pokedex.findOne({ id: 6 }).populate('pokemon', 'Name HP Attack Defense')
```

`Result`

```Javascript
{
    "id": 6,
    "pokemon": {
        "Name":"Charizard",
        "HP": 78,
        "Attack": 84,
        "Defense": 78
    },
    "type": [
        "Fire",
        "Flying"
    ],
    "weaknesses": [
      "Water",
      "Electric",
      "Rock"
    ]
}
```
> **TL;DR** Populate will automatically replace the specified path in the document, with document(s) from other collection(s)

![mongoose_2](https://nationalzoo.si.edu/sites/default/files/animals/dwarf-mongoose_dsc00079.jpg)

> I'm cool right?

Hopefully this information was helpful in some way! If you have any questions or comments, post it right here in the comment box or please feel free to reach out to me on [telegram](https://t.me/kryptocodes)