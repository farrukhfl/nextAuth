// import { NextAuthOptions } from "next-auth";
// import   GithubProvider from 'next-auth/providers/github'
// import   CredentialsProvider from 'next-auth/providers/credentials'
// import Credentials from "next-auth/providers/credentials";
// import { text } from "stream/consumers";


// export const options: NextAuthOptions = {
// providers: [
//   GithubProvider({
//     clientId: process.env.GITHUB_ID as string,
//     clientSecret: process.env.GITHUB_SECRET as string,
//   }),
//   CredentialsProvider({
//     name: "Credentials",
//     credentials:{
//       username:{
//         label: "Username:",
//         type: "text",
//         placeholder: "your Username"
//       },
//       password:{
//         label: "Password",
//         type: "password",
//         placeholder: "your password"
//       },
//     },
// async authorize(credentials){
//   const user = { id: '42', name: 'Dave', password:'next-auth'}
//   if(credentials?.username === user.name && credentials.password === user.password){
//     return user
//   }else{
//     return null
//   }


// }
//   })


// ],

// }