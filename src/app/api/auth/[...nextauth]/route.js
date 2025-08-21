import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
// console.log("NEXTAUTH_SECRET:", process.env.NEXTAUTH_SECRET);

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login", // optional: custom login page
  },
})

export { handler as GET, handler as POST }
