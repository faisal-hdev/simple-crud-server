/**
 * mongoDB connection
 * 1. create account
 * 2. create an user with password
 * 3. whitelist is address
 * 4. database > connect > Driver > node view full code
 * 5. change the password uri
 * -----------------------------
 * 1. CREATE ---- POST
 * 2. app.post("/users"/ async (req,res)=> {})
 * 3. make the function async to await inside it
 * 4. make sure you use the express.json() middleware
 * 5. access data form the body: const user = req.body
 * 6. const result = await userCollection.insertOne(user)
 * 7. res.send(result)
 *
 *
 * CLIENT side
 * 1. create fetch
 * 2. add second parameter
 * 3. provide method: post
 * 4. add headers : {'content-type':'application/json'}
 * 5. add body : JSON.Stringify(user)
 *
 * READ MANY
 * 1. create a cursor =userCollection.find()
 * 2. const result = await cursor.toArray()
 *
 * DELETE
 * 1. create app.delete('/users/:id', async(req,res)=>{})
 * 2. specify unique objectId to delete the right user
 * 3. const query = { _id: new ObjectId(id) };
 * 4. const result = await userCollection.deleteOne(query)
 *
 * CLIENT
 * 1. create dynamic url with id
 * 2. mention the delete method
 * 3.
 *
 *
 */
