#!/bin/bash

# TODOS: mila mijery ny chemin hi-excecuter-na ilay migrations
# TODOS: resaka mot de passe si user miasa en production

# Charge variables 
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

# Variables for PostgreSQL
DB_NAME="tapakila"
DB_ADMIN="postgres" 
DB_USER="tapakila_user"
DB_PASSWORD="!Tapakila_backEnd"

# Create the database if it doesn't exist
echo "🚀 Create the database if it doesn't exist..."
DB_EXISTS=$(psql -U $DB_ADMIN -d postgres -tAc "SELECT 1 FROM pg_database WHERE datname = '$DB_NAME'")
if [ -z "$DB_EXISTS" ]; then
    psql -U $DB_ADMIN -d postgres -c "CREATE DATABASE $DB_NAME"
    echo "✅ Database $DB_NAME created!"
else
    echo "✅ Database $DB_NAME already exists."
fi

# Wait a few seconds for the database to be fully initialized
echo "⏳ Waiting for database to initialize..."
sleep 5

# Execute the file for user creation
echo "🚀 Create an user..."
psql -U $DB_ADMIN -d $DB_NAME -f "/home/noums/PROJECTS/WEB3/My_project/tapakila_backend/tapakila-backend/src/db/migrations/01_create_user.sql" 
echo "✅ user created !"

# Execute the file for grants
echo "🚀 Grant privillegies..."
psql -U $DB_ADMIN -d $DB_NAME -f "/home/noums/PROJECTS/WEB3/My_project/tapakila_backend/tapakila-backend/src/db/migrations/02_grant_all_necessary_privilege_to_the_user.sql" 
echo "✅ privileges granted successfully ! "

# Execute all migrations with user created
echo "🚀 Execute all migrations..."
for file in /home/noums/PROJECTS/WEB3/My_project/tapakila_backend/tapakila-backend/src/db/migrations/*.sql; do
    # Not execute files which create user and grant privillegies twice
    if [[ "$file" != "/home/noums/PROJECTS/WEB3/My_project/tapakila_backend/tapakila-backend/src/db/migrations/01_create_user.sql" && "$file" != "/home/noums/PROJECTS/WEB3/My_project/tapakila_backend/tapakila-backend/src/db/migrations/02_grant_all_necessary_privilege_to_the_user.sql" ]]; then
        psql -U $DB_USER -d $DB_NAME -f "$file" 

    fi
done

echo "✅ All migrations executed successfully."
