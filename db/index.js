const MongoClient = require('mongodb').MongoClient;
const {uri, db} = require('./config');
const ObjectId = require('mongodb').ObjectID;

const getUsers = async () => {
    try {
        const client = new MongoClient(uri, {useNewUrlParser: true});
        await client.connect();

        const collection = await client.db(db).collection("users");
        result = await collection.find({}).toArray();
        client.close();
        return result;

    } catch (e) {
        throw e;
    }
};

const getPosts = async () => {
    try {
        const client = new MongoClient(uri, {useNewUrlParser: true});
        await client.connect();

        const collection = await client.db(db).collection("posts");
        result = await collection.find({}).toArray();
        client.close();
        return result;

    } catch (e) {
        throw e;
    }
};

const addUser = async newUser => {
    try {
        const client = new MongoClient(uri, {useNewUrlParser: true});
        await client.connect();

        const collection = await client.db(db).collection("users");
        await collection.insertOne(newUser);
        client.close();

    } catch (e) {
        throw e;
    }
};

const addPost = async newPost => {
    try {
        const client = new MongoClient(uri, {useNewUrlParser: true});
        await client.connect();

        const collection = client.db(db).collection('posts');
        await collection.insertOne(newPost);
        client.close();

    } catch (e) {
        throw e;
    }
};

const editUser = async (id, user) => {
    try {
        const client = new MongoClient(uri, {useNewUrlParser: true});
        await client.connect();

        const collection = await client.db(db).collection("users");
        await collection.updateOne({"_id": ObjectId(id)}, {$set: user});
        client.close();

    } catch (e) {
        throw e;
    }
};

const editPost = async (id, post) => {
    try {
        const client = new MongoClient(uri, {useNewUrlParser: true});
        await client.connect();

        const collection = await client.db(db).collection("posts");
        await collection.updateOne({"_id": ObjectId(id)}, {$set: post});
        client.close();

    } catch (e) {
        throw e;
    }
};

module.exports = {
    getUsers,
    getPosts,
    addUser,
    addPost,
    editUser,
    editPost
};