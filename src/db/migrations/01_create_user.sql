drop database IF EXISTS ticket_place;

-- Step 4: Create the database
create DATABASE ticket_place;

-- Step 5: Grant the user permission to connect to the database
grant connect on DATABASE ticket_place TO "user";

-- Step 6: Grant usage on a specific schema (replace `schema` with your schema name)
grant USAGE on SCHEMA public TO "user";

\dn --check shema
-- Step 7: Grant table-level privileges (replace `schema` with your schema name)
grant
select, insert,
update, delete on ALL TABLES IN SCHEMA public TO "user";

grant USAGE on ALL SEQUENCES IN SCHEMA public TO "user";

grant REFERENCES on ALL TABLES IN SCHEMA public TO "user";

-- Step 8: (Optional) Automatically grant privileges for future tables in the schema
alter DEFAULT PRIVILEGES IN SCHEMA public
grant
select, insert,
update, delete on TABLES to "user";

-- Add this to data source bashrc or zshrc
-- export DB_USER = "user" 
-- export DB_HOST = "localhost" 
-- export DB_NAME = "ticket_place" 
-- export DB_PASSWORD = "yourdatabase" 
-- export DB_PORT = "5432"

