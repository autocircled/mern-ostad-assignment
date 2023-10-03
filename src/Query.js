use('erp')

// create new collection
db.createCollection("products");

// Removes a collection from the database
db.products.drop();

// Insert a single document into a collection
db.products.insertOne({
    'name': 'Product 1',
    'price': 100,
    'description': 'Product 1 Description',
    'inventory': 10
});

// Delete/remove a single document from the collection
db.products.deleteOne({_id: ObjectId('651b62e61e7f17b2cb6e9d01')});