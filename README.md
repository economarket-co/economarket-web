# Econo Market

## Technologies
1. Nodejs 
2. Nextjs
3. Type Script
4. Tailwind Css
5. Supabase for OAuth, database (PostgreSQL) and files storage(images)

## Setup

### Enviroment Variables
Create a file `.env` in the project root directory, this should have the following content

```
NEXT_PUBLIC_SUPABASE_URL=your supabase project url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your supabase anon key

// In this case we use supabase as database service, but can be any other 
DATABASE_URL=databse url
```

### Important
If you are going to use supabase as your file storage, you need to create a bucket called `images`, make it public and run the following sql script in the db to allow to save files on it

`
create policy "Allow upload on images"
on storage.objects for insert
with check ( bucket_id = 'images' );
`

## Install dependencies
Run the following command to install all dependencies
``` bash
npm install
``` 

## Run development enviroment
Go to project root and run 
```bash
npm run dev
``` 
