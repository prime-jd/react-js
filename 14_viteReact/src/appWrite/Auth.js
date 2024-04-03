import conf from "../conf/conf"
import { Client, Account, ID } from "appwrite";


export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }


   // create account functionality
    async createAccount(email, password, name){
        try {
          const userAccount=  await this.account.create(email,password, ID.unique()) 
          if (userAccount) {
            // call another method by directing to login
            this.login({email, password})

          }else {
            return userAccount;
          }
        } catch (error) {
           throw error; 
        }
    }



    // login functionality
    async login(email, password){
        try {
            return await this.account.createEmailPasswordSession(email,password)
            
        } catch (error) {
           throw error; 
        }
    }

    // get current user
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error",error);
        }
        return null;
    }

    //logout functionality
    async logout(){
        try {
            await this.account.deleteSessions('current')
        } catch (error) {
            console.log("appwrite sessions :: logout :: error",error)
        }
    }
}

const authService = new AuthService() 

export default authService
 