/**  @type { import("drizzle-kit").Config } **/
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials:{
        url:'postgresql://ai_db_owner:L9swmrc0fRXM@ep-patient-sunset-a81sbhvl.eastus2.azure.neon.tech/ai_db?sslmode=require'
    }
};