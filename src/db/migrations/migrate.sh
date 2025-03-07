#!/bin/bash

# Charge variables 
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

# Variables for PostgreSQL
DB_NAME="tapakila"
DB_ADMIN="postgres" 
DB_USER=$DATABASE_USER     
DB_PASSWORD=$DATABASE_PASSWORD

# Execute the file for user creation
echo "🚀 Create an user..."
psql -U $DB_ADMIN -h localhost -d $DB_NAME -f "migrations/01_create_user.sql"
echo "✅ user created !"

# Execute the file for grants
echo "🚀 Grant privillegies..."
psql -U $DB_ADMIN -h localhost -d $DB_NAME -f "migrations/02_grant_all_necessary_privilege_to_the_user.sql"
echo "✅ privileges granted successfully ! "

# Execute all migrations with user created
echo "🚀 Execute all migrations..."
for file in migrations/*.sql; do
    # Not execute files which create user and grant privillegies twice
    if [[ "$file" != "migrations/01_create_user.sql" && "$file" != "migrations/02_grant_all_necessary_privilege_to_the_user.sql" ]]; then
        psql -U $DB_USER -h localhost -d $DB_NAME -f "$file"
    fi
done

echo "✅ All migrations executed successfully."
