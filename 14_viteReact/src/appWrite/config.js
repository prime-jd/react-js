import conf from "../conf/conf";
import { Client,ID, Databases, Storage, Query } from "appwrite";


export class Service{
client = new Client();
databases;
bucket;

constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)
    this.databases = new Databases(this.client)
    this.bucket = new Storage(this.client)
}

//create post
async createPost({title, slug, content, featuredImage, status, userId }){
    try {
        return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId
            ,slug,{
                title,
                content,featuredImage,
                status,
                userId
            }
            )

    } catch (error) {
        console.log("appwrite serive :: createPost :: error", error)
    }
} 

//update post
async updatePost(slug, {title, content, featuredImage, status}){
    try {
        return await this.databases.updateDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status
            }
            )
    } catch (error) {
        console.log("appwrite service :: updatePost :: error", error)
    }
}

// delete post
async deletePost(slug){
    try {
        await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId,slug)
        return true
    } catch (error) {
      console.log("appwrite service :: deletePost : : error", error) 
      return false 
    }
}

// get one post use (for all post use listdocument)
async getPost(queries = [Query.equal("status", "active")]){
    try {
        return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries,
        )
        
    } catch (error) {
       console.log("appwrite service:: getPost:: error ", error)
       return false 
    }

}
// file upload service
async uploadFile(file){
     try {
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
        )
     } catch (error) {
        console.log("appwrite service :: uploadFile :: error", error)
        return false
     }
}

//delete file
async deleteFile(fileId){
    try {
      await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId
      )  
    } catch (error) {
        console.log("appwrite service :: deleteFile :: error", error)
        return false
    }
}

//get file Preview
getFilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
    )
}

}


const service = new Service()

export default service;