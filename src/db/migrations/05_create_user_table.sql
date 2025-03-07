create table if not exists "user" (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    role_id UUID references "role"(id) on delete cascade,
    username varchar(100),
    name varchar(100),
    email varchar(100),
    email_verified_at timestamp,
    password varchar(100),
    image_url varchar(100),
    country_id UUID references country(id) on delete cascade,
    created_at timestamp,
    updated_at timestamp,
    deleted_at timestamp
);