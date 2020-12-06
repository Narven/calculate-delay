What is the main difference between these two functions?
Why is one better than the other?

const db = myDatabaseManager;

const myDbFunc = async (data) => {
    await db(INSERT INTO table (id,name,age)
    VALUES(${data.id},“{data.name}”, ${data.age})
    ON DUPLICATE KEY UPDATE name =‘${data.name}”,age=${data.age};‘)
    }

const myOtherDbFunc = async (data) => {
    const updatedRows = await db(`UPDATE table SET (name, age) VALUES ("${data.name}",${data.age}) WHERE id = ${data.id} RETURNING *;`)
    // If no rows were updated
    if (!updatedRows) {
        await db(`INSERT INTO table (id, name, age) VALUES(${data.id},"${data.name}", ${data.age});`)
    }}


### Response

The first function try's to INSERT DATA into a table, and if the UNIQUE FIELD already exists, it UPDATES that existing record.
The second function makes 2 calls, first tries to do an UPDATE and if it fails because there is no such row, it makes a second call to the database to INSERT A NEW RECORD

I think that the first function is the best approach because:
    * it's easier to maintain since there is only one call, less code logic
    * any logic for the insert/update is handle by the database
